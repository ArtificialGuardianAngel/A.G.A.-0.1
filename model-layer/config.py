from dotenv import load_dotenv
import os
load_dotenv()

MODEL_NAME = os.getenv('MODEL_NAME')
API_KEY = os.getenv('TOGETHER_API_KEY')
RMQ_HOST = os.getenv('RMQ_HOST', 'localhost')
QUEUE_NAME = os.getenv('QUEUE_NAME', 'prompt')
END_OF_ANSWER = "</bot>"