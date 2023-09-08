import config
import together
from utils import mapHistoryToPrompt, updateHistory

model_name = 'togethercomputer/llama-2-70b-chat'


def main():

    history = {'internal': [], 'visible': []}

    newest_prompt = 'Hi?'
    prompt = mapHistoryToPrompt(history, newest_prompt)
    print(prompt, end='')
    tokens = together.Complete.create_streaming(
        prompt, model_name, max_tokens=32, stop="<human>:")
    res = ''
    for token in tokens:
        # print(token, end='', flush=True)
        res += token
        newHistory = updateHistory(history, newest_prompt, res)
        print(newHistory)


main()
