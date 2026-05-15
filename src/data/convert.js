// import fs from 'fs';

// const raw = fs.readFileSync('description.json', 'utf8');
// const data = JSON.parse(raw);

// const result = {};

// for (const item of data) {
//   result[item.Disease] = {
//     Disease: item.Disease,
//     Description: item.Description,

//     Diet:
//       typeof item.Diet === 'string'
//         ? JSON.parse(item.Diet.replace(/'/g, '"'))
//         : item.Diet || [],

//     Precaution_1: item.Precaution_1 || '',
//     Precaution_2: item.Precaution_2 || '',
//     Precaution_3: item.Precaution_3 || '',
//     Precaution_4: item.Precaution_4 || '',

//     Workouts:
//       typeof item.Workouts === 'string'
//         ? JSON.parse(item.Workouts)
//         : item.Workouts || [],

//     Medication:
//       typeof item.Medication === 'string'
//         ? JSON.parse(item.Medication.replace(/'/g, '"'))
//         : item.Medication || []
//   };
// }

// const output =
//   'export const medicalEncyclopedia: Record<string, DiseaseInfo> = ' +
//   JSON.stringify(result, null, 2);

// fs.writeFileSync('output.txt', output);

// console.log('Done! Check output.txt');


import fs from 'fs';
import csv from 'csv-parser';

const results = [];

fs.createReadStream('Diseases_and_Symptoms_dataset.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const symptomColumns = Object.keys(results[0]).filter(
      (col) => col !== 'diseases'
    );

    // symptomsList
    const symptomsList = symptomColumns;

    // diseaseSymptomMatrix
    const diseaseMap = {};

    for (const row of results) {
      const disease = row.diseases;

      if (!diseaseMap[disease]) {
        diseaseMap[disease] = new Set();
      }

      symptomColumns.forEach((symptom) => {
        if (row[symptom] === '1') {
          diseaseMap[disease].add(symptom);
        }
      });
    }

    const diseaseSymptomMatrix = Object.entries(diseaseMap).map(
      ([disease, symptoms]) => ({
        disease,
        symptoms: [...symptoms]
      })
    );

    // simple category
    const symptomCategories = {
      General: symptomsList
    };

    const output = `

export const symptomCategories = ${JSON.stringify(
      symptomCategories,
      null,
      2
    )};

export const symptomsList = ${JSON.stringify(
      symptomsList,
      null,
      2
    )};

export const diseaseSymptomMatrix = ${JSON.stringify(
      diseaseSymptomMatrix,
      null,
      2
    )};

`;

    fs.writeFileSync('symptoms-output.txt', output);

    console.log('Done! Check symptoms-output.txt');
  });