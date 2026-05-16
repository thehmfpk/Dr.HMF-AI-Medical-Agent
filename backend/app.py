from flask import Flask, request, jsonify
from predictor import predict_disease
from medical_advice import get_medical_advice
from model_loader import (
    ann_model,
    label_encoder,
    feature_columns,
    medicine_df
)

app = Flask(__name__)


@app.route('/')
def home():
    return jsonify({
        "message": "Dr.HMF AI Medical Backend Running"
    })


@app.route('/predict', methods=['POST'])
def predict():

    try:
        data = request.get_json()

        symptoms = data.get('symptoms', [])

        if not symptoms:
            return jsonify({
                "error": "No symptoms provided"
            }), 400

        disease, confidence = predict_disease(
            user_symptoms=symptoms,
            feature_columns=feature_columns,
            ann_model=ann_model,
            label_encoder=label_encoder
        )

        advice = get_medical_advice(
            disease,
            medicine_df
        )

        response = {
            "predicted_disease": disease,
            "confidence": round(confidence, 2),
            "medical_advice": advice
        }

        return jsonify(response)
    app.run(debug=True)