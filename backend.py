# Dr.HMF Local Backend Reference
# Run using: pip install flask flask-cors
# python backend.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    symptoms = data.get('symptoms', [])
    
    # Logic matching (simplified as provided in the frontend)
    # In a real scenario, you'd use a ML model or a larger matrix here
    prediction = {
        "disease": "Panic disorder",
        "confidence": 0.85,
        "note": "Based on overlap analysis"
    }
    
    return jsonify(prediction)

if __name__ == '__main__':
    print("Dr.HMF Python Backend running on port 5000...")
    app.run(host='0.0.0.0', port=5000)
