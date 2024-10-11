import speech_recognition as sr
from flask_cors import CORS 
from flask import Flask, request, jsonify

app = Flask(__name__)
CORS(app)

r = sr.Recognizer()

@app.route('/recognize_speech', methods=['POST'])
def recognize_speech():
    try:
        with sr.Microphone() as source:
            print("Listening...")
            audio_text = r.listen(source)
 
            recognized_text = r.recognize_google(audio_text)
            return jsonify({"recognized_text": recognized_text})
    except sr.RequestError:
        return jsonify({"error": "API unavailable"}), 500
    except sr.UnknownValueError:
        return jsonify({"error": "Unable to recognize speech"}), 400

if __name__ == '__main__':
    app.run(debug=True)
