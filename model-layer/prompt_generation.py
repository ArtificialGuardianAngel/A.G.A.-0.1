import utils
from prompt import handle_prompt

def handle_new_token(new_history, response):
    # print(response)
    pass

def handle_end(history):
    print("{:=^50}END")
    print(history)

if __name__ == "__main__":
    old_history = {
        "internal": [
            ["Hello", " Hello! How can I assist you today?</bot>\n"],
            ["What weather in Tokyo today?", "  According to my information, the current weather in Tokyo is mostly sunny with a high of 78 degrees Fahrenheit and a low of 56 degrees Fahrenheit. However, please keep in mind that weather conditions can change rapidly and it's always a good idea to check the most up-to-date forecast before planning your day. Would you like me to provide you with more information or assist you with something else?</bot>\n</bot>\n"]
        ],
        "visible": [
            ["Hello", " Hello! How can I assist you today?</bot>\n"],
            ["What weather in Tokyo today?", "  According to my information, the current weather in Tokyo is mostly sunny with a high of 78 degrees Fahrenheit and a low of 56 degrees Fahrenheit. However, please keep in mind that weather conditions can change rapidly and it's always a good idea to check the most up-to-date forecast before planning your day. Would you like me to provide you with more information or assist you with something else?</bot>\n</bot>\n"]
        ]
    }
    user_input = "What restorany u know there?"

    prompt = utils.mapHistoryToPrompt(old_history, user_input)
    handle_prompt(old_history, user_input, handle_new_token, handle_end)