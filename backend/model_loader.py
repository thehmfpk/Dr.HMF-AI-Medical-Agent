import pandas as pd
import pickle
from tensorflow.keras.models import load_model


# =====================================================
# LOAD DATASET
# =====================================================

symptom_df = pd.read_csv('datasets/symptoms.csv')
medicine_df = pd.read_csv('datasets/medicines.csv')


# =====================================================
# FEATURE COLUMNS
# =====================================================

feature_columns = [
    str(col).strip().lower()
    for col in symptom_df.columns
    if col.lower() != 'diseases'
]


# =====================================================
# LOAD TRAINED MODEL
# =====================================================

ann_model = load_model('models/disease_model.h5')


# =====================================================
# LOAD LABEL ENCODER
# =====================================================

with open('models/label_encoder.pkl', 'rb') as f:
    label_encoder = pickle.load(f)


print("\nMODEL LOADED SUCCESSFULLY")
print("Total Features:", len(feature_columns))
print("Model Input Shape:", ann_model.input_shape)