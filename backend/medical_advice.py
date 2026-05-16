import ast


# =====================================================
# GET MEDICAL ADVICE
# =====================================================


def get_medical_advice(disease_name, medicine_df):

    disease_name_query = str(disease_name).strip().lower()

    medicine_df.columns = medicine_df.columns.str.strip()

    match = medicine_df[
        medicine_df['Disease'].str.lower() == disease_name_query
    ]

    if not match.empty:

        row = match.iloc[0]

        def clean_list(val):

            try:
                return ast.literal_eval(val)

            except:
                return [str(val)]

        return {
            "Disease": row['Disease'],
            "Description": row['Description'],
            "Medication": clean_list(row['Medication']),
            "Diet": clean_list(row['Diet']),
            "Precautions": [
                row['Precaution_1'],
                row['Precaution_2'],
                row['Precaution_3'],
                row['Precaution_4']
            ],
            "Workouts": clean_list(row['Workouts'])
        }

    return {
        "Disease": disease_name,
        "Description": "No description available.",
        "Medication": [],
        "Diet": [],
        "Precautions": [],
        "Workouts": []
    }