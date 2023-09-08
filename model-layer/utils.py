import copy
from config import END_OF_ANSWER


def clearResponseFromEndTags(response: str):
    if response.count(END_OF_ANSWER) > 1:
        firstIndexOfEndTag = response.find(END_OF_ANSWER)
        responseLastIndex = firstIndexOfEndTag + len(END_OF_ANSWER)
        return response[0:responseLastIndex]
    return response


def mapHistoryToPrompt(history, prompt, response=""):
    mapped_history = ""
    for conv in history['visible']:
        formatted_response = clearResponseFromEndTags(conv[1])
        mapped_history += f'<human>:{conv[0]}</human>\n<bot>:{formatted_response.strip()}\n'

    return mapped_history + f"<human>:{prompt}</human>\n<bot>:{response.strip()}" # {'</bot>' in response if '' else '</bot>'}


def updateHistory(oldHistory, prompt, answer):
    newHistory = copy.deepcopy(oldHistory)
    newHistory['internal'].append([prompt, answer])
    newHistory['visible'].append([prompt, answer])
    return newHistory
