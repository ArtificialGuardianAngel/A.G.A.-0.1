"use client";
import {
    PropsWithChildren,
    createContext,
    useCallback,
    useMemo,
    useState,
    useEffect,
} from "react";
import { IUser, UserTypeEnum } from "../types/user";
import { io } from "socket.io-client";
import authApi from "../api/auth";
import { IPromptAddedDto, IPromptReplyDto } from "../types/message";
import { IChatDocument, History } from "../types/chat";
import chatApi from "../api/chat";
import { parseHistoryToMessages } from "./helpers";
import { AxiosError } from "axios";

type Message = { content: string; isMe: boolean };

interface IContext {
    user: IUser | null;
    token: string | null;
    history: History;
    messages: Array<Message>;
    chats: Array<IChatDocument>;
    chat: IChatDocument | undefined;
    chatId: string | null;
    isGenerating: boolean;
    prompt: (data: string) => void;
    authorize: (...data: Parameters<typeof authApi.authorize>) => void;
    verify: (...data: Parameters<typeof authApi.verify>) => void;
    changeChat: (id: string) => void;
    startNewChat: () => void;
}

const DEFAULT_CONTEXT: IContext = {
    user: null,
    token: null,
    history: { internal: [["", ""]], visible: [["", ""]] },
    messages: [],
    chats: [],
    chatId: null,
    chat: undefined,
    isGenerating: false,
    prompt: () => {
        console.warn("Context Is Empty");
    },
    authorize: () => {
        console.warn("Context Is Empty");
    },
    verify: () => {
        console.warn("Context Is Empty");
    },
    changeChat: () => {
        console.warn("Context Is Empty");
    },
    startNewChat: () => {
        console.warn("Context Is Empty");
    },
};

export const AppContext = createContext<IContext>(DEFAULT_CONTEXT);

export const AppProvider = ({ children }: PropsWithChildren) => {
    const [isGenerating, setIsGenerating] = useState(false);
    const [messages, setMessages] = useState<
        Array<{ _id: string; content: string; isMe: boolean }>
    >([]);

    const [chatId, setChatId] = useState<string | null>(null);
    const [chats, setChats] = useState<IContext["chats"]>([]);
    const [chat, setChat] = useState<IContext["chat"]>();

    const [token, setToken] = useState<IContext["token"]>(
        DEFAULT_CONTEXT["token"],
    );
    const [user, setUser] = useState<IContext["user"]>(DEFAULT_CONTEXT["user"]);
    const [history] = useState<IContext["history"]>(DEFAULT_CONTEXT["history"]);

    const socket = useMemo(
        () =>
            io(
                `${
                    process.env.NEXT_PUBLIC_SOCKET_URL ||
                    process.env.NEXT_PUBLIC_API_URL ||
                    "https://api.aga.live"
                }/?token=${token}`,
                {
                    autoConnect: false,
                },
            ),
        [token],
    );

    const _addMessage = (
        id: string,
        content: string,
        history: null | History = null,
        isMe = false,
    ) => {
        setMessages((msgs) => {
            const h = [...msgs];
            const index = msgs.findIndex(
                (el) => el._id === id && el.isMe === isMe,
            );
            if (index > -1) {
                if (history && history.visible.length > 0) {
                    console.log(
                        "Appening new text",
                        history.visible[history.visible.length - 1],
                    );
                    h[index].content = history.visible.pop()?.pop() || "";
                }
                h[index].isMe = isMe;
            } else {
                let _content = content;
                if (history && history.visible.length > 0) {
                    _content = history.visible.pop()?.pop() || "";
                    console.log(">>>", _content);
                }
                console.log("Adding new message", _content);
                h.push({
                    _id: id,
                    content: _content,
                    isMe,
                });
            }
            return h;
        });
    };

    const prompt: IContext["prompt"] = useCallback(
        (input) => {
            if (!input) return console.warn("No prompt was provided");
            if (!socket.connected) console.warn("Socket is not connected");

            socket.emit("prompt", { message: input, chatId });
        },
        [chatId, socket],
    );

    const authorize: IContext["authorize"] = useCallback(
        (email) =>
            authApi
                .authorize(email)
                .then((response) => setToken(response.data.token)),
        [],
    );

    const verify: IContext["verify"] = useCallback(
        (code, email) =>
            authApi.verify(code, email).then((r) => setUser(r.data)),
        [],
    );
    const changeChat = useCallback((id: string) => setChatId(id), []);
    const startNewChat = useCallback(() => {
        chatApi.create().then((r) => setChatId(r.data._id));
    }, []);

    useEffect(() => {
        if (chatId)
            chatApi.getById(chatId).then((r) => {
                setChat(r.data);
                setMessages(parseHistoryToMessages(r.data.history));
            });
    }, [chatId]);

    useEffect(() => {
        chatApi.getLast().then((r) => setChatId(r.data._id));
        if (user?.type === UserTypeEnum.authed) {
            chatApi.getPrevious().then((r) => setChats(r.data));
        }
    }, [user]);

    useEffect(() => {
        if (token) {
            socket.connect();
            socket.on("prompt_added", (data: IPromptAddedDto) => {
                _addMessage(data._id, data.input, null, true);
                setIsGenerating(true);
            });
            socket.on("prompt_reply", (data: IPromptReplyDto) => {
                _addMessage(data.sid, data.message, data.history, false);
            });

            socket.on("prompt_reply_end", () => {
                setIsGenerating(false);
            });
        }
    }, [socket, token]);

    useEffect(() => {
        if (token) localStorage.setItem("token", token);
        authApi
            .me()
            .then((r) => setUser(r.data))
            .catch((e: AxiosError) =>
                console.error("Error while authorizing", e),
            );
    }, [token]);

    useEffect(() => {
        authApi.connect().then((r) => {
            setToken(r.data.token);
        });
    }, []);

    const state: IContext = useMemo(
        () => ({
            user,
            history,
            prompt,
            token,
            authorize,
            verify,
            messages,
            chats,
            chatId,
            chat,
            isGenerating,
            changeChat,
            startNewChat,
        }),
        [
            user,
            history,
            prompt,
            token,
            authorize,
            verify,
            messages,
            chats,
            chatId,
            chat,
            changeChat,
            startNewChat,
            isGenerating,
        ],
    );

    return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
