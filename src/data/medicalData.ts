/**
 * @license

 */

export interface DiseaseInfo {
  Disease: string;
  Description: string;
  Diet: string[];
  Precaution_1: string;
  Precaution_2: string;
  Precaution_3: string;
  Precaution_4: string;
  Workouts: string[];
  Medication: string[];
}

// export const medicalEncyclopedia: Record<string, DiseaseInfo> = {
//   "Panic disorder": {
//     "Disease": "Panic disorder",
//     "Description": "Panic disorder is a mental health condition marked by sudden, unexpected panic attacks—intense periods of fear or discomfort—often accompanied by physical symptoms like chest pain, rapid heartbeat, shortness of breath, or dizziness.",
//     "Diet": ['Magnesium-rich foods (spinach, pumpkin seeds, almonds)', 'Omega-3 fatty acids (salmon, flaxseeds, walnuts)', 'Complex carbs (oats, quinoa)', 'Green tea (L-theanine)', 'Limit caffeine and sugar'],
//     "Precaution_1": "Practice deep breathing",
//     "Precaution_2": "Avoid caffeine",
//     "Precaution_3": "Follow therapy plan",
//     "Precaution_4": "Seek support from loved ones",
//     "Workouts": ["Deep breathing exercises: Calm your mind by focusing on slow, deep breaths", "Yoga: Combines breathing and movement for relaxation", "Mindfulness meditation: Helps reduce anxiety by staying present", "Regular aerobic exercise: Boosts mood and reduces stress"],
//     "Medication": ['SSRIs (e.g., Sertraline, Fluoxetine)', 'Benzodiazepines (e.g., Clonazepam, Alprazolam)', 'SNRIs (e.g., Venlafaxine)', 'Beta-blockers', 'Cognitive Behavioral Therapy (CBT)']
//   },
//   "Common Cold": {
//     "Disease": "Common Cold",
//     "Description": "A viral infection of your nose and throat. Symptoms include cough, sore throat, and runny nose.",
//     "Diet": ["Warm fluids", "Honey and ginger", "Vitamin C"],
//     "Precaution_1": "Rest",
//     "Precaution_2": "Hydration",
//     "Precaution_3": "Avoid cold breeze",
//     "Precaution_4": "Gargle salt water",
//     "Workouts": ["Rest", "Light stretching"],
//     "Medication": ["Decongestants", "Pain relievers", "Cough syrup"]
//   },
//   "Gastroenteritis": {
//     "Disease": "Gastroenteritis",
//     "Description": "Inflammation of the stomach and intestines, typically resulting from bacterial toxins or viral infection and causing vomiting and diarrhea.",
//     "Diet": ["BRAT diet", "Electrolytes"],
//     "Precaution_1": "Hand hygiene",
//     "Precaution_2": "Stay hydrated",
//     "Precaution_3": "Avoid dairy",
//     "Precaution_4": "Boil water",
//     "Workouts": ["Rest"],
//     "Medication": ["Probiotics", "ORS", "Anti-emetics"]
//   }
// };

export const medicalEncyclopedia: Record<string, DiseaseInfo> = {
  "Panic disorder": {
    "Disease": "Panic disorder",
    "Description": "Panic disorder is a mental health condition marked by sudden, unexpected panic attacks—intense periods of fear or discomfort—often accompanied by physical symptoms like chest pain, rapid heartbeat, shortness of breath, or dizziness.",
    "Diet": [
      "Magnesium-rich foods (spinach, pumpkin seeds, almonds)",
      "Omega-3 fatty acids (salmon, flaxseeds, walnuts)",
      "Complex carbs (oats, quinoa)",
      "Green tea (L-theanine)",
      "Limit caffeine and sugar"
    ],
    "Precaution_1": "Practice deep breathing",
    "Precaution_2": "Avoid caffeine",
    "Precaution_3": "Follow therapy plan",
    "Precaution_4": "Seek support from loved ones",
    "Workouts": [
      "Deep breathing exercises: Calm your mind by focusing on slow, deep breaths",
      "Yoga: Combines breathing and movement for relaxation",
      "Mindfulness meditation: Helps reduce anxiety by staying present",
      "Regular aerobic exercise: Boosts mood and reduces stress"
    ],
    "Medication": [
      "SSRIs (e.g., Sertraline, Fluoxetine)",
      "Benzodiazepines (e.g., Clonazepam, Alprazolam)",
      "SNRIs (e.g., Venlafaxine)",
      "Beta-blockers",
      "Cognitive Behavioral Therapy (CBT)"
    ]
  },
  "Vaginitis": {
    "Disease": "Vaginitis",
    "Description": "Vaginitis is inflammation of the vaginal tissue, typically caused by infections (bacterial, fungal, or parasitic), hormonal imbalances, or irritants, resulting in discharge, itching, pain, or burning during urination.",
    "Diet": [
      "Probiotics (yogurt, kefir, sauerkraut)",
      "Low-sugar diet (avoid sweets, processed sugar)",
      "Garlic (raw or cooked)",
      "Cranberry juice (unsweetened)",
      "Hydration (water, herbal teas)"
    ],
    "Precaution_1": "Wear breathable cotton underwear",
    "Precaution_2": "Avoid douching",
    "Precaution_3": "Maintain genital hygiene",
    "Precaution_4": "Avoid scented hygiene products",
    "Workouts": [
      "Pelvic floor exercises: Strengthen pelvic muscles to reduce discomfort",
      "Avoid tight clothing: Prevent irritation",
      "Use cotton underwear: Helps keep area dry and breathable",
      "Maintain hygiene: Prevent infections"
    ],
    "Medication": [
      "Metronidazole",
      "Clindamycin",
      "Fluconazole",
      "Hydrocortisone cream",
      "Probiotic supplements"
    ]
  },
  "Problem during pregnancy": {
    "Disease": "Problem during pregnancy",
    "Description": "Problems during pregnancy refer to medical complications such as gestational diabetes, preeclampsia, or fetal growth restriction that can affect the health of the mother or baby during gestation.",
    "Diet": [
      "Prenatal vitamins (consult doctor)",
      "Iron-rich foods (red meat, lentils, spinach)",
      "Folate-rich foods (leafy greens, fortified cereals)",
      "Calcium and Vitamin D (milk, cheese, fortified plant milk)",
      "Avoid raw fish, deli meats, unpasteurized dairy"
    ],
    "Precaution_1": "Attend regular prenatal visits",
    "Precaution_2": "Avoid alcohol and smoking",
    "Precaution_3": "Eat a balanced diet",
    "Precaution_4": "Get adequate rest",
    "Workouts": [
      "Prenatal yoga: Gentle stretches safe for pregnancy",
      "Walking: Keeps you active and healthy",
      "Pelvic tilts: Strengthen core muscles",
      "Kegel exercises: Support pelvic health"
    ],
    "Medication": [
      "Prenatal vitamins",
      "Iron supplements",
      "Antihypertensives (e.g., Labetalol)",
      "Insulin (for gestational diabetes)",
      "Folic acid"
    ]
  },
  "Acute pancreatitis": {
    "Disease": "Acute pancreatitis",
    "Description": "Acute pancreatitis is a sudden inflammation of the pancreas that causes severe abdominal pain, nausea, vomiting, and elevated pancreatic enzymes, often due to gallstones or alcohol use.",
    "Diet": [
      "Low-fat foods (boiled vegetables, lean chicken breast)",
      "Small frequent meals",
      "Broths and clear liquids (chicken broth, vegetable broth)",
      "Avoid alcohol and caffeine",
      "Lean proteins (tofu, white fish)"
    ],
    "Precaution_1": "Avoid alcohol",
    "Precaution_2": "Eat a low-fat diet",
    "Precaution_3": "Stay hydrated",
    "Precaution_4": "Follow doctor's advice strictly",
    "Workouts": [
      "Avoid heavy lifting: Prevent strain on pancreas",
      "Gentle stretching: Maintain flexibility",
      "Rest: Allow healing",
      "Breathing exercises: Reduce stress and pain"
    ],
    "Medication": [
      "IV fluids",
      "Pain relievers (e.g., Morphine)",
      "Antibiotics (if infection)",
      "Enzyme replacement therapy",
      "Fasting/NPO"
    ]
  },
  "Asthma": {
    "Disease": "Asthma",
    "Description": "Asthma is a chronic inflammatory disease of the airways causing recurrent wheezing, breathlessness, chest tightness, and coughing, often triggered by allergens, exercise, or cold air.",
    "Diet": [
      "Anti-inflammatory foods (blueberries, kale, turmeric)",
      "Magnesium-rich foods (pumpkin seeds, spinach)",
      "Omega-3s (wild salmon, chia seeds)",
      "Avoid dairy if sensitive",
      "Vitamin D-rich foods (egg yolks, fortified milk)"
    ],
    "Precaution_1": "Avoid known triggers",
    "Precaution_2": "Use inhaler as prescribed",
    "Precaution_3": "Monitor peak flow",
    "Precaution_4": "Keep emergency inhaler handy",
    "Workouts": [
      "Breathing exercises: Improve lung function",
      "Yoga: Combines breathing and movement",
      "Swimming: Low-impact cardio good for lungs",
      "Avoid strenuous workouts during flare-ups: Prevent attacks"
    ],
    "Medication": [
      "Inhaled corticosteroids (e.g., Fluticasone)",
      "Beta-agonists (e.g., Albuterol)",
      "Leukotriene modifiers (e.g., Montelukast)",
      "Anticholinergics (e.g., Ipratropium)",
      "Omalizumab"
    ]
  },
  "Infectious gastroenteritis": {
    "Disease": "Infectious gastroenteritis",
    "Description": "Infectious gastroenteritis is an intestinal infection caused by viruses, bacteria, or parasites, leading to symptoms like diarrhea, vomiting, abdominal cramps, and fever.",
    "Diet": [
      "Oral rehydration solution (ORS)",
      "BRAT diet (bananas, rice, applesauce, toast)",
      "Clear soups (chicken soup)",
      "Avoid dairy and greasy foods",
      "Probiotics (yogurt, kefir)"
    ],
    "Precaution_1": "Wash hands frequently",
    "Precaution_2": "Avoid sharing utensils",
    "Precaution_3": "Drink clean water",
    "Precaution_4": "Avoid street food",
    "Workouts": [
      "Rest: Allow the body to recover",
      "Gentle walking: Only after symptoms improve",
      "Hydration focus: Replenish fluids before any activity",
      "Avoid strenuous exercise: Prevent worsening dehydration"
    ],
    "Medication": [
      "Oral rehydration salts (ORS)",
      "Antibiotics (e.g., Ciprofloxacin, if bacterial)",
      "Antiemetics (e.g., Ondansetron)",
      "Probiotics",
      "Loperamide (if appropriate)"
    ]
  },
  "Acute sinusitis": {
    "Disease": "Acute sinusitis",
    "Description": "Acute sinusitis is a temporary inflammation or infection of the sinuses, usually following a cold, causing nasal congestion, facial pain, pressure, and headache.",
    "Diet": [
      "Spicy foods (hot peppers, horseradish)",
      "Hydration (water, herbal teas)",
      "Vitamin C-rich foods (oranges, strawberries)",
      "Warm teas (ginger, chamomile)",
      "Avoid processed sugars"
    ],
    "Precaution_1": "Use nasal saline spray",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Avoid allergens",
    "Precaution_4": "Use warm compresses",
    "Workouts": [
      "Nasal breathing exercises: Help open airways",
      "Gentle yoga: Promotes drainage",
      "Walking: Low intensity, improves circulation",
      "Avoid cold-weather workouts: Prevent sinus aggravation"
    ],
    "Medication": [
      "Saline nasal spray",
      "Decongestants (e.g., Pseudoephedrine)",
      "Nasal corticosteroids",
      "Antibiotics (if bacterial)",
      "Acetaminophen for pain"
    ]
  },
  "Cornea infection": {
    "Disease": "Cornea infection",
    "Description": "Cornea infection (keratitis) is an infection of the transparent front part of the eye, usually caused by bacteria, fungi, or viruses, leading to eye pain, redness, blurred vision, and light sensitivity.",
    "Diet": [
      "Vitamin A-rich foods (carrots, sweet potatoes, spinach)",
      "Zinc-rich foods (pumpkin seeds, beef)",
      "Hydration (water)",
      "Avoid alcohol and smoking",
      "Omega-3-rich foods (flaxseed, salmon)"
    ],
    "Precaution_1": "Avoid touching eyes",
    "Precaution_2": "Use prescribed eye drops",
    "Precaution_3": "Wear sunglasses",
    "Precaution_4": "Don’t share towels or cosmetics",
    "Workouts": [
      "Rest the eyes: Avoid screen-heavy workouts",
      "Gentle walking: Safe and non-straining",
      "Indoor stretching: Limits light exposure",
      "Avoid swimming: Prevent waterborne pathogens"
    ],
    "Medication": [
      "Antibiotic eye drops (e.g., Ciprofloxacin)",
      "Antiviral eye drops (e.g., Ganciclovir)",
      "Antifungal drops (e.g., Natamycin)",
      "Lubricant eye drops",
      "Steroids (in selected cases)"
    ]
  },
  "Marijuana abuse": {
    "Disease": "Marijuana abuse",
    "Description": "Marijuana abuse refers to the excessive or harmful use of cannabis, which can lead to cognitive impairment, altered judgment, addiction, and long-term mental health issues.",
    "Diet": [
      "Hydration (water, herbal teas)",
      "Omega-3s for brain health (walnuts, flaxseeds)",
      "Foods rich in B vitamins (eggs, poultry, leafy greens)",
      "Antioxidant-rich foods (berries, nuts)",
      "Limit processed foods"
    ],
    "Precaution_1": "Avoid peer pressure",
    "Precaution_2": "Seek counseling",
    "Precaution_3": "Build healthy habits",
    "Precaution_4": "Avoid triggering environments",
    "Workouts": [
      "Cardio workouts: Boost dopamine and mood",
      "Yoga: Improve focus and reduce cravings",
      "Strength training: Rebuild physical health",
      "Group activities: Enhance social motivation and discipline"
    ],
    "Medication": [
      "Behavioral therapy",
      "CBT",
      "Motivational enhancement therapy",
      "No FDA-approved medications",
      "Support groups (e.g., NA)"
    ]
  },
  "Bursitis": {
    "Disease": "Bursitis",
    "Description": "Bursitis is inflammation of the bursae—small fluid-filled sacs that cushion bones and joints—causing joint pain, swelling, and limited movement, often from repetitive motion or pressure.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, ginger, berries)",
      "Omega-3 fatty acids (salmon, chia seeds)",
      "Vitamin C (bell peppers, citrus fruits)",
      "Hydration",
      "Avoid processed and fried foods"
    ],
    "Precaution_1": "Rest the affected joint",
    "Precaution_2": "Apply ice packs",
    "Precaution_3": "Use joint support",
    "Precaution_4": "Avoid repetitive strain",
    "Workouts": [
      "Gentle range-of-motion exercises: Prevent joint stiffness",
      "Low-impact cardio: Like swimming or cycling",
      "Stretching: Keep affected areas flexible",
      "Avoid pressure on joints: Use proper form and padding"
    ],
    "Medication": [
      "NSAIDs (e.g., Ibuprofen)",
      "Corticosteroid injections",
      "Ice packs",
      "Physical therapy",
      "Antibiotics (if septic bursitis)"
    ]
  },
  "Actinic keratosis": {
    "Disease": "Actinic keratosis",
    "Description": "Actinic keratosis is a rough, scaly patch on the skin caused by prolonged sun exposure, and is considered a precancerous condition that can develop into squamous cell carcinoma.",
    "Diet": [
      "Antioxidant-rich foods (berries, spinach, nuts)",
      "Vitamin E-rich foods (almonds, sunflower seeds)",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Green tea",
      "Avoid excessive sun exposure"
    ],
    "Precaution_1": "Avoid sun exposure",
    "Precaution_2": "Use broad-spectrum sunscreen",
    "Precaution_3": "Wear protective clothing",
    "Precaution_4": "See dermatologist regularly",
    "Workouts": [
      "Indoor workouts: Avoid sun exposure",
      "Gentle stretching: Maintain skin comfort",
      "Low-sweat activities: Prevent skin irritation",
      "Walking in shaded areas: If outdoor movement needed"
    ],
    "Medication": [
      "Topical 5-fluorouracil",
      "Imiquimod cream",
      "Diclofenac gel",
      "Cryotherapy",
      "Photodynamic therapy"
    ]
  },
  "Chronic obstructive pulmonary disease (COPD)": {
    "Disease": "Chronic obstructive pulmonary disease (COPD)",
    "Description": "COPD is a group of progressive lung diseases, including emphysema and chronic bronchitis, characterized by airflow limitation, coughing, wheezing, and shortness of breath.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, ginger, berries)",
      "Omega-3 fatty acids (wild salmon, walnuts)",
      "High-protein foods (chicken, beans)",
      "Vitamin C-rich foods (oranges, broccoli)",
      "Hydration"
    ],
    "Precaution_1": "Avoid smoking",
    "Precaution_2": "Use inhalers as prescribed",
    "Precaution_3": "Stay away from air pollution",
    "Precaution_4": "Get vaccinated against flu",
    "Workouts": [
      "Pursed-lip breathing: Improve oxygen use",
      "Walking: Build endurance safely",
      "Stationary biking: Low strain on lungs",
      "Pulmonary rehabilitation exercises: Doctor-guided regimens"
    ],
    "Medication": [
      "Bronchodilators (e.g., Salbutamol)",
      "Inhaled corticosteroids",
      "Phosphodiesterase-4 inhibitors (e.g., Roflumilast)",
      "Oxygen therapy",
      "Antibiotics during exacerbations"
    ]
  },
  "Spondylosis": {
    "Disease": "Spondylosis",
    "Description": "Spondylosis is a degenerative condition affecting the spine due to aging, resulting in stiffness, pain, and reduced mobility due to wear and tear on spinal discs and joints.",
    "Diet": [
      "Calcium-rich foods (milk, cheese, fortified plant milk)",
      "Vitamin D-rich foods (egg yolk, fortified cereals)",
      "Anti-inflammatory foods (turmeric, leafy greens)",
      "Magnesium sources (nuts, seeds)",
      "Omega-3 fatty acids (flaxseeds, fish)"
    ],
    "Precaution_1": "Maintain good posture",
    "Precaution_2": "Exercise regularly",
    "Precaution_3": "Use ergonomic chairs",
    "Precaution_4": "Avoid lifting heavy weights",
    "Workouts": [
      "Neck and back stretches: Improve mobility",
      "Posture correction exercises: Reduce strain",
      "Tai chi or yoga: Low-impact balance and movement",
      "Avoid high-impact sports: Prevent joint stress"
    ],
    "Medication": [
      "NSAIDs (e.g., Naproxen)",
      "Muscle relaxants",
      "Physical therapy",
      "Epidural steroid injections",
      "Surgery in severe cases"
    ]
  },
  "Injury to the arm": {
    "Disease": "Injury to the arm",
    "Description": "Injury to the arm refers to damage to muscles, bones, ligaments, or skin in the arm area from trauma, leading to pain, swelling, bruising, or limited movement.",
    "Diet": [
      "Protein-rich foods (chicken, eggs, legumes)",
      "Vitamin C-rich foods (citrus fruits, strawberries)",
      "Zinc sources (beef, pumpkin seeds)",
      "Hydration",
      "Anti-inflammatory foods (turmeric, ginger)"
    ],
    "Precaution_1": "Immobilize the arm",
    "Precaution_2": "Apply cold compress",
    "Precaution_3": "Elevate the arm",
    "Precaution_4": "Seek medical care if swelling",
    "Workouts": [
      "Physical therapy: Guided recovery exercises",
      "Range-of-motion drills: Regain flexibility",
      "Isometric strengthening: Build muscles without movement",
      "Avoid overuse: Prioritize rest and pacing"
    ],
    "Medication": [
      "Pain relievers (e.g., Acetaminophen)",
      "Cold compress",
      "Immobilization/splinting",
      "Antibiotics (if open wound)",
      "Physical therapy"
    ]
  },
  "Complex regional pain syndrome": {
    "Disease": "Complex regional pain syndrome",
    "Description": "Complex regional pain syndrome (CRPS) is a chronic pain condition usually affecting a limb after injury, with symptoms including burning pain, swelling, and sensitivity to touch.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, berries, leafy greens)",
      "Omega-3 fatty acids (salmon, walnuts)",
      "Magnesium-rich foods (spinach, almonds)",
      "Vitamin D-rich foods (fortified milk, egg yolks)",
      "Avoid processed sugars and alcohol"
    ],
    "Precaution_1": "Follow physical therapy",
    "Precaution_2": "Manage stress",
    "Precaution_3": "Take prescribed medication",
    "Precaution_4": "Avoid injury to the affected limb",
    "Workouts": [
      "Gentle stretching: Prevent contractures",
      "Desensitization exercises: Rebuild nerve tolerance",
      "Mirror therapy: Improve brain-muscle coordination",
      "Aqua therapy: Low-pain water exercises"
    ],
    "Medication": [
      "Gabapentin",
      "Amitriptyline",
      "Physical therapy",
      "Corticosteroids",
      "Nerve blocks"
    ]
  },
  "Injury to the trunk": {
    "Disease": "Injury to the trunk",
    "Description": "Injury to the trunk includes trauma to the chest, abdomen, or back areas, possibly involving internal organs, muscles, or bones, and can range from minor bruises to serious internal damage.",
    "Diet": [
      "High-protein foods (tofu, lean meats)",
      "Vitamin C-rich foods (bell peppers, kiwi)",
      "Zinc sources (shellfish, nuts)",
      "Hydration",
      "Anti-inflammatory spices (ginger, turmeric)"
    ],
    "Precaution_1": "Apply ice or heat",
    "Precaution_2": "Rest adequately",
    "Precaution_3": "Use support belts if advised",
    "Precaution_4": "Avoid strenuous activity",
    "Workouts": [
      "Core stability workouts: Strengthen abdomen/back",
      "Breathing exercises: Ease pain and tension",
      "Walking: Gentle activity for circulation",
      "Avoid twisting movements: Reduce risk of re-injury"
    ],
    "Medication": [
      "Pain relievers (e.g., Ibuprofen)",
      "Ice/heat therapy",
      "Muscle relaxants",
      "Wound care (if external)",
      "Physiotherapy"
    ]
  },
  "Vulvodynia": {
    "Disease": "Vulvodynia",
    "Description": "Vulvodynia is chronic pain or discomfort around the opening of the vagina (vulva) with no identifiable cause, often described as burning, stinging, or irritation.",
    "Diet": [
      "Anti-inflammatory foods (blueberries, leafy greens)",
      "Probiotics (yogurt, kimchi)",
      "Omega-3 fatty acids (flaxseeds, salmon)",
      "Vitamin E-rich foods (nuts, seeds)",
      "Avoid irritants and processed foods"
    ],
    "Precaution_1": "Wear loose cotton clothing",
    "Precaution_2": "Avoid scented products",
    "Precaution_3": "Use prescribed creams",
    "Precaution_4": "Manage stress levels",
    "Workouts": [
      "Pelvic floor relaxation: Avoid tightness",
      "Gentle yoga: Reduce pelvic pain",
      "Breathing techniques: Help with stress-linked flares",
      "Avoid bike riding: Prevent pressure on sensitive area"
    ],
    "Medication": [
      "Topical Lidocaine",
      "Tricyclic antidepressants (e.g., Amitriptyline)",
      "Gabapentin",
      "Physical therapy",
      "Cognitive behavioral therapy"
    ]
  },
  "Concussion": {
    "Disease": "Concussion",
    "Description": "A concussion is a mild traumatic brain injury caused by a blow to the head or body, resulting in temporary loss of brain function, such as confusion, memory loss, or dizziness.",
    "Diet": [
      "Omega-3 fatty acids (chia seeds, salmon)",
      "Antioxidant-rich foods (blueberries, dark chocolate)",
      "Protein-rich foods (eggs, chicken)",
      "Hydration",
      "B vitamins (whole grains, leafy greens)"
    ],
    "Precaution_1": "Rest and avoid screens",
    "Precaution_2": "Avoid physical activity",
    "Precaution_3": "Monitor symptoms",
    "Precaution_4": "Follow up with neurologist",
    "Workouts": [
      "Rest: Most important early step",
      "Gentle stretching: After symptoms improve",
      "Walking: Light activity to reintroduce movement",
      "Avoid screens and bright lights: Limit visual strain"
    ],
    "Medication": [
      "Rest",
      "Acetaminophen (avoid NSAIDs early)",
      "Cognitive rest",
      "Hydration",
      "Gradual return to activities"
    ]
  },
  "Hypoglycemia": {
    "Disease": "Hypoglycemia",
    "Description": "Hypoglycemia is a condition characterized by abnormally low blood sugar levels, often causing shakiness, sweating, confusion, irritability, or fainting, common in diabetics on insulin.",
    "Diet": [
      "Complex carbohydrates (whole grains, legumes)",
      "Protein with every meal (eggs, nuts)",
      "Avoid sugary snacks",
      "Frequent small meals",
      "Fiber-rich foods (vegetables, fruits)"
    ],
    "Precaution_1": "Eat small frequent meals",
    "Precaution_2": "Carry glucose tablets",
    "Precaution_3": "Avoid skipping meals",
    "Precaution_4": "Monitor blood sugar levels",
    "Workouts": [
      "Walking: Helps stabilize blood sugar",
      "Strength training: Builds muscle mass to support glucose use",
      "Avoid fasted workouts: Always eat before",
      "Frequent breaks: Monitor sugar levels during activity"
    ],
    "Medication": [
      "Glucose tablets",
      "Juice or sugary snacks",
      "Glucagon injection (emergency)",
      "Adjust insulin or diabetes medication",
      "Frequent meals"
    ]
  },
  "Hiatal hernia": {
    "Disease": "Hiatal hernia",
    "Description": "A hiatal hernia occurs when the upper part of the stomach pushes through the diaphragm into the chest cavity, often causing symptoms like heartburn, reflux, and chest pain.",
    "Diet": [
      "Small, frequent meals",
      "Avoid spicy foods and caffeine",
      "High-fiber foods (oats, vegetables)",
      "Lean proteins (chicken, fish)",
      "Avoid fatty and fried foods"
    ],
    "Precaution_1": "Eat small frequent meals",
    "Precaution_2": "Avoid lying down after eating",
    "Precaution_3": "Avoid spicy food",
    "Precaution_4": "Maintain healthy weight",
    "Workouts": [
      "Avoid crunches: Prevent abdominal pressure",
      "Gentle walking or cycling: Support digestion",
      "Breathing exercises: Improve diaphragm control",
      "Upright posture: During and after exercise"
    ],
    "Medication": [
      "Antacids",
      "Proton Pump Inhibitors (e.g., Omeprazole)",
      "H2 Blockers (e.g., Ranitidine)",
      "Prokinetic agents",
      "Surgery (in severe cases)"
    ]
  },
  "Allergy": {
    "Disease": "Allergy",
    "Description": "An allergy is an overreaction of the immune system to substances like pollen, food, or medications, causing symptoms like sneezing, itching, rash, or anaphylaxis.",
    "Diet": [
      "Elimination diet (avoid allergen foods)",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Vitamin C-rich foods (oranges, bell peppers)",
      "Quercetin-rich foods (apples, onions)",
      "Probiotics (yogurt, kefir)"
    ],
    "Precaution_1": "Apply calamine",
    "Precaution_2": "Cover area with bandage",
    "Precaution_3": "Use ice to compress itching",
    "Precaution_4": "Avoid known allergens",
    "Workouts": [
      "Indoor workouts: Avoid pollen and triggers",
      "Yoga: Calms body and immune system",
      "Swimming in clean pools: Clears airways",
      "Avoid exercising in high pollution: Protect respiratory health"
    ],
    "Medication": [
      "Antihistamines (e.g., Loratadine)",
      "Decongestants (e.g., Pseudoephedrine)",
      "Epinephrine auto-injectors",
      "Corticosteroids",
      "Immunotherapy (allergy shots)"
    ]
  },
  "Acute bronchospasm": {
    "Disease": "Acute bronchospasm",
    "Description": "Acute bronchospasm is a sudden constriction of the muscles in the walls of the bronchioles, often triggered by asthma or allergens, causing wheezing and difficulty breathing.",
    "Diet": [
      "Anti-inflammatory foods (ginger, turmeric)",
      "Omega-3 fatty acids (wild salmon, chia seeds)",
      "Vitamin C-rich foods (citrus fruits)",
      "Hydration",
      "Avoid dairy if mucus increases"
    ],
    "Precaution_1": "Avoid cold air",
    "Precaution_2": "Use bronchodilator inhaler",
    "Precaution_3": "Avoid allergens",
    "Precaution_4": "Monitor breathing patterns",
    "Workouts": [
      "Rest until stable: Avoid exertion during flare-ups",
      "Breathing exercises: Strengthen respiratory muscles",
      "Gentle stretching: Promote oxygen flow",
      "Indoor walking: In controlled environments"
    ],
    "Medication": [
      "Short-acting beta-agonists (e.g., Albuterol)",
      "Anticholinergics",
      "Systemic corticosteroids",
      "Oxygen therapy",
      "Magnesium sulfate (in severe cases)"
    ]
  },
  "Degenerative disc disease": {
    "Disease": "Degenerative disc disease",
    "Description": "Degenerative disc disease is a condition where spinal discs break down over time, leading to back pain, reduced flexibility, and sometimes nerve compression.",
    "Diet": [
      "Calcium-rich foods (milk, cheese)",
      "Vitamin D-rich foods (fatty fish, egg yolk)",
      "Anti-inflammatory foods (berries, leafy greens)",
      "Magnesium sources (pumpkin seeds, almonds)",
      "Protein-rich foods (chicken, legumes)"
    ],
    "Precaution_1": "Maintain healthy weight",
    "Precaution_2": "Avoid lifting heavy items",
    "Precaution_3": "Engage in back exercises",
    "Precaution_4": "Use lumbar support",
    "Workouts": [
      "Back stretches: Increase flexibility",
      "Core strengthening: Reduce spinal pressure",
      "Low-impact aerobics: Walking or elliptical",
      "Avoid heavy lifting: Prevent worsening symptoms"
    ],
    "Medication": [
      "NSAIDs",
      "Physical therapy",
      "Muscle relaxants",
      "Steroid injections",
      "Surgery (e.g., spinal fusion in advanced cases)"
    ]
  },
  "Pain after an operation": {
    "Disease": "Pain after an operation",
    "Description": "Pain after an operation (postoperative pain) is discomfort or soreness at the surgical site, which may be due to tissue injury, inflammation, or healing processes.",
    "Diet": [
      "High-protein foods (eggs, fish)",
      "Vitamin C-rich foods (kiwi, strawberries)",
      "Zinc-rich foods (beef, nuts)",
      "Anti-inflammatory foods (turmeric, ginger)",
      "Hydration"
    ],
    "Precaution_1": "Take pain meds as prescribed",
    "Precaution_2": "Avoid physical strain",
    "Precaution_3": "Keep surgical area clean",
    "Precaution_4": "Attend follow-up appointments",
    "Workouts": [
      "Guided physiotherapy: Safe recovery progression",
      "Deep breathing: Prevent lung complications post-surgery",
      "Slow walking: Improves circulation",
      "Avoid high-intensity activity: Allow full healing"
    ],
    "Medication": [
      "Acetaminophen",
      "Opioids (e.g., Morphine, Tramadol)",
      "NSAIDs",
      "Local anesthetics",
      "Nerve blocks"
    ]
  },
  "Injury to the leg": {
    "Disease": "Injury to the leg",
    "Description": "Injury to the leg includes trauma to any part of the leg such as the thigh, knee, shin, or ankle, potentially involving muscles, bones, or ligaments.",
    "Diet": [
      "Protein-rich foods (lean meats, beans)",
      "Vitamin C-rich foods (oranges, strawberries)",
      "Zinc-rich foods (shellfish, pumpkin seeds)",
      "Anti-inflammatory spices (ginger, turmeric)",
      "Hydration"
    ],
    "Precaution_1": "Elevate the leg",
    "Precaution_2": "Apply ice packs",
    "Precaution_3": "Avoid putting weight",
    "Precaution_4": "Use crutches if advised",
    "Workouts": [
      "Non-weight-bearing exercises: Like swimming or seated stretches",
      "Range-of-motion: Prevent stiffness",
      "Strength training: After healing starts",
      "Balance exercises: Reduce fall risk later"
    ],
    "Medication": [
      "Pain relievers",
      "Compression bandages",
      "Crutches or brace",
      "Physical therapy",
      "Antibiotics (if open wound)"
    ]
  },
  "Gout": {
    "Disease": "Gout",
    "Description": "Gout is a form of inflammatory arthritis caused by buildup of uric acid crystals in joints, leading to sudden, severe pain, redness, and swelling, often in the big toe.",
    "Diet": [
      "Low-purine foods (vegetables, whole grains)",
      "Cherries and berries",
      "Hydration",
      "Limit red meat and seafood",
      "Avoid alcohol and sugary drinks"
    ],
    "Precaution_1": "Avoid purine-rich food",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Limit alcohol intake",
    "Precaution_4": "Take medication as prescribed",
    "Workouts": [
      "Low-impact exercises: Like cycling or swimming",
      "Joint mobility drills: Keep joints flexible",
      "Avoid intense weight-bearing: During flare-ups",
      "Stretching: Reduce stiffness in affected areas"
    ],
    "Medication": [
      "Colchicine",
      "NSAIDs (e.g., Indomethacin)",
      "Allopurinol",
      "Febuxostat",
      "Corticosteroids"
    ]
  },
  "Otitis media": {
    "Disease": "Otitis media",
    "Description": "Otitis media is a middle ear infection that commonly affects children, causing ear pain, fever, irritability, and sometimes fluid discharge from the ear.",
    "Diet": [
      "Hydrating fluids (water, herbal teas)",
      "Vitamin C-rich foods (citrus fruits)",
      "Probiotics (yogurt, kefir)",
      "Avoid dairy if it increases mucus",
      "Anti-inflammatory foods (ginger, turmeric)"
    ],
    "Precaution_1": "Avoid water entering ears",
    "Precaution_2": "Take antibiotics as prescribed",
    "Precaution_3": "Use warm compress",
    "Precaution_4": "Follow up with ENT specialist",
    "Workouts": [
      "Rest: Especially during acute phase",
      "Avoid swimming: Prevent water exposure to ears",
      "Light walking: If energy permits",
      "Neck stretches: Relieve ear canal pressure"
    ],
    "Medication": [
      "Amoxicillin",
      "Cefdinir",
      "Acetaminophen for pain",
      "Decongestants",
      "Tympanostomy (if recurrent)"
    ]
  },
  "Acute kidney injury": {
    "Disease": "Acute kidney injury",
    "Description": "Acute kidney injury (AKI) is a sudden loss of kidney function due to illness, injury, or toxins, leading to buildup of waste products in the blood.",
    "Diet": [
      "Low-protein diet (consult doctor)",
      "Limit sodium (avoid processed foods)",
      "Potassium regulation (bananas, potatoes – based on medical advice)",
      "Hydration monitoring",
      "Avoid high-phosphorus foods (dairy, nuts)"
    ],
    "Precaution_1": "Avoid NSAIDs",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Monitor fluid intake",
    "Precaution_4": "Follow renal diet plan",
    "Workouts": [
      "Gentle activity: Like walking during recovery",
      "Avoid dehydration: Prioritize fluids with workouts",
      "Strength training: Only when kidney function stabilizes",
      "Workouts under supervision: Monitor vital signs"
    ],
    "Medication": [
      "IV fluids",
      "Diuretics (e.g., Furosemide)",
      "Electrolyte management",
      "Discontinue nephrotoxic drugs",
      "Dialysis (if severe)"
    ]
  },
  "Threatened pregnancy": {
    "Disease": "Threatened pregnancy",
    "Description": "A threatened pregnancy refers to early pregnancy complications, such as vaginal bleeding or cramping, that may suggest a risk of miscarriage but with a still viable fetus.",
    "Diet": [
      "Folic acid-rich foods (leafy greens, beans)",
      "Iron-rich foods (red meat, lentils)",
      "Hydration",
      "Balanced diet with protein (chicken, fish)",
      "Avoid alcohol, caffeine, and high-mercury fish"
    ],
    "Precaution_1": "Take prescribed medications",
    "Precaution_2": "Avoid stress and lifting heavy items",
    "Precaution_3": "Get regular checkups",
    "Precaution_4": "Rest as recommended",
    "Workouts": [
      "Modified bed rest: Based on doctor's advice",
      "Breathing exercises: Reduce anxiety",
      "Pelvic floor (Kegel) exercises: Safe for pelvic support",
      "Avoid high-impact workouts: Prevent complications"
    ],
    "Medication": [
      "Progesterone supplements",
      "Folic acid",
      "Bed rest (limited use)",
      "IV fluids (if dehydrated)",
      "Close monitoring with ultrasound"
    ]
  },
  "Gum disease": {
    "Disease": "Gum disease",
    "Description": "Gum disease (periodontal disease) is an infection and inflammation of the gums and surrounding tissues, often caused by poor oral hygiene, leading to bleeding, receding gums, and tooth loss.",
    "Diet": [
      "Vitamin C-rich foods (citrus fruits, strawberries)",
      "Calcium-rich foods (milk, yogurt)",
      "Green tea",
      "Avoid sugary and sticky foods",
      "Omega-3 fatty acids (walnuts, flaxseeds)"
    ],
    "Precaution_1": "Maintain oral hygiene",
    "Precaution_2": "Floss daily",
    "Precaution_3": "Avoid smoking",
    "Precaution_4": "Visit dentist regularly",
    "Workouts": [
      "Oral hygiene focus: Brush and floss regularly",
      "Avoid sugary sports drinks: Prevent bacterial growth",
      "Stay hydrated: Supports gum health",
      "No specific physical activity restriction: Follow general wellness plan"
    ],
    "Medication": [
      "Antibacterial mouthwash (e.g., Chlorhexidine)",
      "Scaling and root planing",
      "Doxycycline",
      "Fluoride toothpaste",
      "Surgical interventions (if severe)"
    ]
  },
  "Gastrointestinal hemorrhage": {
    "Disease": "Gastrointestinal hemorrhage",
    "Description": "Gastrointestinal hemorrhage is bleeding that occurs anywhere along the digestive tract, often presenting as vomiting blood or black, tarry stools, and can be caused by ulcers, varices, or cancer.",
    "Diet": [
      "Avoid spicy and acidic foods",
      "Bland diet (bananas, rice, applesauce)",
      "Hydration",
      "Iron-rich foods post bleeding (spinach, beans)",
      "Avoid alcohol and NSAIDs"
    ],
    "Precaution_1": "Avoid NSAIDs",
    "Precaution_2": "Eat a soft bland diet",
    "Precaution_3": "Limit alcohol",
    "Precaution_4": "Follow up with GI specialist",
    "Workouts": [
      "Rest: Avoid strenuous activity during active bleeding",
      "Breathing exercises: Manage stress on the digestive system",
      "Gentle walking: Only after stabilization",
      "Avoid abdominal strain: Prevent re-bleeding"
    ],
    "Medication": [
      "IV proton pump inhibitors (e.g., Pantoprazole)",
      "Endoscopic hemostasis",
      "Blood transfusion",
      "Octreotide (for variceal bleeding)",
      "Antibiotics (e.g., Ceftriaxone) if cirrhosis present"
    ]
  },
  "Anxiety": {
    "Disease": "Anxiety",
    "Description": "Anxiety is a mental health condition characterized by excessive worry, nervousness, or fear that interferes with daily activities, often accompanied by physical symptoms like restlessness, sweating, or rapid heartbeat.",
    "Diet": [
      "Magnesium-rich foods (nuts, seeds)",
      "Omega-3 fatty acids (salmon, chia seeds)",
      "Vitamin B-complex foods (whole grains, eggs)",
      "Probiotics (kimchi, yogurt)",
      "Limit caffeine and sugar"
    ],
    "Precaution_1": "Practice relaxation techniques",
    "Precaution_2": "Avoid stimulants like caffeine",
    "Precaution_3": "Maintain regular sleep",
    "Precaution_4": "Seek counseling if needed",
    "Workouts": [
      "Yoga: Combines movement and mindfulness",
      "Breathing exercises: Control physiological symptoms",
      "Walking in nature: Calms the mind",
      "Tai chi: Improve mental and emotional balance"
    ],
    "Medication": [
      "SSRIs (e.g., Escitalopram)",
      "SNRIs (e.g., Duloxetine)",
      "Benzodiazepines (short-term use)",
      "Buspirone",
      "Cognitive Behavioral Therapy (CBT)"
    ]
  },
  "Conjunctivitis due to allergy": {
    "Disease": "Conjunctivitis due to allergy",
    "Description": "Allergic conjunctivitis is inflammation of the conjunctiva (eye lining) caused by allergens like pollen or dust, leading to red, itchy, watery eyes without infectious discharge.",
    "Diet": [
      "Antihistamine-rich foods (quercetin in apples, onions)",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Vitamin C-rich foods (citrus)",
      "Hydration",
      "Avoid allergens"
    ],
    "Precaution_1": "Avoid rubbing eyes",
    "Precaution_2": "Use antihistamine drops",
    "Precaution_3": "Keep environment clean",
    "Precaution_4": "Avoid known allergens",
    "Workouts": [
      "Indoor exercises: Avoid allergens like pollen",
      "Gentle yoga: Avoid face touching",
      "Stretching: Avoid eye strain",
      "Avoid swimming: Prevent eye irritation"
    ],
    "Medication": [
      "Antihistamine eye drops (e.g., Olopatadine)",
      "Mast cell stabilizers (e.g., Ketotifen)",
      "Artificial tears",
      "Oral antihistamines",
      "Cold compress"
    ]
  },
  "Drug reaction": {
    "Disease": "Drug reaction",
    "Description": "A drug reaction is an adverse response to a medication, ranging from mild rashes or stomach upset to severe allergic responses like Stevens-Johnson syndrome or anaphylaxis.",
    "Diet": [
      "Balanced diet with antioxidants (berries, leafy greens)",
      "Hydration",
      "Avoid processed and allergenic foods",
      "Vitamin C and E-rich foods (nuts, seeds, citrus)",
      "Consult doctor for specific restrictions"
    ],
    "Precaution_1": "Stop the drug immediately",
    "Precaution_2": "Consult a doctor",
    "Precaution_3": "Use antihistamines if prescribed",
    "Precaution_4": "Monitor for worsening symptoms",
    "Workouts": [
      "Rest: While recovering from adverse reactions",
      "Low-intensity movement: Once stabilized",
      "Breathing exercises: Calm stress responses",
      "Avoid sun exposure: If on photosensitive medications"
    ],
    "Medication": [
      "Discontinuation of offending drug",
      "Antihistamines (e.g., Diphenhydramine)",
      "Corticosteroids",
      "Epinephrine (for anaphylaxis)",
      "IV fluids and supportive care"
    ]
  },
  "Macular degeneration": {
    "Disease": "Macular degeneration",
    "Description": "Macular degeneration is an eye disorder that damages the macula, the part of the retina responsible for central vision, leading to blurred or loss of central vision, typically in older adults.",
    "Diet": [
      "Vitamin A-rich foods (carrots, sweet potatoes)",
      "Lutein and zeaxanthin foods (spinach, kale)",
      "Omega-3 fatty acids (fish, walnuts)",
      "Zinc-rich foods (pumpkin seeds, beef)",
      "Antioxidant-rich foods (blueberries, citrus)"
    ],
    "Precaution_1": "Wear sunglasses",
    "Precaution_2": "Eat leafy greens",
    "Precaution_3": "Avoid smoking",
    "Precaution_4": "Regular eye checkups",
    "Workouts": [
      "Balance training: Prevent falls due to vision changes",
      "Walking: Improves circulation and eye health",
      "Indoor cycling: Safe with limited vision",
      "Avoid fast-paced movements: Prevent injuries"
    ],
    "Medication": [
      "Anti-VEGF injections (e.g., Ranibizumab, Aflibercept)",
      "AREDS2 vitamin supplements",
      "Photodynamic therapy",
      "Laser therapy (rarely)",
      "Low vision aids"
    ]
  },
  "Pneumonia": {
    "Disease": "Pneumonia",
    "Description": "Pneumonia is an infection of the lungs caused by bacteria, viruses, or fungi, resulting in cough, fever, chest pain, and difficulty breathing due to inflammation and fluid in the lungs.",
    "Diet": [
      "Hydrating fluids (water, herbal teas)",
      "Protein-rich foods (chicken, beans)",
      "Vitamin C-rich foods (oranges, broccoli)",
      "Avoid dairy if mucus worsens",
      "Anti-inflammatory foods (turmeric, ginger)"
    ],
    "Precaution_1": "Take full course of antibiotics",
    "Precaution_2": "Avoid smoking",
    "Precaution_3": "Rest adequately",
    "Precaution_4": "Stay hydrated",
    "Workouts": [
      "Rest: Critical during acute infection",
      "Breathing exercises: Improve lung expansion",
      "Gentle walking: After fever subsides",
      "Gradual reintroduction to physical activity: To build endurance"
    ],
    "Medication": [
      "Antibiotics (e.g., Azithromycin, Ceftriaxone)",
      "Antivirals (e.g., Oseltamivir if viral)",
      "Expectorants",
      "Fever reducers (e.g., Acetaminophen)",
      "Oxygen therapy if needed"
    ]
  },
  "Vaginal cyst": {
    "Disease": "Vaginal cyst",
    "Description": "A vaginal cyst is a fluid-filled sac that forms along the vaginal wall, often benign and asymptomatic, but can sometimes cause discomfort or pain if enlarged or infected.",
    "Diet": [
      "Probiotics (yogurt, kefir)",
      "Anti-inflammatory foods (berries, leafy greens)",
      "Hydration",
      "Avoid irritants and processed foods",
      "Omega-3 fatty acids (salmon, flaxseeds)"
    ],
    "Precaution_1": "Maintain genital hygiene",
    "Precaution_2": "Avoid tight clothing",
    "Precaution_3": "Do warm sitz baths",
    "Precaution_4": "Follow doctor’s advice",
    "Workouts": [
      "Pelvic floor exercises: Support area and reduce discomfort",
      "Avoid high-impact sports: Prevent irritation",
      "Walking: Safe and light activity",
      "Breathing exercises: Promote general relaxation"
    ],
    "Medication": [
      "Warm compress",
      "Sitz bath",
      "Antibiotics (if infected)",
      "Surgical drainage (if large or recurrent)",
      "Analgesics for pain"
    ]
  },
  "Carpal tunnel syndrome": {
    "Disease": "Carpal tunnel syndrome",
    "Description": "Carpal tunnel syndrome is a condition caused by compression of the median nerve in the wrist, leading to numbness, tingling, and weakness in the hand and fingers.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, ginger)",
      "Omega-3 fatty acids (chia seeds, salmon)",
      "Magnesium-rich foods (spinach, almonds)",
      "Vitamin B6-rich foods (bananas, poultry)",
      "Avoid excess caffeine and sugar"
    ],
    "Precaution_1": "Take frequent hand breaks",
    "Precaution_2": "Use wrist splints",
    "Precaution_3": "Avoid repetitive motions",
    "Precaution_4": "Do stretching exercises",
    "Workouts": [
      "Wrist stretching: Relieve nerve pressure",
      "Hand-strengthening exercises: Use putty or bands",
      "Avoid repetitive strain: Modify activities",
      "Yoga: Helps with posture and nerve health"
    ],
    "Medication": [
      "Wrist splint",
      "NSAIDs",
      "Corticosteroid injections",
      "Gabapentin (if nerve pain)",
      "Surgical decompression (if severe)"
    ]
  },
  "Nose disorder": {
    "Disease": "Nose disorder",
    "Description": "Nose disorders include structural or inflammatory issues such as deviated septum, nasal polyps, or rhinitis, causing congestion, breathing difficulty, or nosebleeds.",
    "Diet": [
      "Hydration",
      "Vitamin C-rich foods (citrus, strawberries)",
      "Zinc-rich foods (meat, seeds)",
      "Avoid allergens and irritants",
      "Warm fluids and anti-inflammatory foods (ginger, honey)"
    ],
    "Precaution_1": "Avoid nose picking",
    "Precaution_2": "Keep nasal passages moist",
    "Precaution_3": "Use saline sprays",
    "Precaution_4": "Avoid irritants and allergens",
    "Workouts": [
      "Breathing techniques: Nasal breathing focus",
      "Indoor cycling: Low impact on facial pressure",
      "Avoid inversion poses: Prevent sinus pressure",
      "Gentle cardio: Avoid dry, dusty air"
    ],
    "Medication": [
      "Nasal decongestants (e.g., Oxymetazoline)",
      "Antihistamines",
      "Saline nasal spray",
      "Intranasal corticosteroids",
      "Antibiotics (if bacterial infection)"
    ]
  },
  "Dental caries": {
    "Disease": "Dental caries",
    "Description": "Dental caries (tooth decay) is the destruction of tooth enamel due to acids produced by bacteria feeding on sugars, leading to cavities, tooth pain, and infection if untreated.",
    "Diet": [
      "Calcium-rich foods (milk, cheese)",
      "Vitamin D-rich foods (fatty fish, fortified cereals)",
      "Limit sugary and sticky foods",
      "Crunchy fruits and vegetables (apples, carrots)",
      "Green tea"
    ],
    "Precaution_1": "Brush twice daily",
    "Precaution_2": "Limit sugar intake",
    "Precaution_3": "Visit dentist regularly",
    "Precaution_4": "Floss daily",
    "Workouts": [
      "Hydration focus: Water during exercise to reduce acid",
      "Avoid sugary drinks: During workouts",
      "Regular workouts: Support overall oral health",
      "No intense jaw activities: Prevent further damage"
    ],
    "Medication": [
      "Fluoride toothpaste or gel",
      "Dental fillings",
      "Chlorhexidine mouth rinse",
      "Analgesics for pain",
      "Root canal therapy (if advanced)"
    ]
  },
  "Hypertensive heart disease": {
    "Disease": "Hypertensive heart disease",
    "Description": "Hypertensive heart disease includes conditions caused by chronic high blood pressure, such as heart failure, thickened heart muscle, or coronary artery disease.",
    "Diet": [
      "Low-sodium diet (avoid processed foods)",
      "Potassium-rich foods (bananas, sweet potatoes)",
      "Omega-3 fatty acids (salmon, walnuts)",
      "Whole grains (brown rice, oats)",
      "Limit saturated fats (butter, fatty meats)"
    ],
    "Precaution_1": "Reduce salt intake",
    "Precaution_2": "Monitor blood pressure",
    "Precaution_3": "Exercise regularly",
    "Precaution_4": "Take antihypertensive medication",
    "Workouts": [
      "Walking: Low-impact and heart-friendly",
      "Swimming: Great cardiovascular activity",
      "Breathing techniques: Reduce stress-induced spikes",
      "Avoid heavy lifting: Prevent blood pressure surges"
    ],
    "Medication": [
      "ACE inhibitors (e.g., Lisinopril)",
      "Beta-blockers (e.g., Metoprolol)",
      "Diuretics (e.g., Furosemide)",
      "Calcium channel blockers (e.g., Amlodipine)",
      "Lifestyle modification"
    ]
  },
  "Seasonal allergies (hay fever)": {
    "Disease": "Seasonal allergies (hay fever)",
    "Description": "Seasonal allergies, or hay fever, are allergic reactions to airborne allergens like pollen, causing sneezing, nasal congestion, itchy eyes, and throat irritation, often during specific seasons.",
    "Diet": [
      "Quercetin-rich foods (onions, apples)",
      "Vitamin C-rich foods (citrus fruits)",
      "Omega-3 fatty acids (flaxseeds, fish)",
      "Probiotics (yogurt, kimchi)",
      "Avoid allergens"
    ],
    "Precaution_1": "Keep windows closed during high pollen",
    "Precaution_2": "Shower after being outdoors",
    "Precaution_3": "Use air purifier",
    "Precaution_4": "Take antihistamines",
    "Workouts": [
      "Indoor workouts: Avoid pollen exposure",
      "Yoga: Manage immune and stress response",
      "Treadmill walking: Allergy-safe cardio",
      "Wear a mask outdoors: If walking outside"
    ],
    "Medication": [
      "Oral antihistamines (e.g., Cetirizine)",
      "Intranasal corticosteroids (e.g., Fluticasone)",
      "Leukotriene receptor antagonists (e.g., Montelukast)",
      "Nasal saline rinses",
      "Allergy immunotherapy"
    ]
  },
  "Fungal infection of the hair": {
    "Disease": "Fungal infection of the hair",
    "Description": "Fungal infection of the hair, or tinea capitis, is a scalp infection caused by dermatophyte fungi, resulting in scaly patches, hair loss, and sometimes black dots or swelling.",
    "Diet": [
      "Antifungal foods (garlic, coconut oil)",
      "Probiotics (yogurt, kefir)",
      "Vitamin E-rich foods (nuts, seeds)",
      "Zinc-rich foods (beef, pumpkin seeds)",
      "Avoid sugar and processed foods"
    ],
    "Precaution_1": "Keep scalp dry and clean",
    "Precaution_2": "Avoid sharing personal items",
    "Precaution_3": "Use antifungal shampoo",
    "Precaution_4": "Maintain proper hygiene",
    "Workouts": [
      "Avoid shared gym equipment: Prevent spread",
      "Indoor yoga: No sweat-heavy environments",
      "Dry scalp after workouts: Prevent fungus growth",
      "Low-sweat activities: Reduce moisture"
    ],
    "Medication": [
      "Griseofulvin (oral)",
      "Terbinafine (oral)",
      "Ketoconazole shampoo",
      "Selenium sulfide shampoo",
      "Itraconazole"
    ]
  },
  "Rectal disorder": {
    "Disease": "Rectal disorder",
    "Description": "Rectal disorders include conditions affecting the rectum such as hemorrhoids, fissures, or prolapse, often causing pain, bleeding, or difficulty during bowel movements.",
    "Diet": [
      "High-fiber foods (whole grains, fruits, vegetables)",
      "Hydration",
      "Avoid spicy and processed foods",
      "Probiotics (yogurt, sauerkraut)",
      "Limit caffeine and alcohol"
    ],
    "Precaution_1": "Eat a high-fiber diet",
    "Precaution_2": "Drink plenty of water",
    "Precaution_3": "Avoid straining during bowel movements",
    "Precaution_4": "Use sitz baths",
    "Workouts": [
      "Walking: Supports digestion and circulation",
      "Pelvic floor exercises: Strengthen rectal support",
      "Avoid cycling: Prevent irritation",
      "Gentle yoga: Focus on posture and breathing"
    ],
    "Medication": [
      "Hydrocortisone suppositories",
      "Laxatives (e.g., Lactulose)",
      "Fiber supplements",
      "Sitz baths",
      "Surgical intervention (e.g., hemorrhoidectomy if needed)"
    ]
  },
  "Stye": {
    "Disease": "Stye",
    "Description": "A stye is a red, painful lump near the edge of the eyelid caused by a bacterial infection of an oil gland, often resolving on its own or with warm compresses.",
    "Diet": [
      "Vitamin A-rich foods (carrots, sweet potatoes)",
      "Vitamin C-rich foods (citrus)",
      "Hydration",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Avoid eye irritants"
    ],
    "Precaution_1": "Apply warm compress",
    "Precaution_2": "Avoid touching or squeezing",
    "Precaution_3": "Maintain eyelid hygiene",
    "Precaution_4": "Discontinue eye makeup temporarily",
    "Workouts": [
      "Avoid swimming: Prevent bacteria exposure",
      "Low-intensity workouts: No eye rubbing or strain",
      "Clean face post-exercise: Prevent infection",
      "Avoid hot yoga: May worsen swelling"
    ],
    "Medication": [
      "Warm compresses",
      "Topical antibiotic ointment (e.g., Erythromycin)",
      "Oral antibiotics (if spreading)",
      "Pain relievers",
      "Incision and drainage (if abscess forms)"
    ]
  },
  "Heart attack": {
    "Disease": "Heart attack",
    "Description": "A heart attack (myocardial infarction) occurs when blood flow to part of the heart is blocked, leading to chest pain, shortness of breath, nausea, and potentially life-threatening damage to heart muscle.",
    "Diet": [
      "Low-sodium diet (vegetables, fresh fruits)",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Whole grains (brown rice, oats)",
      "Lean proteins (chicken, beans)",
      "Limit saturated and trans fats (processed foods, fried foods)"
    ],
    "Precaution_1": "Take prescribed medication",
    "Precaution_2": "Avoid stress",
    "Precaution_3": "Eat heart-healthy diet",
    "Precaution_4": "Monitor cholesterol and BP",
    "Workouts": [
      "Cardiac rehabilitation: Doctor-supervised program",
      "Walking: Most recommended early-stage workout",
      "Stationary cycling: Low-impact cardio",
      "Avoid high-intensity training: Until medically cleared"
    ],
    "Medication": [
      "Aspirin",
      "Nitroglycerin",
      "Beta-blockers (e.g., Metoprolol)",
      "ACE inhibitors",
      "Thrombolytics or PCI (percutaneous coronary intervention)"
    ]
  },
  "Obstructive sleep apnea (OSA)": {
    "Disease": "Obstructive sleep apnea (OSA)",
    "Description": "OSA is a sleep disorder where the throat muscles intermittently relax and block the airway, causing repeated pauses in breathing during sleep and leading to poor rest and fatigue.",
    "Diet": [
      "Weight management diet (calorie control)",
      "Avoid alcohol and sedatives",
      "High-fiber foods (whole grains, fruits)",
      "Avoid heavy meals before bedtime",
      "Hydration"
    ],
    "Precaution_1": "Maintain healthy weight",
    "Precaution_2": "Use CPAP machine if prescribed",
    "Precaution_3": "Avoid alcohol before bedtime",
    "Precaution_4": "Sleep on your side",
    "Workouts": [
      "Weight management exercises: Walking, swimming",
      "Breathing training: Strengthen airway muscles",
      "Yoga: Improve breathing and sleep quality",
      "Avoid late-night workouts: Prevent sleep disruption"
    ],
    "Medication": [
      "CPAP (Continuous Positive Airway Pressure)",
      "Weight loss",
      "Mandibular advancement device",
      "Modafinil (for residual sleepiness)",
      "Surgery (e.g., UPPP, if indicated)"
    ]
  },
  "Psoriasis": {
    "Disease": "Psoriasis",
    "Description": "Psoriasis is a chronic autoimmune skin condition causing rapid skin cell growth that results in thick, scaly, red patches, often on the elbows, knees, or scalp.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, ginger, berries)",
      "Omega-3 fatty acids (salmon, walnuts)",
      "Vitamin D-rich foods (egg yolk, fortified cereals)",
      "Avoid gluten if sensitive",
      "Hydration"
    ],
    "Precaution_1": "Keep skin moisturized",
    "Precaution_2": "Avoid triggers like stress",
    "Precaution_3": "Use prescribed creams",
    "Precaution_4": "Avoid scratching",
    "Workouts": [
      "Swimming in saltwater: May soothe skin",
      "Moderate aerobic activity: Supports immune system",
      "Stretching and yoga: Gentle on skin",
      "Avoid hot/sweaty environments: Prevent flare-ups"
    ],
    "Medication": [
      "Topical corticosteroids",
      "Vitamin D analogs (e.g., Calcipotriol)",
      "Methotrexate",
      "Biologics (e.g., Adalimumab)",
      "Phototherapy (UVB)"
    ]
  },
  "Arthritis of the hip": {
    "Disease": "Arthritis of the hip",
    "Description": "Arthritis of the hip involves inflammation and degeneration of the hip joint cartilage, leading to pain, stiffness, and reduced mobility, commonly due to osteoarthritis.",
    "Diet": [
      "Anti-inflammatory foods (olive oil, turmeric, berries)",
      "Omega-3 fatty acids (fish, flaxseeds)",
      "Calcium-rich foods (dairy, leafy greens)",
      "Vitamin D-rich foods (fortified milk, egg yolk)",
      "Maintain healthy weight diet"
    ],
    "Precaution_1": "Do low-impact exercises",
    "Precaution_2": "Use walking aids if needed",
    "Precaution_3": "Maintain healthy weight",
    "Precaution_4": "Take anti-inflammatory medication",
    "Workouts": [
      "Water aerobics: Low joint impact",
      "Stretching: Maintain hip mobility",
      "Walking with support: Use cane if needed",
      "Strength training: Build support muscles around joint"
    ],
    "Medication": [
      "NSAIDs",
      "Corticosteroid injections",
      "Physical therapy",
      "Glucosamine supplements",
      "Hip replacement surgery (in advanced cases)"
    ]
  },
  "Sickle cell crisis": {
    "Disease": "Sickle cell crisis",
    "Description": "Sickle cell crisis is a painful episode in people with sickle cell disease, where misshapen red blood cells block blood flow, causing severe pain, fatigue, and potential organ damage.",
    "Diet": [
      "Folate-rich foods (leafy greens, legumes)",
      "Hydrating fluids (water, herbal teas)",
      "Iron-rich foods (lean meats, beans)",
      "Vitamin B6-rich foods (bananas, poultry)",
      "Balanced protein intake"
    ],
    "Precaution_1": "Stay hydrated",
    "Precaution_2": "Avoid extreme temperatures",
    "Precaution_3": "Prevent infections",
    "Precaution_4": "Take prescribed medication regularly",
    "Workouts": [
      "Rest: Avoid physical stress during crisis",
      "Hydration focus: Essential during and after workouts",
      "Low-intensity stretching: Once stable",
      "Avoid high altitudes: Prevent oxygen drop"
    ],
    "Medication": [
      "Hydroxyurea",
      "Folic acid",
      "Pain management (e.g., Morphine)",
      "IV fluids",
      "Blood transfusions (if needed)"
    ]
  },
  "Otitis externa (swimmer's ear)": {
    "Disease": "Otitis externa (swimmer's ear)",
    "Description": "Otitis externa is an infection of the outer ear canal, often due to trapped water and bacteria, leading to ear pain, itching, swelling, and discharge.",
    "Diet": [
      "Hydration",
      "Avoid irritants and allergens",
      "Vitamin C-rich foods (citrus fruits, bell peppers)",
      "Anti-inflammatory foods (turmeric, ginger)",
      "Probiotics (yogurt, kefir)"
    ],
    "Precaution_1": "Dry ears after swimming",
    "Precaution_2": "Avoid inserting objects into ears",
    "Precaution_3": "Use prescribed ear drops",
    "Precaution_4": "Avoid dirty water bodies",
    "Workouts": [
      "Avoid swimming: Until healed",
      "Walking: Gentle, safe movement",
      "Indoor cycling: Avoid moisture exposure",
      "Protect ears: Use dry earplugs during workouts"
    ],
    "Medication": [
      "Topical antibiotic ear drops (e.g., Ciprofloxacin + Hydrocortisone)",
      "Acidifying drops (e.g., Acetic acid)",
      "Analgesics",
      "Ear wick for deep infections",
      "Avoid water exposure"
    ]
  },
  "Acute bronchiolitis": {
    "Disease": "Acute bronchiolitis",
    "Description": "Acute bronchiolitis is a common lower respiratory tract infection in infants, usually caused by RSV, leading to wheezing, coughing, and difficulty breathing.",
    "Diet": [
      "Hydration (water, herbal teas)",
      "Vitamin C-rich foods (oranges, strawberries)",
      "Protein-rich foods (chicken, beans)",
      "Avoid dairy if mucus increases",
      "Anti-inflammatory foods (ginger, turmeric)"
    ],
    "Precaution_1": "Keep child hydrated",
    "Precaution_2": "Use humidifier",
    "Precaution_3": "Avoid exposure to smoke",
    "Precaution_4": "Monitor breathing",
    "Workouts": [
      "Rest during illness: Avoid all exertion",
      "Breathing therapy: Rebuild lung strength",
      "Light walking: Only after full recovery",
      "Avoid dusty or polluted areas: Protect airways"
    ],
    "Medication": [
      "Supportive care",
      "Nasal suctioning",
      "Saline nebulization",
      "Oxygen therapy (if hypoxic)",
      "Antipyretics (e.g., Paracetamol)"
    ]
  },
  "Pyogenic skin infection": {
    "Disease": "Pyogenic skin infection",
    "Description": "A pyogenic skin infection is a bacterial infection of the skin that produces pus, such as abscesses, boils, or cellulitis, often caused by Staphylococcus aureus.",
    "Diet": [
      "Protein-rich foods (lean meat, eggs)",
      "Vitamin C-rich foods (citrus fruits, kiwi)",
      "Zinc-rich foods (pumpkin seeds, nuts)",
      "Hydration",
      "Avoid sugary and processed foods"
    ],
    "Precaution_1": "Keep wound clean and dry",
    "Precaution_2": "Avoid scratching",
    "Precaution_3": "Take prescribed antibiotics",
    "Precaution_4": "Cover infected area",
    "Workouts": [
      "Avoid shared gym equipment: Prevent spread",
      "No swimming: Until cleared",
      "Stretching at home: Avoid sweating on infected skin",
      "Use clean towels: Hygiene is key"
    ],
    "Medication": [
      "Oral antibiotics (e.g., Cephalexin, Clindamycin)",
      "Topical antibiotics (e.g., Mupirocin)",
      "Incision and drainage",
      "Antiseptic cleansing",
      "Pain management"
    ]
  },
  "Noninfectious gastroenteritis": {
    "Disease": "Noninfectious gastroenteritis",
    "Description": "Noninfectious gastroenteritis refers to inflammation of the stomach and intestines not caused by infection, but by irritants like medications, alcohol, or food intolerances.",
    "Diet": [
      "Bland diet (bananas, rice, applesauce)",
      "Hydration",
      "Avoid spicy, fatty, and dairy foods",
      "Probiotics (yogurt, kefir)",
      "Small frequent meals"
    ],
    "Precaution_1": "Avoid irritant foods",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Eat bland diet",
    "Precaution_4": "Rest well",
    "Workouts": [
      "Gentle walking: Only after rehydration",
      "Rest: During acute symptoms",
      "Avoid abdominal strain: Prevent discomfort",
      "Hydration focus: Replace electrolytes"
    ],
    "Medication": [
      "Antiemetics (e.g., Ondansetron)",
      "Antispasmodics (e.g., Dicyclomine)",
      "Probiotics",
      "Hydration therapy",
      "Dietary changes (BRAT diet)"
    ]
  },
  "Benign prostatic hyperplasia (BPH)": {
    "Disease": "Benign prostatic hyperplasia (BPH)",
    "Description": "BPH is a non-cancerous enlargement of the prostate gland in older men, causing difficulty urinating, weak stream, or frequent urination, especially at night.",
    "Diet": [
      "Hydration",
      "Limit caffeine and alcohol",
      "Zinc-rich foods (pumpkin seeds, beef)",
      "Tomatoes (lycopene)",
      "High-fiber foods (whole grains, fruits, vegetables)"
    ],
    "Precaution_1": "Limit evening fluid intake",
    "Precaution_2": "Avoid alcohol and caffeine",
    "Precaution_3": "Empty bladder completely",
    "Precaution_4": "Follow up with urologist",
    "Workouts": [
      "Pelvic floor exercises: Improve urinary control",
      "Walking: Promotes bladder health",
      "Avoid cycling: Can worsen symptoms",
      "Stretching: Relieve pelvic tension"
    ],
    "Medication": [
      "Alpha blockers (e.g., Tamsulosin)",
      "5-alpha reductase inhibitors (e.g., Finasteride)",
      "Tadalafil (for symptoms)",
      "Surgical options (e.g., TURP)",
      "Lifestyle changes"
    ]
  },
  "Spinal stenosis": {
    "Disease": "Spinal stenosis",
    "Description": "Spinal stenosis is the narrowing of the spinal canal, often due to arthritis or disc problems, leading to back pain, numbness, and weakness in the legs.",
    "Diet": [
      "Anti-inflammatory foods (berries, leafy greens)",
      "Omega-3 fatty acids (salmon, flaxseeds)",
      "Calcium-rich foods (milk, cheese)",
      "Vitamin D-rich foods (egg yolk, fortified cereals)",
      "Protein-rich foods (chicken, legumes)"
    ],
    "Precaution_1": "Avoid high-impact activities",
    "Precaution_2": "Use walking support",
    "Precaution_3": "Physical therapy",
    "Precaution_4": "Take anti-inflammatory meds",
    "Workouts": [
      "Flexion-based exercises: Reduce spinal pressure",
      "Stationary biking: Low back stress",
      "Water therapy: Buoyant support",
      "Avoid arching or extension exercises: Prevent nerve irritation"
    ],
    "Medication": [
      "NSAIDs",
      "Physical therapy",
      "Epidural steroid injections",
      "Gabapentin or Pregabalin",
      "Surgical decompression (e.g., laminectomy)"
    ]
  },
  "Acute bronchitis": {
    "Disease": "Acute bronchitis",
    "Description": "Acute bronchitis is inflammation of the bronchial tubes in the lungs, typically caused by a viral infection, resulting in cough, mucus production, chest discomfort, and low-grade fever.",
    "Diet": [
      "Hydration",
      "Vitamin C-rich foods (citrus fruits, bell peppers)",
      "Avoid dairy if mucus increases",
      "Anti-inflammatory foods (ginger, turmeric)",
      "Protein-rich foods (chicken, beans)"
    ],
    "Precaution_1": "Avoid smoking",
    "Precaution_2": "Drink warm fluids",
    "Precaution_3": "Use cough suppressants if needed",
    "Precaution_4": "Rest and recover",
    "Workouts": [
      "Breathing exercises: Aid recovery",
      "Rest: Essential during coughing phase",
      "Walking: Gradually reintroduce activity",
      "Avoid cold-air workouts: Prevent airway constriction"
    ],
    "Medication": [
      "Cough suppressants (e.g., Dextromethorphan)",
      "Expectorants (e.g., Guaifenesin)",
      "Bronchodilators (if wheezing)",
      "NSAIDs",
      "Antibiotics (only if bacterial suspected)"
    ]
  },
  "Croup": {
    "Disease": "Croup",
    "Description": "Croup is a viral infection that causes swelling of the airway in young children, leading to a barking cough, hoarseness, and difficulty breathing, often worse at night.",
    "Diet": [
      "Hydration",
      "Humidified air",
      "Vitamin C-rich foods (oranges, strawberries)",
      "Avoid dairy if mucus worsens",
      "Soft, easy to swallow foods (soups, smoothies)"
    ],
    "Precaution_1": "Use humidified air",
    "Precaution_2": "Keep child calm",
    "Precaution_3": "Encourage fluid intake",
    "Precaution_4": "Seek medical help for breathing difficulty",
    "Workouts": [
      "Rest: Until breathing improves",
      "Steam inhalation: Open airways",
      "Avoid exertion: May worsen symptoms",
      "Gentle play: Indoors and calm once recovering"
    ],
    "Medication": [
      "Dexamethasone (oral or IM)",
      "Nebulized epinephrine",
      "Humidified air",
      "Antipyretics",
      "Hydration"
    ]
  },
  "Idiopathic excessive menstruation": {
    "Disease": "Idiopathic excessive menstruation",
    "Description": "Idiopathic excessive menstruation refers to abnormally heavy or prolonged menstrual bleeding without an identifiable underlying medical cause.",
    "Diet": [
      "Iron-rich foods (spinach, red meat)",
      "Vitamin C-rich foods (oranges, bell peppers)",
      "Hydration",
      "Avoid caffeine and alcohol",
      "High-fiber foods (whole grains, fruits)"
    ],
    "Precaution_1": "Use sanitary protection",
    "Precaution_2": "Monitor blood loss",
    "Precaution_3": "Iron-rich diet",
    "Precaution_4": "Consult gynecologist",
    "Workouts": [
      "Yoga: Eases cramps and bleeding",
      "Walking: Low-impact movement",
      "Pelvic floor workouts: Support reproductive organs",
      "Avoid intense cardio: Prevent symptom worsening"
    ],
    "Medication": [
      "Tranexamic acid",
      "NSAIDs (e.g., Mefenamic acid)",
      "Oral contraceptives",
      "Levonorgestrel-releasing IUD",
      "Iron supplements"
    ]
  },
  "Ear drum damage": {
    "Disease": "Ear drum damage",
    "Description": "Ear drum damage (tympanic membrane perforation) is a tear or hole in the eardrum due to infection, injury, or loud noise, which may cause pain, hearing loss, or drainage.",
    "Diet": [
      "Protein-rich foods (lean meats, eggs)",
      "Vitamin C-rich foods (citrus, broccoli)",
      "Zinc-rich foods (shellfish, pumpkin seeds)",
      "Hydration",
      "Avoid irritants"
    ],
    "Precaution_1": "Avoid water entry into ear",
    "Precaution_2": "Don’t insert objects into ear",
    "Precaution_3": "Use ear drops as prescribed",
    "Precaution_4": "Follow up with ENT",
    "Workouts": [
      "Avoid swimming and underwater sports",
      "Walking: Safe and low-impact",
      "Stretching: Avoid head-down positions",
      "Protect ears from loud music/explosive sports"
    ],
    "Medication": [
      "Antibiotic ear drops (if infection)",
      "Oral antibiotics (if needed)",
      "Avoid water entry",
      "Pain relief (e.g., Acetaminophen)",
      "Tympanoplasty (if persistent perforation)"
    ]
  },
  "Temporary or benign blood in urine": {
    "Disease": "Temporary or benign blood in urine",
    "Description": "Temporary or benign hematuria is the presence of blood in the urine without a serious underlying cause, sometimes triggered by exercise, medications, or mild infections.",
    "Diet": [
      "Hydration",
      "Avoid irritants (spicy foods, caffeine)",
      "Balanced diet with fruits and vegetables",
      "Limit sodium and processed foods",
      "Consult doctor for specific recommendations"
    ],
    "Precaution_1": "Stay hydrated",
    "Precaution_2": "Avoid strenuous activity",
    "Precaution_3": "Avoid certain medications (as advised)",
    "Precaution_4": "Follow up with doctor",
    "Workouts": [
      "Walking: Low strain on kidneys",
      "Hydration before and after: Support urinary health",
      "Avoid heavy lifting: Prevent internal pressure",
      "Gentle stretching: Support circulation"
    ],
    "Medication": [
      "Hydration therapy",
      "Avoid strenuous exercise",
      "Adjust anticoagulants (if relevant)",
      "Monitor kidney function",
      "Reassurance and follow-up"
    ]
  },
  "Common cold": {
    "Disease": "Common cold",
    "Description": "The common cold is a viral infection of the upper respiratory tract, typically causing sneezing, sore throat, nasal congestion, cough, and mild fever.",
    "Diet": [
      "Hydration (water, herbal teas)",
      "Vitamin C-rich foods (citrus, kiwi)",
      "Zinc-rich foods (nuts, seeds)",
      "Chicken soup",
      "Avoid dairy if mucus increases"
    ],
    "Precaution_1": "Drink plenty of fluids",
    "Precaution_2": "Rest well",
    "Precaution_3": "Use nasal decongestants",
    "Precaution_4": "Practice good hygiene",
    "Workouts": [
      "Rest: Essential during acute phase",
      "Gentle yoga: After fever subsides",
      "Walking: Once energy returns",
      "Breathing exercises: Open airways"
    ],
    "Medication": [
      "Paracetamol",
      "Ibuprofen",
      "Decongestants (e.g., Pseudoephedrine)",
      "Antihistamines",
      "Cough syrups (e.g., Dextromethorphan)"
    ]
  },
  "Depression": {
    "Disease": "Depression",
    "Description": "Depression is a mental health disorder characterized by persistent sadness, loss of interest or pleasure, fatigue, and changes in sleep or appetite, significantly impacting daily life.",
    "Diet": [
      "Omega-3 fatty acids (salmon, walnuts)",
      "Vitamin D-rich foods (egg yolk, fortified cereals)",
      "Complex carbs (whole grains, legumes)",
      "Folate-rich foods (leafy greens, beans)",
      "Limit processed sugars and caffeine"
    ],
    "Precaution_1": "Maintain social connection",
    "Precaution_2": "Follow treatment plan",
    "Precaution_3": "Get regular exercise",
    "Precaution_4": "Avoid alcohol and drugs",
    "Workouts": [
      "Aerobic exercise: Boosts mood via endorphins",
      "Yoga: Mind-body balance",
      "Group activities: Enhance motivation",
      "Walking in nature: Proven to reduce symptoms"
    ],
    "Medication": [
      "SSRIs (e.g., Sertraline, Escitalopram)",
      "SNRIs (e.g., Venlafaxine)",
      "Atypical antidepressants (e.g., Bupropion)",
      "Cognitive Behavioral Therapy (CBT)",
      "Psychotherapy"
    ]
  },
  "Idiopathic irregular menstrual cycle": {
    "Disease": "Idiopathic irregular menstrual cycle",
    "Description": "Idiopathic irregular menstrual cycle refers to inconsistent or unpredictable menstrual periods without a clear medical cause, often linked to hormonal imbalance.",
    "Diet": [
      "Balanced diet with protein (chicken, beans)",
      "Iron-rich foods (spinach, lentils)",
      "Vitamin B6-rich foods (bananas, poultry)",
      "Hydration",
      "Avoid caffeine and high sugar foods"
    ],
    "Precaution_1": "Keep menstrual diary",
    "Precaution_2": "Maintain healthy weight",
    "Precaution_3": "Reduce stress",
    "Precaution_4": "Consult a gynecologist",
    "Workouts": [
      "Moderate aerobic workouts: Regulate hormones",
      "Yoga: Balance endocrine function",
      "Strength training: Improves metabolic health",
      "Avoid excessive exercise: Can disrupt cycles"
    ],
    "Medication": [
      "Combined oral contraceptives",
      "Progestins",
      "Metformin (if PCOS-related)",
      "Lifestyle modification",
      "Clomiphene (for ovulation induction)"
    ]
  },
  "Schizophrenia": {
    "Disease": "Schizophrenia",
    "Description": "Schizophrenia is a severe psychiatric disorder involving distortions in thinking, perception, emotions, language, and behavior, often with hallucinations or delusions.",
    "Diet": [
      "Omega-3 fatty acids (fish, flaxseeds)",
      "Complex carbs (whole grains, vegetables)",
      "Vitamin B-complex foods (eggs, nuts)",
      "Antioxidant-rich foods (berries, citrus)",
      "Limit caffeine and processed foods"
    ],
    "Precaution_1": "Adhere to medication",
    "Precaution_2": "Avoid substance abuse",
    "Precaution_3": "Attend therapy sessions",
    "Precaution_4": "Build a support network",
    "Workouts": [
      "Structured group workouts: Promote social interaction",
      "Walking or jogging: Boosts brain chemicals",
      "Tai chi: Improves focus and calm",
      "Avoid sensory overload: Choose quiet environments"
    ],
    "Medication": [
      "Antipsychotics (e.g., Risperidone, Olanzapine)",
      "Clozapine (treatment-resistant cases)",
      "Cognitive behavioral therapy",
      "Long-acting injectables",
      "Psychosocial support"
    ]
  },
  "Sepsis": {
    "Disease": "Sepsis",
    "Description": "Sepsis is a life-threatening response to infection where the body’s immune system causes widespread inflammation, leading to tissue damage, organ failure, and possibly death.",
    "Diet": [
      "High-protein foods (eggs, lean meat)",
      "Hydration",
      "Vitamin C and zinc-rich foods (citrus fruits, pumpkin seeds)",
      "Balanced electrolyte intake",
      "Consult doctor for specific nutritional support"
    ],
    "Precaution_1": "Seek urgent medical care",
    "Precaution_2": "Follow antibiotic regimen",
    "Precaution_3": "Monitor temperature & vitals",
    "Precaution_4": "Maintain good hygiene",
    "Workouts": [
      "Rest and rehabilitation: After acute phase",
      "Gentle walking: Gradual rebuilding",
      "Physical therapy: Restore strength",
      "Avoid overexertion: Recovery can be long-term"
    ],
    "Medication": [
      "IV broad-spectrum antibiotics (e.g., Piperacillin-tazobactam)",
      "IV fluids",
      "Vasopressors (e.g., Norepinephrine)",
      "Oxygen therapy",
      "Source control (e.g., drainage of abscess)"
    ]
  },
  "Cholecystitis": {
    "Disease": "Cholecystitis",
    "Description": "Cholecystitis is inflammation of the gallbladder, often due to gallstones, causing severe upper abdominal pain, fever, nausea, and tenderness.",
    "Diet": [
      "Low-fat diet (lean proteins, vegetables)",
      "Avoid fried and fatty foods",
      "High-fiber foods (whole grains, fruits)",
      "Hydration",
      "Small frequent meals"
    ],
    "Precaution_1": "Avoid fatty foods",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Follow up for imaging/tests",
    "Precaution_4": "Take antibiotics as prescribed",
    "Workouts": [
      "Gentle movement: After inflammation resolves",
      "Avoid high-fat pre-workout meals",
      "Walking: Improves digestion",
      "Avoid core strain: Prevent gallbladder pressure"
    ],
    "Medication": [
      "IV antibiotics (e.g., Ceftriaxone + Metronidazole)",
      "Pain relievers (e.g., Morphine)",
      "IV fluids",
      "NPO (nothing by mouth)",
      "Cholecystectomy (surgical removal of gallbladder)"
    ]
  },
  "Cystitis": {
    "Disease": "Cystitis",
    "Description": "Cystitis is inflammation of the bladder, usually from a bacterial infection, leading to frequent, painful urination and lower abdominal discomfort.",
    "Diet": [
      "Hydration (water, cranberry juice)",
      "Avoid caffeine and alcohol",
      "Vitamin C-rich foods (oranges, strawberries)",
      "Probiotics (yogurt, kefir)",
      "Avoid spicy and acidic foods"
    ],
    "Precaution_1": "Drink cranberry juice or water",
    "Precaution_2": "Urinate frequently",
    "Precaution_3": "Avoid irritants like caffeine",
    "Precaution_4": "Wipe front to back",
    "Workouts": [
      "Walking: Safe and bladder-friendly",
      "Hydration focus: Before and after",
      "Pelvic floor exercises: Improve control",
      "Avoid workouts that cause dehydration"
    ],
    "Medication": [
      "Nitrofurantoin",
      "Trimethoprim-sulfamethoxazole",
      "Fosfomycin",
      "Phenazopyridine (for pain relief)",
      "Hydration"
    ]
  },
  "Hemorrhoids": {
    "Disease": "Hemorrhoids",
    "Description": "Hemorrhoids are swollen veins in the anus or rectum that cause pain, itching, bleeding, or discomfort during bowel movements.",
    "Diet": [
      "High-fiber foods (whole grains, fruits, vegetables)",
      "Hydration",
      "Avoid straining and constipation",
      "Limit caffeine and alcohol",
      "Probiotics (yogurt, kimchi)"
    ],
    "Precaution_1": "Eat fiber-rich foods",
    "Precaution_2": "Avoid prolonged sitting",
    "Precaution_3": "Stay hydrated",
    "Precaution_4": "Use sitz baths",
    "Workouts": [
      "Walking: Reduces pressure on rectal veins",
      "Kegel exercises: Improve blood flow",
      "Avoid heavy lifting: Prevent flare-ups",
      "Gentle yoga: Especially pelvic-friendly poses"
    ],
    "Medication": [
      "Topical hydrocortisone cream",
      "Witch hazel pads",
      "Stool softeners (e.g., Docusate)",
      "Sitz baths",
      "Surgical procedures (e.g., rubber band ligation)"
    ]
  },
  "Contact dermatitis": {
    "Disease": "Contact dermatitis",
    "Description": "Contact dermatitis is a skin inflammation caused by exposure to an irritant or allergen, resulting in redness, itching, blisters, or dryness.",
    "Diet": [
      "Avoid allergenic foods",
      "Anti-inflammatory foods (turmeric, ginger)",
      "Hydrating fluids",
      "Vitamin E-rich foods (nuts, seeds)",
      "Probiotics (fermented foods)"
    ],
    "Precaution_1": "Identify and avoid allergen",
    "Precaution_2": "Use fragrance-free products",
    "Precaution_3": "Apply soothing lotion",
    "Precaution_4": "Wear gloves when needed",
    "Workouts": [
      "Avoid sweating heavily: Can irritate skin",
      "Indoor stretching: Cool and dry",
      "Use breathable clothing: During workouts",
      "Clean skin after exercise: Prevent flare-ups"
    ],
    "Medication": [
      "Topical corticosteroids (e.g., Hydrocortisone)",
      "Oral antihistamines",
      "Moisturizers",
      "Avoidance of allergen/irritant",
      "Oral corticosteroids (if severe)"
    ]
  },
  "Sinus bradycardia": {
    "Disease": "Sinus bradycardia",
    "Description": "Sinus bradycardia is a slower than normal heart rate originating from the sinus node, which may be normal in athletes or caused by medications or medical conditions.",
    "Diet": [
      "Balanced diet with adequate electrolytes (potassium from bananas, magnesium from nuts)",
      "Hydration",
      "Limit caffeine and alcohol",
      "Whole grains and lean proteins",
      "Consult cardiologist"
    ],
    "Precaution_1": "Avoid excessive physical strain",
    "Precaution_2": "Regular cardiac monitoring",
    "Precaution_3": "Follow-up with cardiologist",
    "Precaution_4": "Manage electrolyte balance",
    "Workouts": [
      "Light aerobic activity: Walking or slow cycling",
      "Warm-up and cool-down: Essential to prevent dizziness",
      "Breathing exercises: Support heart rhythm",
      "Avoid overexertion: Monitor heart rate"
    ],
    "Medication": [
      "Atropine (acute cases)",
      "Temporary or permanent pacemaker (if symptomatic)",
      "Adjust medications (if drug-induced)",
      "Isoproterenol infusion (if needed)",
      "Monitor ECG"
    ]
  },
  "Pelvic inflammatory disease": {
    "Disease": "Pelvic inflammatory disease",
    "Description": "Pelvic inflammatory disease (PID) is an infection of the female reproductive organs, often caused by sexually transmitted bacteria, leading to abdominal pain, fever, and abnormal discharge.",
    "Diet": [
      "Hydration",
      "Protein-rich foods (chicken, beans)",
      "Vitamin C-rich foods (citrus fruits)",
      "Avoid irritants and processed foods",
      "Probiotics (yogurt, kefir)"
    ],
    "Precaution_1": "Complete full course of antibiotics",
    "Precaution_2": "Avoid sexual activity during treatment",
    "Precaution_3": "Practice safe sex",
    "Precaution_4": "Attend follow-up appointments",
    "Workouts": [
      "Pelvic floor strengthening: Aid recovery",
      "Walking: Supports circulation",
      "Avoid high-impact sports: Prevent discomfort",
      "Gentle yoga: Pelvic-friendly movements"
    ],
    "Medication": [
      "Ceftriaxone + Doxycycline + Metronidazole",
      "Pain relievers",
      "Hospitalization (for severe cases)",
      "Partner treatment",
      "Abstain from intercourse during treatment"
    ]
  },
  "Liver disease": {
    "Disease": "Liver disease",
    "Description": "Liver disease refers to a range of disorders affecting the liver, such as hepatitis, fatty liver, or cirrhosis, potentially causing jaundice, fatigue, and liver dysfunction.",
    "Diet": [
      "Low sodium diet (avoid processed foods)",
      "High-protein foods (eggs, lean meats)",
      "Vitamin-rich foods (leafy greens, fruits)",
      "Avoid alcohol and saturated fats",
      "Hydration"
    ],
    "Precaution_1": "Avoid alcohol",
    "Precaution_2": "Follow a liver-friendly diet",
    "Precaution_3": "Get vaccinated for hepatitis",
    "Precaution_4": "Monitor liver function tests",
    "Workouts": [
      "Walking: Promotes liver circulation",
      "Avoid strenuous workouts: Can worsen fatigue",
      "Strength training (light): Improve muscle mass",
      "Avoid alcohol-based environments (gyms with bars etc.): Stay safe"
    ],
    "Medication": [
      "Lactulose (for hepatic encephalopathy)",
      "Diuretics (e.g., Spironolactone)",
      "Vitamin K (if coagulopathy)",
      "Ursodeoxycholic acid",
      "Antivirals (e.g., Tenofovir for HBV)"
    ]
  },
  "Chronic constipation": {
    "Disease": "Chronic constipation",
    "Description": "Chronic constipation is a long-term condition characterized by infrequent or difficult bowel movements, often accompanied by abdominal discomfort or bloating.",
    "Diet": [
      "High-fiber foods (whole grains, fruits, vegetables)",
      "Hydration",
      "Probiotics (yogurt, kimchi)",
      "Limit processed and fatty foods",
      "Regular meals and physical activity"
    ],
    "Precaution_1": "Increase fiber intake",
    "Precaution_2": "Exercise regularly",
    "Precaution_3": "Stay hydrated",
    "Precaution_4": "Avoid delaying bowel movements",
    "Workouts": [
      "Walking: Stimulates bowel movement",
      "Yoga: Helps with digestion",
      "Core-focused stretching: Gently activates abdomen",
      "Hydration pre- and post-workout: Key support"
    ],
    "Medication": [
      "Laxatives (e.g., Polyethylene glycol)",
      "Stool softeners (e.g., Docusate)",
      "Fiber supplements (e.g., Psyllium)",
      "Osmotic agents (e.g., Lactulose)",
      "Prokinetics"
    ]
  },
  "Skin polyp": {
    "Disease": "Skin polyp",
    "Description": "A skin polyp (skin tag) is a small, benign growth of skin that typically appears in areas where skin rubs together, like the neck, armpits, or groin.",
    "Diet": [
      "Balanced diet with antioxidants (berries, leafy greens)",
      "Vitamin A-rich foods (carrots, sweet potatoes)",
      "Hydration",
      "Avoid processed and fried foods",
      "Omega-3 fatty acids (fish, flaxseeds)"
    ],
    "Precaution_1": "Avoid irritation or injury to area",
    "Precaution_2": "Monitor size and appearance",
    "Precaution_3": "Don’t self-remove",
    "Precaution_4": "Seek medical evaluation",
    "Workouts": [
      "Avoid friction-prone exercises: Prevent irritation",
      "Wear soft, non-abrasive clothing",
      "Gentle yoga or walking",
      "Monitor any changes during workout routines"
    ],
    "Medication": [
      "Cryotherapy",
      "Electrosurgical removal",
      "Snare excision",
      "Topical anesthesia",
      "Histopathology (to rule out malignancy)"
    ]
  },
  "Brachial neuritis": {
    "Disease": "Brachial neuritis",
    "Description": "Brachial neuritis is inflammation of the brachial plexus nerves, causing sudden shoulder and arm pain followed by weakness or numbness.",
    "Diet": [
      "Protein-rich foods (chicken, beans)",
      "Anti-inflammatory foods (turmeric, ginger)",
      "Omega-3 fatty acids (salmon, walnuts)",
      "Vitamin B complex (whole grains, eggs)",
      "Hydration"
    ],
    "Precaution_1": "Avoid heavy lifting",
    "Precaution_2": "Physical therapy",
    "Precaution_3": "Manage pain with meds",
    "Precaution_4": "Get adequate rest",
    "Workouts": [
      "Range-of-motion exercises: Restore shoulder movement",
      "Light resistance training: Under physiotherapy",
      "Avoid overhead lifting",
      "Pain management with guided stretching"
    ],
    "Medication": [
      "NSAIDs",
      "Oral corticosteroids",
      "Gabapentin or Pregabalin",
      "Physical therapy",
      "Pain management"
    ]
  },
  "Esophagitis": {
    "Disease": "Esophagitis",
    "Description": "Esophagitis is inflammation of the esophagus, commonly due to acid reflux, infections, or medications, causing pain when swallowing and chest discomfort.",
    "Diet": [
      "Soft, bland diet (bananas, applesauce, oatmeal)",
      "Avoid spicy, acidic, and fatty foods",
      "Small frequent meals",
      "Hydration",
      "Avoid caffeine and alcohol"
    ],
    "Precaution_1": "Avoid spicy & acidic food",
    "Precaution_2": "Eat smaller meals",
    "Precaution_3": "Sit upright after eating",
    "Precaution_4": "Follow prescribed medication",
    "Workouts": [
      "Avoid high-impact workouts post meals",
      "Walking: Gentle digestive aid",
      "Breathing exercises: Ease reflux",
      "No crunches or abdominal pressure"
    ],
    "Medication": [
      "Proton Pump Inhibitors (e.g., Omeprazole)",
      "H2 Blockers (e.g., Ranitidine)",
      "Sucralfate",
      "Antifungal or antiviral agents (if infectious)",
      "Dietary changes"
    ]
  },
  "Diverticulitis": {
    "Disease": "Diverticulitis",
    "Description": "Diverticulitis is inflammation or infection of small pouches (diverticula) in the colon wall, leading to abdominal pain, fever, and changes in bowel habits.",
    "Diet": [
      "Low-fiber diet during flare-up (white bread, white rice)",
      "Hydration",
      "Gradual increase to high-fiber diet (fruits, vegetables, whole grains)",
      "Avoid nuts and seeds during flare-ups",
      "Probiotics"
    ],
    "Precaution_1": "Eat low-fiber during flare-ups",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Take antibiotics if prescribed",
    "Precaution_4": "Avoid seeds/nuts if advised",
    "Workouts": [
      "Rest: During acute phase",
      "Walking: Light and easy on digestion",
      "Avoid heavy weights: Prevent abdominal strain",
      "Hydration support during and after workouts"
    ],
    "Medication": [
      "Antibiotics (e.g., Ciprofloxacin + Metronidazole)",
      "Clear liquid diet (during flare)",
      "Pain relievers",
      "High-fiber diet (after recovery)",
      "Surgery (if complications)"
    ]
  },
  "Sprain or strain": {
    "Disease": "Sprain or strain",
    "Description": "A sprain is a stretched or torn ligament, while a strain is a stretched or torn muscle or tendon; both cause pain, swelling, and limited movement.",
    "Diet": [
      "Protein-rich foods (lean meat, eggs)",
      "Anti-inflammatory foods (ginger, turmeric)",
      "Vitamin C-rich foods (citrus fruits)",
      "Hydration",
      "Zinc-rich foods (nuts, seeds)"
    ],
    "Precaution_1": "Rest the area",
    "Precaution_2": "Apply ice packs",
    "Precaution_3": "Compression with bandage",
    "Precaution_4": "Elevate the limb",
    "Workouts": [
      "RICE first (rest, ice, compress, elevate)",
      "Gentle range-of-motion exercises: After pain subsides",
      "Avoid re-injury: Use supports if needed",
      "Rehabilitation-focused strength training"
    ],
    "Medication": [
      "RICE (Rest, Ice, Compression, Elevation)",
      "NSAIDs (e.g., Ibuprofen)",
      "Muscle relaxants",
      "Physical therapy",
      "Immobilization (if needed)"
    ]
  },
  "Idiopathic painful menstruation": {
    "Disease": "Idiopathic painful menstruation",
    "Description": "Idiopathic painful menstruation (primary dysmenorrhea) is severe menstrual cramping without an identifiable medical condition, often starting in adolescence.",
    "Diet": [
      "Magnesium-rich foods (spinach, dark chocolate)",
      "Omega-3 fatty acids (salmon, walnuts)",
      "Hydration",
      "Avoid salty and processed foods",
      "Ginger and turmeric tea"
    ],
    "Precaution_1": "Use heat pads",
    "Precaution_2": "Take antispasmodics/NSAIDs",
    "Precaution_3": "Regular exercise",
    "Precaution_4": "Avoid stress",
    "Workouts": [
      "Yoga: Especially child’s pose and reclined twist",
      "Walking: Helps reduce cramps",
      "Heat therapy post-exercise: Relieves pain",
      "Avoid high-intensity workouts during pain spikes"
    ],
    "Medication": [
      "NSAIDs (e.g., Ibuprofen)",
      "Oral contraceptives",
      "Heat therapy",
      "Vitamin B1 and magnesium supplements",
      "Physical activity"
    ]
  },
  "Eustachian tube dysfunction (ear disorder)": {
    "Disease": "Eustachian tube dysfunction (ear disorder)",
    "Description": "Eustachian tube dysfunction occurs when the tube connecting the middle ear to the throat becomes blocked or fails to open, causing pressure, pain, or hearing issues.",
    "Diet": [
      "Anti-inflammatory foods (berries, leafy greens)",
      "Vitamin C-rich foods (oranges, peppers)",
      "Hydration",
      "Avoid dairy if congestion worsens",
      "Probiotics (yogurt)"
    ],
    "Precaution_1": "Avoid flying with a cold",
    "Precaution_2": "Use decongestants",
    "Precaution_3": "Perform Valsalva maneuver",
    "Precaution_4": "Stay hydrated",
    "Workouts": [
      "Avoid pressure changes: No underwater or flying sports",
      "Breathing and jaw exercises: Promote drainage",
      "Gentle yoga: Avoid headstand poses",
      "Walking: Comfortable, low pressure"
    ],
    "Medication": [
      "Nasal decongestants",
      "Nasal corticosteroids",
      "Auto-inflation (e.g., Valsalva maneuver)",
      "Antihistamines",
      "Surgical placement of ear tubes (in severe cases)"
    ]
  },
  "Appendicitis": {
    "Disease": "Appendicitis",
    "Description": "Appendicitis is inflammation of the appendix, usually requiring surgery, and causes sudden lower right abdominal pain, nausea, and fever.",
    "Diet": [
      "Post-surgery: soft foods (broths, rice, applesauce)",
      "Hydration",
      "Avoid high-fat and spicy foods",
      "Gradually introduce fiber (vegetables, fruits)",
      "Probiotics"
    ],
    "Precaution_1": "Avoid taking laxatives",
    "Precaution_2": "Seek emergency care",
    "Precaution_3": "Don’t eat or drink before surgery",
    "Precaution_4": "Follow post-op instructions",
    "Workouts": [
      "Complete rest post-surgery",
      "Physical therapy: If surgery involved",
      "Walking: Introduced gradually",
      "Avoid abdominal workouts until cleared"
    ],
    "Medication": [
      "Surgical removal (Appendectomy)",
      "Pre-operative antibiotics (e.g., Ceftriaxone + Metronidazole)",
      "Pain management",
      "IV fluids",
      "NPO status before surgery"
    ]
  },
  "Hyperemesis gravidarum": {
    "Disease": "Hyperemesis gravidarum",
    "Description": "Hyperemesis gravidarum is a severe form of morning sickness in pregnancy, leading to persistent nausea, vomiting, dehydration, and weight loss.",
    "Diet": [
      "Small frequent meals",
      "Bland foods (crackers, rice)",
      "Ginger tea",
      "Vitamin B6-rich foods (bananas, chickpeas)",
      "Hydration with electrolytes (ORS, coconut water)"
    ],
    "Precaution_1": "Eat small, frequent meals",
    "Precaution_2": "Stay hydrated",
    "Precaution_3": "Avoid strong odors",
    "Precaution_4": "Take prescribed anti-nausea meds",
    "Workouts": [
      "Gentle walking: If tolerated",
      "Prenatal yoga: Helps manage nausea",
      "Avoid fast movements: Prevent triggering symptoms",
      "Hydration breaks essential"
    ],
    "Medication": [
      "IV fluids and electrolytes",
      "Vitamin B6 (Pyridoxine)",
      "Antiemetics (e.g., Ondansetron, Promethazine)",
      "Thiamine supplementation",
      "Nutritional support (e.g., TPN if severe)"
    ]
  },
  "Urinary tract infection": {
    "Disease": "Urinary tract infection",
    "Description": "A urinary tract infection (UTI) is an infection in any part of the urinary system, commonly the bladder, causing pain during urination, urgency, and cloudy or strong-smelling urine.",
    "Diet": [
      "Hydration (water, cranberry juice)",
      "Avoid caffeine, alcohol, and spicy foods",
      "Vitamin C-rich foods (citrus, bell peppers)",
      "Probiotics (yogurt, kefir)",
      "Fiber-rich foods"
    ],
    "Precaution_1": "Drink plenty of fluids",
    "Precaution_2": "Urinate after sex",
    "Precaution_3": "Wipe front to back",
    "Precaution_4": "Complete antibiotic course",
    "Workouts": [
      "Walking: Gentle activity safe during mild infections",
      "Avoid workouts that apply pressure to bladder",
      "Hydration-focused workouts",
      "Pelvic floor exercises: Strengthen urinary control"
    ],
    "Medication": [
      "Nitrofurantoin",
      "Ciprofloxacin",
      "Trimethoprim-sulfamethoxazole",
      "Cranberry supplements",
      "Hydration therapy"
    ]
  },
  "Peripheral nerve disorder": {
    "Disease": "Peripheral nerve disorder",
    "Description": "Peripheral nerve disorders affect the nerves outside the brain and spinal cord, leading to numbness, weakness, pain, or coordination problems.",
    "Diet": [
      "Vitamin B-rich foods (whole grains, eggs, leafy greens)",
      "Omega-3 fatty acids (salmon, chia seeds)",
      "Anti-inflammatory foods (turmeric, berries)",
      "Hydration"
    ],
    "Precaution_1": "Avoid repetitive injury",
    "Precaution_2": "Use ergonomic tools",
    "Precaution_3": "Take B vitamins if deficient",
    "Precaution_4": "Follow neurologist’s advice",
    "Workouts": [
      "Balance training: Prevent falls",
      "Physical therapy: Guided nerve rehab",
      "Stretching: Maintain flexibility",
      "Swimming: Low-impact full-body option"
    ],
    "Medication": [
      "Gabapentin",
      "Pregabalin",
      "Amitriptyline",
      "Physical therapy",
      "Alpha-lipoic acid (as supplement)"
    ]
  },
  "Sebaceous cyst": {
    "Disease": "Sebaceous cyst",
    "Description": "A sebaceous cyst is a noncancerous bump beneath the skin, filled with oily material, often caused by blocked sebaceous glands.",
    "Diet": [
      "Anti-inflammatory foods (ginger, turmeric, leafy greens)",
      "Zinc-rich foods (pumpkin seeds, nuts)",
      "Vitamin A-rich foods (carrots, sweet potatoes)",
      "Hydration"
    ],
    "Precaution_1": "Keep area clean",
    "Precaution_2": "Avoid squeezing",
    "Precaution_3": "Apply warm compress",
    "Precaution_4": "Get it drained by a doctor if needed",
    "Workouts": [
      "Avoid pressure or friction on cyst",
      "Low-sweat activities: Prevent irritation",
      "Walking or yoga: With non-abrasive clothing",
      "Avoid helmets/hats if cyst is on scalp"
    ],
    "Medication": [
      "Warm compress",
      "Incision and drainage (if infected)",
      "Antibiotics (if signs of infection)",
      "Surgical excision",
      "Steroid injection (if inflamed)"
    ]
  },
  "Spontaneous abortion": {
    "Disease": "Spontaneous abortion",
    "Description": "Spontaneous abortion (miscarriage) is the loss of a pregnancy before 20 weeks, often due to genetic issues or unknown causes, and may involve bleeding and cramping.",
    "Diet": [
      "Iron-rich foods (red meat, spinach)",
      "Vitamin C (citrus, strawberries)",
      "Folate-rich foods (legumes, dark leafy greens)",
      "Hydration",
      "Comforting herbal teas"
    ],
    "Precaution_1": "Take emotional support",
    "Precaution_2": "Rest adequately",
    "Precaution_3": "Avoid strenuous activity",
    "Precaution_4": "Follow up for check-up",
    "Workouts": [
      "Gentle stretching: Emotional and physical recovery",
      "Walking: When emotionally and physically ready",
      "Yoga: Calms the nervous system",
      "Avoid strenuous exercise: Until cleared by doctor"
    ],
    "Medication": [
      "Misoprostol (to complete expulsion)",
      "Mifepristone + Misoprostol (in selected cases)",
      "Dilation and curettage (if needed)",
      "Rh immunoglobulin (if Rh-negative)",
      "Emotional support and counseling"
    ]
  },
  "Gallstone": {
    "Disease": "Gallstone",
    "Description": "Gallstones are hardened deposits of digestive fluid in the gallbladder that can block bile flow, causing abdominal pain, nausea, and sometimes infection.",
    "Diet": [
      "Low-fat diet (steamed vegetables, lean meats)",
      "High-fiber foods (whole grains, apples)",
      "Avoid fried foods and refined carbs",
      "Hydration",
      "Small frequent meals"
    ],
    "Precaution_1": "Avoid high-fat foods",
    "Precaution_2": "Maintain a healthy weight",
    "Precaution_3": "Eat regular meals",
    "Precaution_4": "Follow up for surgical evaluation if needed",
    "Workouts": [
      "Avoid high-fat pre-workout meals",
      "Walking: Encourages digestion",
      "Breathing exercises: Reduce stress and spasm",
      "Avoid core-focused exercises: Prevent discomfort"
    ],
    "Medication": [
      "Ursodeoxycholic acid (in some cases)",
      "Pain relievers (e.g., NSAIDs)",
      "Cholecystectomy (surgical removal)",
      "Antibiotics (if cholecystitis)",
      "Dietary modifications"
    ]
  },
  "Multiple sclerosis": {
    "Disease": "Multiple sclerosis",
    "Description": "Multiple sclerosis (MS) is an autoimmune disease where the immune system attacks the protective sheath of nerves, leading to weakness, vision problems, and coordination issues.",
    "Diet": [
      "Omega-3 fatty acids (flaxseeds, salmon)",
      "Vitamin D-rich foods (eggs, fortified milk)",
      "Antioxidant-rich foods (berries, spinach)",
      "Limit saturated fats",
      "Probiotics"
    ],
    "Precaution_1": "Avoid overheating",
    "Precaution_2": "Follow medication schedule",
    "Precaution_3": "Stay physically active",
    "Precaution_4": "Rest when needed",
    "Workouts": [
      "Balance training: Prevent falls",
      "Aqua therapy: Joint-friendly",
      "Stretching: Reduce stiffness",
      "Seated resistance training: Build strength safely"
    ],
    "Medication": [
      "Interferon beta",
      "Glatiramer acetate",
      "Natalizumab",
      "Corticosteroids (for flare-ups)",
      "Disease-modifying therapies (e.g., Fingolimod)"
    ]
  },
  "Angina": {
    "Disease": "Angina",
    "Description": "Angina is chest pain or discomfort due to reduced blood flow to the heart muscle, often triggered by exertion or stress, and relieved by rest or medication.",
    "Diet": [
      "Heart-healthy diet (oats, olive oil, fish)",
      "Omega-3 fatty acids (salmon, flaxseed)",
      "Low-sodium foods",
      "Fruits and vegetables",
      "Avoid trans fats and red meat"
    ],
    "Precaution_1": "Avoid overexertion",
    "Precaution_2": "Take nitroglycerin as prescribed",
    "Precaution_3": "Manage stress",
    "Precaution_4": "Avoid cold exposure",
    "Workouts": [
      "Cardiac rehab exercises: Under supervision",
      "Walking on flat ground: Safe cardiovascular option",
      "Avoid cold-weather workouts: Prevent constriction",
      "No heavy lifting: Can trigger symptoms"
    ],
    "Medication": [
      "Nitroglycerin (sublingual)",
      "Beta-blockers",
      "Calcium channel blockers",
      "Aspirin",
      "Statins"
    ]
  },
  "Skin pigmentation disorder": {
    "Disease": "Skin pigmentation disorder",
    "Description": "Skin pigmentation disorders involve changes in skin color due to excess or lack of melanin, such as vitiligo, melasma, or hyperpigmentation.",
    "Diet": [
      "Vitamin C-rich foods (oranges, bell peppers)",
      "Vitamin E-rich foods (almonds, sunflower seeds)",
      "Beta-carotene (carrots, sweet potatoes)",
      "Hydration",
      "Green tea"
    ],
    "Precaution_1": "Use sunscreen daily",
    "Precaution_2": "Avoid skin irritants",
    "Precaution_3": "Follow dermatological treatments",
    "Precaution_4": "Stay hydrated",
    "Workouts": [
      "Avoid sun exposure: Exercise indoors or with protection",
      "Low-sweat activities: Prevent friction and inflammation",
      "Yoga: Gentle and non-irritating",
      "Hydration: Helps skin health"
    ],
    "Medication": [
      "Hydroquinone cream",
      "Topical retinoids",
      "Azelaic acid",
      "Chemical peels",
      "Laser therapy (for resistant cases)"
    ]
  },
  "Personality disorder": {
    "Disease": "Personality disorder",
    "Description": "Personality disorders are mental health conditions involving rigid and unhealthy patterns of thinking, functioning, and behaving that impair social or occupational life.",
    "Diet": [
      "Balanced diet",
      "Omega-3 fatty acids (walnuts, flaxseed)",
      "Vitamin B-complex (eggs, legumes)",
      "Magnesium-rich foods (dark chocolate, spinach)",
      "Avoid sugar and processed foods"
    ],
    "Precaution_1": "Follow psychotherapy plan",
    "Precaution_2": "Avoid substance use",
    "Precaution_3": "Build healthy relationships",
    "Precaution_4": "Maintain regular routines",
    "Workouts": [
      "Team sports: Encourage social interaction",
      "Walking or running: Structured routine helps mood",
      "Yoga or tai chi: Promote mindfulness",
      "Supervised fitness coaching: Builds discipline and trust"
    ],
    "Medication": [
      "Psychotherapy (e.g., DBT for BPD)",
      "SSRIs (for mood symptoms)",
      "Mood stabilizers (e.g., Lithium)",
      "Antipsychotics (in some cases)",
      "Group therapy"
    ]
  },
  "Strep throat": {
    "Disease": "Strep throat",
    "Description": "Strep throat is a bacterial throat infection caused by Streptococcus pyogenes, leading to sore throat, fever, swollen glands, and red tonsils with white patches.",
    "Diet": [
      "Soft foods (soups, mashed potatoes)",
      "Warm teas (ginger, chamomile)",
      "Hydration",
      "Avoid acidic or spicy foods",
      "Vitamin C-rich foods (oranges, strawberries)"
    ],
    "Precaution_1": "Complete full antibiotic course",
    "Precaution_2": "Avoid sharing utensils",
    "Precaution_3": "Get adequate rest",
    "Precaution_4": "Drink warm fluids",
    "Workouts": [
      "Rest: Until infection clears",
      "Avoid cardio: While febrile or sore throat",
      "Walking: Gradually after symptoms ease",
      "Hydration and vocal rest after workouts"
    ],
    "Medication": [
      "Penicillin",
      "Amoxicillin",
      "Azithromycin (if allergic to penicillin)",
      "Analgesics (e.g., Acetaminophen)",
      "Salt water gargles"
    ]
  },
  "Developmental disability": {
    "Disease": "Developmental disability",
    "Description": "Developmental disabilities are chronic conditions that begin in childhood and affect physical, learning, language, or behavioral areas, such as autism or intellectual disability.",
    "Diet": [
      "Balanced, nutrient-dense diet",
      "Omega-3 fatty acids (fish, flaxseeds)",
      "B vitamins (whole grains, meat)",
      "Fiber-rich foods",
      "Limit sugar and artificial additives"
    ],
    "Precaution_1": "Follow individualized education plans",
    "Precaution_2": "Encourage structured routine",
    "Precaution_3": "Regular therapy",
    "Precaution_4": "Provide positive reinforcement",
    "Workouts": [
      "Occupational therapy-integrated activities",
      "Swimming: Enhances motor coordination",
      "Group play or structured fitness",
      "Balance and core work: Tailored to individual ability"
    ],
    "Medication": [
      "Speech therapy",
      "Occupational therapy",
      "Behavioral therapy",
      "Medications (e.g., Risperidone for irritability in autism)",
      "Special education programs"
    ]
  },
  "Chronic back pain": {
    "Disease": "Chronic back pain",
    "Description": "Chronic back pain is persistent or recurring pain in the back lasting more than three months, often due to structural issues, nerve damage, or degenerative conditions.",
    "Diet": [
      "Anti-inflammatory foods (berries, turmeric)",
      "Calcium and Vitamin D (milk, cheese, eggs)",
      "Magnesium-rich foods (nuts, leafy greens)",
      "Omega-3s (salmon)"
    ],
    "Precaution_1": "Maintain proper posture",
    "Precaution_2": "Regular stretching",
    "Precaution_3": "Use ergonomic furniture",
    "Precaution_4": "Avoid lifting heavy objects",
    "Workouts": [
      "Core stabilization: Essential for support",
      "Water aerobics: Minimal spinal impact",
      "Stretching: Hamstrings, hips, and back",
      "Avoid high-impact sports"
    ],
    "Medication": [
      "NSAIDs",
      "Muscle relaxants",
      "Physical therapy",
      "Epidural steroid injections",
      "Chronic pain management (e.g., TENS, acupuncture)"
    ]
  },
  "Heart failure": {
    "Disease": "Heart failure",
    "Description": "Heart failure is a condition where the heart can't pump blood effectively, leading to fatigue, shortness of breath, fluid retention, and reduced exercise capacity.",
    "Diet": [
      "Low-sodium diet",
      "Fluid monitoring",
      "Potassium-rich foods (bananas, sweet potatoes)",
      "Omega-3 fatty acids (fish)",
      "Avoid red meat and saturated fats"
    ],
    "Precaution_1": "Monitor fluid intake",
    "Precaution_2": "Follow low-sodium diet",
    "Precaution_3": "Take prescribed meds",
    "Precaution_4": "Track weight daily",
    "Workouts": [
      "Supervised cardiac rehab: Custom-designed programs",
      "Walking: Slow and monitored",
      "Breathing techniques: Improve oxygen efficiency",
      "Avoid dehydration or sudden exertion"
    ],
    "Medication": [
      "ACE inhibitors",
      "Beta-blockers",
      "Loop diuretics (e.g., Furosemide)",
      "Aldosterone antagonists (e.g., Spironolactone)",
      "Digoxin (in some cases)"
    ]
  },
  "Conjunctivitis": {
    "Disease": "Conjunctivitis",
    "Description": "Conjunctivitis (pink eye) is inflammation of the conjunctiva of the eye due to infection or allergy, resulting in redness, discharge, and eye irritation.",
    "Diet": [
      "Vitamin A-rich foods (carrots, spinach)",
      "Zinc-rich foods (pumpkin seeds)",
      "Hydration",
      "Probiotics (yogurt)",
      "Avoid dairy if allergic"
    ],
    "Precaution_1": "Use prescribed eye drops",
    "Precaution_2": "Avoid touching/rubbing eyes",
    "Precaution_3": "Wash hands frequently",
    "Precaution_4": "Don’t share towels",
    "Workouts": [
      "Avoid water sports: Prevent further irritation",
      "Gentle indoor walking: Prevent eye strain",
      "Do not share gym equipment",
      "Clean face after workouts"
    ],
    "Medication": [
      "Antibiotic eye drops (e.g., Erythromycin, Moxifloxacin)",
      "Antiviral drops (e.g., Ganciclovir for herpes)",
      "Lubricant drops",
      "Antihistamines (for allergic type)",
      "Cool compresses"
    ]
  },
  "Herniated disk": {
    "Disease": "Herniated disk",
    "Description": "A herniated disk occurs when the inner gel-like core of a spinal disc bulges out through a tear, pressing on nearby nerves and causing back pain, numbness, or weakness.",
    "Diet": [
      "Anti-inflammatory diet (ginger, leafy greens)",
      "Omega-3 fatty acids (fish, flaxseed)",
      "Vitamin D and calcium (fortified foods, milk)",
      "Hydration"
    ],
    "Precaution_1": "Avoid lifting heavy items",
    "Precaution_2": "Follow physical therapy",
    "Precaution_3": "Use proper posture",
    "Precaution_4": "Take prescribed meds",
    "Workouts": [
      "McKenzie extension exercises: Under guidance",
      "Walking: Supports spine",
      "Core strengthening: Stabilizes back",
      "Avoid bending/twisting under load"
    ],
    "Medication": [
      "NSAIDs",
      "Physical therapy",
      "Muscle relaxants",
      "Steroid injections",
      "Surgical discectomy (if severe)"
    ]
  },
  "Diaper rash": {
    "Disease": "Diaper rash",
    "Description": "Diaper rash is skin irritation in the diaper area of infants or adults using diapers, often caused by moisture, friction, or infection.",
    "Diet": [
      "Breastfeeding (for infants)",
      "For older babies: Avoid acidic foods (tomatoes, citrus)",
      "Probiotics (yogurt)",
      "Zinc-rich foods (eggs, meat)",
      "Hydration"
    ],
    "Precaution_1": "Keep area dry",
    "Precaution_2": "Change diapers frequently",
    "Precaution_3": "Apply protective creams",
    "Precaution_4": "Avoid scented products",
    "Workouts": [
      "Not exercise-relevant: Focus on hygiene",
      "Avoid heat and sweat buildup",
      "Let skin breathe",
      "Gentle motion in open diapers (for infants)"
    ],
    "Medication": [
      "Zinc oxide cream",
      "Petroleum jelly",
      "Topical antifungals (e.g., Clotrimazole)",
      "Hydrocortisone cream (short-term)",
      "Frequent diaper changes"
    ]
  },
  "Eczema": {
    "Disease": "Eczema",
    "Description": "Eczema (atopic dermatitis) is a chronic skin condition that causes itchy, inflamed, red, and dry skin, often triggered by allergens, stress, or irritants.",
    "Diet": [
      "Anti-inflammatory foods (turmeric, blueberries)",
      "Omega-3 fatty acids (salmon, chia seeds)",
      "Avoid allergenic foods (dairy, gluten)",
      "Probiotics",
      "Vitamin D (eggs, mushrooms)"
    ],
    "Precaution_1": "Moisturize regularly",
    "Precaution_2": "Avoid irritants like soaps & wool",
    "Precaution_3": "Use corticosteroid creams",
    "Precaution_4": "Reduce stress",
    "Workouts": [
      "Avoid sweat-heavy routines",
      "Indoor walking or light yoga",
      "Cool, breathable workout clothing",
      "Shower promptly after exercise"
    ],
    "Medication": [
      "Topical corticosteroids",
      "Emollients/Moisturizers",
      "Antihistamines (for itching)",
      "Calcineurin inhibitors (e.g., Tacrolimus)",
      "Phototherapy (in severe cases)"
    ]
  }
};

// export const symptomCategories = {
//   "Head & Neurological": [
//     "headache", "dizziness", "fainting", "insomnia", "disturbance of memory", "paresthesia", "seizures", "delusions or hallucinations", "frontal headache", "low self-esteem", "obsessions and compulsions"
//   ],
//   "Respiratory": [
//     "shortness of breath", "breathing fast", "hoarse voice", "sore throat", "cough", "nasal congestion", "throat swelling", "difficulty breathing", "wheezing", "coughing up sputum", "hemoptysis", "apnea", "abnormal breathing sounds", "hurts to breath", "sneezing", "congestion in chest"
//   ],
//   "Cardiac": [
//     "sharp chest pain", "chest tightness", "palpitations", "irregular heartbeat", "increased heart rate", "decreased heart rate", "burning chest pain"
//   ],
//   "Digestive & Abdominal": [
//     "blood in stool", "sharp abdominal pain", "vomiting", "nausea", "diarrhea", "vomiting blood", "regurgitation", "burning abdominal pain", "regurgitation.1", "melena", "rectal bleeding", "constipation", "stomach bloating", "heartburn", "upper abdominal pain", "lower abdominal pain"
//   ],
//   "Urinary & Reproductive": [
//     "retention of urine", "suprapubic pain", "symptoms of the scrotum and testes", "swelling of scrotum", "pain in testicles", "vaginal itching", "painful urination", "involuntary urination", "pain during intercourse", "frequent urination", "vaginal discharge", "blood in urine", "hot flashes", "intermenstrual bleeding", "pain during pregnancy", "pelvic pain", "impotence", "problems during pregnancy", "spotting or bleeding during pregnancy", "unusual color or odor to urine", "excessive urination at night", "blood clots during menstrual periods", "uterine contractions", "long menstrual periods", "heavy menstrual flow", "unpredictable menstruation", "painful menstruation", "infertility", "frequent menstruation", "symptoms of bladder", "symptoms of prostate", "vaginal pain", "vaginal redness"
//   ],
//   "Skin & External": [
//     "skin swelling", "jaundice", "abnormal appearing skin", "skin lesion", "acne or pimples", "skin growth", "irregular appearing scalp", "skin moles", "irregular appearing nails", "itching of skin", "skin dryness, peeling, scaliness, or roughness", "skin irritation", "itchy scalp", "warts", "skin rash", "mass or swelling around the anus", "diaper rash", "lip swelling", "skin dryness"
//   ],
//   "Musculoskeletal": [
//     "abnormal involuntary movements", "leg pain", "hip pain", "hand or finger pain", "wrist pain", "hand or finger swelling", "arm pain", "wrist swelling", "arm stiffness or tightness", "arm swelling", "hand or finger stiffness or tightness", "back pain", "neck pain", "low back pain", "neck mass", "neck swelling", "knee pain", "foot or toe pain", "ankle pain", "bones are painful", "elbow pain", "knee swelling", "knee stiffness or tightness", "leg swelling", "foot or toe swelling", "weakness", "focal weakness", "shoulder pain", "shoulder stiffness or tightness", "lower body pain", "cramps and spasms", "rib pain", "joint pain", "hand or finger lump or mass", "groin pain", "back cramps or spasms", "back mass or lump", "ankle swelling", "elbow swelling", "hand or finger weakness", "hip stiffness or tightness", "arm weakness", "leg weakness", "arm lump or mass", "back stiffness or tightness"
//   ],
//   "General & Behavioral": [
//     "anxiety and nervousness", "depression", "depressive or psychotic symptoms", "lack of growth", "irritable infant", "abusing alcohol", "hostile behavior", "drug abuse", "feeling ill", "restlessness", "weight gain", "problems with movement", "infant feeding problem", "decreased appetite", "excessive anger", "ache all over", "chills", "fatigue", "temper problems", "sleepiness", "flu-like syndrome", "allergic reaction", "fears and phobias", "recent pregnancy", "sweating", "antisocial behavior", "hysterical behavior", "low self-esteem"
//   ],
//   "Eyes, Ears, Nose, Throat": [
//     "hoarse voice", "sore throat", "nasal congestion", "throat swelling", "diminished hearing", "difficulty in swallowing", "pus draining from ear", "white discharge from eye", "mouth ulcer", "diminished vision", "double vision", "symptoms of eye", "pain in eye", "abnormal movement of eyelid", "foreign body sensation in eye", "ear pain", "jaw swelling", "mouth dryness", "ringing in ear", "plugged feeling in ear", "itchy ear(s)", "fluid in ear", "spots or clouds in vision", "eye redness", "lacrimation", "itchiness of eye", "blindness", "eye burns or stings", "symptoms of the face", "facial pain", "bleeding from eye", "coryza", "pulling at ears", "gum pain", "redness in ear", "sinus congestion", "painful sinuses", "nosebleed", "mass on eyelid", "swollen eye", "eyelid swelling", "eyelid lesion or rash", "bleeding from ear", "swollen or red tonsils", "mouth pain", "bleeding gums", "pain in gums", "toothache"
//   ]
// };

export const symptomCategories = {
  "General": [
    "anxiety and nervousness",
    "depression",
    "shortness of breath",
    "depressive or psychotic symptoms",
    "sharp chest pain",
    "dizziness",
    "insomnia",
    "abnormal involuntary movements",
    "chest tightness",
    "palpitations",
    "irregular heartbeat",
    "breathing fast",
    "hoarse voice",
    "sore throat",
    "difficulty speaking",
    "cough",
    "nasal congestion",
    "throat swelling",
    "diminished hearing",
    "difficulty in swallowing",
    "skin swelling",
    "retention of urine",
    "leg pain",
    "hip pain",
    "suprapubic pain",
    "blood in stool",
    "lack of growth",
    "symptoms of the scrotum and testes",
    "swelling of scrotum",
    "pain in testicles",
    "pus draining from ear",
    "jaundice",
    "white discharge from eye",
    "irritable infant",
    "abusing alcohol",
    "fainting",
    "hostile behavior",
    "drug abuse",
    "sharp abdominal pain",
    "feeling ill",
    "vomiting",
    "headache",
    "nausea",
    "diarrhea",
    "vaginal itching",
    "painful urination",
    "involuntary urination",
    "pain during intercourse",
    "frequent urination",
    "lower abdominal pain",
    "vaginal discharge",
    "blood in urine",
    "hot flashes",
    "intermenstrual bleeding",
    "hand or finger pain",
    "wrist pain",
    "hand or finger swelling",
    "arm pain",
    "wrist swelling",
    "arm stiffness or tightness",
    "arm swelling",
    "hand or finger stiffness or tightness",
    "lip swelling",
    "toothache",
    "abnormal appearing skin",
    "skin lesion",
    "acne or pimples",
    "facial pain",
    "mouth ulcer",
    "skin growth",
    "diminished vision",
    "double vision",
    "symptoms of eye",
    "pain in eye",
    "abnormal movement of eyelid",
    "foreign body sensation in eye",
    "irregular appearing scalp",
    "back pain",
    "neck pain",
    "low back pain",
    "pain of the anus",
    "pain during pregnancy",
    "pelvic pain",
    "impotence",
    "vomiting blood",
    "regurgitation",
    "burning abdominal pain",
    "restlessness",
    "wheezing",
    "peripheral edema",
    "neck mass",
    "ear pain",
    "jaw swelling",
    "mouth dryness",
    "neck swelling",
    "knee pain",
    "foot or toe pain",
    "ankle pain",
    "bones are painful",
    "elbow pain",
    "knee swelling",
    "skin moles",
    "weight gain",
    "problems with movement",
    "knee stiffness or tightness",
    "leg swelling",
    "foot or toe swelling",
    "heartburn",
    "infant feeding problem",
    "vaginal pain",
    "vaginal redness",
    "weakness",
    "decreased heart rate",
    "increased heart rate",
    "ringing in ear",
    "plugged feeling in ear",
    "itchy ear(s)",
    "frontal headache",
    "fluid in ear",
    "spots or clouds in vision",
    "eye redness",
    "lacrimation",
    "itchiness of eye",
    "blindness",
    "eye burns or stings",
    "decreased appetite",
    "excessive anger",
    "loss of sensation",
    "focal weakness",
    "symptoms of the face",
    "disturbance of memory",
    "paresthesia",
    "side pain",
    "fever",
    "shoulder pain",
    "shoulder stiffness or tightness",
    "ache all over",
    "lower body pain",
    "problems during pregnancy",
    "spotting or bleeding during pregnancy",
    "cramps and spasms",
    "upper abdominal pain",
    "stomach bloating",
    "changes in stool appearance",
    "unusual color or odor to urine",
    "kidney mass",
    "symptoms of prostate",
    "difficulty breathing",
    "rib pain",
    "joint pain",
    "hand or finger lump or mass",
    "chills",
    "groin pain",
    "fatigue",
    "regurgitation.1",
    "symptoms of the kidneys",
    "melena",
    "coughing up sputum",
    "seizures",
    "delusions or hallucinations",
    "excessive urination at night",
    "bleeding from eye",
    "rectal bleeding",
    "constipation",
    "temper problems",
    "coryza",
    "hemoptysis",
    "allergic reaction",
    "congestion in chest",
    "sleepiness",
    "apnea",
    "abnormal breathing sounds",
    "blood clots during menstrual periods",
    "pulling at ears",
    "gum pain",
    "redness in ear",
    "fluid retention",
    "flu-like syndrome",
    "sinus congestion",
    "painful sinuses",
    "fears and phobias",
    "recent pregnancy",
    "uterine contractions",
    "burning chest pain",
    "back cramps or spasms",
    "back mass or lump",
    "nosebleed",
    "long menstrual periods",
    "heavy menstrual flow",
    "unpredictable menstruation",
    "painful menstruation",
    "infertility",
    "frequent menstruation",
    "sweating",
    "mass on eyelid",
    "swollen eye",
    "eyelid swelling",
    "eyelid lesion or rash",
    "symptoms of bladder",
    "irregular appearing nails",
    "itching of skin",
    "hurts to breath",
    "skin dryness, peeling, scaliness, or roughness",
    "skin irritation",
    "itchy scalp",
    "warts",
    "skin rash",
    "mass or swelling around the anus",
    "ankle swelling",
    "elbow swelling",
    "bleeding from ear",
    "hand or finger weakness",
    "low self-esteem",
    "itching of the anus",
    "swollen or red tonsils",
    "hip stiffness or tightness",
    "mouth pain",
    "arm weakness",
    "obsessions and compulsions",
    "antisocial behavior",
    "sneezing",
    "leg weakness",
    "hysterical behavior",
    "arm lump or mass",
    "bleeding gums",
    "pain in gums",
    "diaper rash",
    "hesitancy",
    "back stiffness or tightness",
    "low urine output"
  ]
};

export const symptomsList = [
  "anxiety and nervousness",
  "depression",
  "shortness of breath",
  "depressive or psychotic symptoms",
  "sharp chest pain",
  "dizziness",
  "insomnia",
  "abnormal involuntary movements",
  "chest tightness",
  "palpitations",
  "irregular heartbeat",
  "breathing fast",
  "hoarse voice",
  "sore throat",
  "difficulty speaking",
  "cough",
  "nasal congestion",
  "throat swelling",
  "diminished hearing",
  "difficulty in swallowing",
  "skin swelling",
  "retention of urine",
  "leg pain",
  "hip pain",
  "suprapubic pain",
  "blood in stool",
  "lack of growth",
  "symptoms of the scrotum and testes",
  "swelling of scrotum",
  "pain in testicles",
  "pus draining from ear",
  "jaundice",
  "white discharge from eye",
  "irritable infant",
  "abusing alcohol",
  "fainting",
  "hostile behavior",
  "drug abuse",
  "sharp abdominal pain",
  "feeling ill",
  "vomiting",
  "headache",
  "nausea",
  "diarrhea",
  "vaginal itching",
  "painful urination",
  "involuntary urination",
  "pain during intercourse",
  "frequent urination",
  "lower abdominal pain",
  "vaginal discharge",
  "blood in urine",
  "hot flashes",
  "intermenstrual bleeding",
  "hand or finger pain",
  "wrist pain",
  "hand or finger swelling",
  "arm pain",
  "wrist swelling",
  "arm stiffness or tightness",
  "arm swelling",
  "hand or finger stiffness or tightness",
  "lip swelling",
  "toothache",
  "abnormal appearing skin",
  "skin lesion",
  "acne or pimples",
  "facial pain",
  "mouth ulcer",
  "skin growth",
  "diminished vision",
  "double vision",
  "symptoms of eye",
  "pain in eye",
  "abnormal movement of eyelid",
  "foreign body sensation in eye",
  "irregular appearing scalp",
  "back pain",
  "neck pain",
  "low back pain",
  "pain of the anus",
  "pain during pregnancy",
  "pelvic pain",
  "impotence",
  "vomiting blood",
  "regurgitation",
  "burning abdominal pain",
  "restlessness",
  "wheezing",
  "peripheral edema",
  "neck mass",
  "ear pain",
  "jaw swelling",
  "mouth dryness",
  "neck swelling",
  "knee pain",
  "foot or toe pain",
  "ankle pain",
  "bones are painful",
  "elbow pain",
  "knee swelling",
  "skin moles",
  "weight gain",
  "problems with movement",
  "knee stiffness or tightness",
  "leg swelling",
  "foot or toe swelling",
  "heartburn",
  "infant feeding problem",
  "vaginal pain",
  "vaginal redness",
  "weakness",
  "decreased heart rate",
  "increased heart rate",
  "ringing in ear",
  "plugged feeling in ear",
  "itchy ear(s)",
  "frontal headache",
  "fluid in ear",
  "spots or clouds in vision",
  "eye redness",
  "lacrimation",
  "itchiness of eye",
  "blindness",
  "eye burns or stings",
  "decreased appetite",
  "excessive anger",
  "loss of sensation",
  "focal weakness",
  "symptoms of the face",
  "disturbance of memory",
  "paresthesia",
  "side pain",
  "fever",
  "shoulder pain",
  "shoulder stiffness or tightness",
  "ache all over",
  "lower body pain",
  "problems during pregnancy",
  "spotting or bleeding during pregnancy",
  "cramps and spasms",
  "upper abdominal pain",
  "stomach bloating",
  "changes in stool appearance",
  "unusual color or odor to urine",
  "kidney mass",
  "symptoms of prostate",
  "difficulty breathing",
  "rib pain",
  "joint pain",
  "hand or finger lump or mass",
  "chills",
  "groin pain",
  "fatigue",
  "regurgitation.1",
  "symptoms of the kidneys",
  "melena",
  "coughing up sputum",
  "seizures",
  "delusions or hallucinations",
  "excessive urination at night",
  "bleeding from eye",
  "rectal bleeding",
  "constipation",
  "temper problems",
  "coryza",
  "hemoptysis",
  "allergic reaction",
  "congestion in chest",
  "sleepiness",
  "apnea",
  "abnormal breathing sounds",
  "blood clots during menstrual periods",
  "pulling at ears",
  "gum pain",
  "redness in ear",
  "fluid retention",
  "flu-like syndrome",
  "sinus congestion",
  "painful sinuses",
  "fears and phobias",
  "recent pregnancy",
  "uterine contractions",
  "burning chest pain",
  "back cramps or spasms",
  "back mass or lump",
  "nosebleed",
  "long menstrual periods",
  "heavy menstrual flow",
  "unpredictable menstruation",
  "painful menstruation",
  "infertility",
  "frequent menstruation",
  "sweating",
  "mass on eyelid",
  "swollen eye",
  "eyelid swelling",
  "eyelid lesion or rash",
  "symptoms of bladder",
  "irregular appearing nails",
  "itching of skin",
  "hurts to breath",
  "skin dryness, peeling, scaliness, or roughness",
  "skin irritation",
  "itchy scalp",
  "warts",
  "skin rash",
  "mass or swelling around the anus",
  "ankle swelling",
  "elbow swelling",
  "bleeding from ear",
  "hand or finger weakness",
  "low self-esteem",
  "itching of the anus",
  "swollen or red tonsils",
  "hip stiffness or tightness",
  "mouth pain",
  "arm weakness",
  "obsessions and compulsions",
  "antisocial behavior",
  "sneezing",
  "leg weakness",
  "hysterical behavior",
  "arm lump or mass",
  "bleeding gums",
  "pain in gums",
  "diaper rash",
  "hesitancy",
  "back stiffness or tightness",
  "low urine output"
];

// export const symptomsList = Object.values(symptomCategories).flat();



// export const diseaseSymptomMatrix = [
//   {
//     "disease": "Panic disorder",
//     "symptoms": ["anxiety and nervousness", "shortness of breath", "depressive or psychotic symptoms", "chest tightness", "palpitations", "irregular heartbeat", "breathing fast", "fears and phobias"]
//   },
//   {
//     "disease": "Common Cold",
//     "symptoms": ["cough", "sore throat", "nasal congestion", "sneezing", "headache", "fever", "fatigue"]
//   },
//   {
//     "disease": "Gastroenteritis",
//     "symptoms": ["vomiting", "diarrhea", "nausea", "sharp abdominal pain", "fever"]
//   }
// ];

export const diseaseSymptomMatrix = [
  {
    "disease": "panic disorder",
    "symptoms": [
      "anxiety and nervousness",
      "shortness of breath",
      "depressive or psychotic symptoms",
      "chest tightness",
      "palpitations",
      "irregular heartbeat",
      "breathing fast",
      "dizziness",
      "insomnia",
      "depression",
      "abnormal involuntary movements"
    ]
  },
  {
    "disease": "vaginitis",
    "symptoms": [
      "suprapubic pain",
      "vaginal itching",
      "painful urination",
      "pain during intercourse",
      "pelvic pain",
      "vaginal pain",
      "lower abdominal pain",
      "vaginal discharge",
      "sharp abdominal pain",
      "pain during pregnancy",
      "vaginal redness"
    ]
  },
  {
    "disease": "problem during pregnancy",
    "symptoms": [
      "sharp abdominal pain",
      "vomiting",
      "headache",
      "nausea",
      "lower abdominal pain",
      "spotting or bleeding during pregnancy",
      "cramps and spasms",
      "back pain",
      "pain during pregnancy",
      "pelvic pain",
      "problems during pregnancy"
    ]
  },
  {
    "disease": "acute pancreatitis",
    "symptoms": [
      "vomiting",
      "diarrhea",
      "side pain",
      "hemoptysis",
      "sharp chest pain",
      "abusing alcohol",
      "sharp abdominal pain",
      "burning abdominal pain",
      "nausea",
      "back pain",
      "lower body pain",
      "upper abdominal pain"
    ]
  },
  {
    "disease": "asthma",
    "symptoms": [
      "sharp chest pain",
      "wheezing",
      "fever",
      "coughing up sputum",
      "coryza",
      "allergic reaction",
      "shortness of breath",
      "chest tightness",
      "difficulty breathing",
      "cough",
      "nasal congestion"
    ]
  },
  {
    "disease": "infectious gastroenteritis",
    "symptoms": [
      "blood in stool",
      "sharp abdominal pain",
      "vomiting",
      "nausea",
      "diarrhea",
      "burning abdominal pain",
      "decreased appetite",
      "fever",
      "chills",
      "fluid retention",
      "flu-like syndrome",
      "headache"
    ]
  },
  {
    "disease": "acute sinusitis",
    "symptoms": [
      "sore throat",
      "ear pain",
      "frontal headache",
      "fever",
      "coryza",
      "sinus congestion",
      "nasal congestion",
      "coughing up sputum",
      "painful sinuses",
      "cough",
      "facial pain"
    ]
  },
  {
    "disease": "cornea infection",
    "symptoms": [
      "diminished vision",
      "symptoms of eye",
      "pain in eye",
      "spots or clouds in vision",
      "eye redness",
      "lacrimation",
      "eye burns or stings",
      "itchiness of eye",
      "lip swelling",
      "foreign body sensation in eye",
      "swollen eye"
    ]
  },
  {
    "disease": "marijuana abuse",
    "symptoms": [
      "depressive or psychotic symptoms",
      "hostile behavior",
      "drug abuse",
      "excessive anger",
      "delusions or hallucinations",
      "temper problems",
      "fears and phobias",
      "difficulty speaking",
      "anxiety and nervousness",
      "depression",
      "abusing alcohol",
      "low self-esteem"
    ]
  },
  {
    "disease": "bursitis",
    "symptoms": [
      "leg pain",
      "arm stiffness or tightness",
      "knee swelling",
      "elbow swelling",
      "arm pain",
      "shoulder pain",
      "hip pain",
      "arm swelling",
      "shoulder stiffness or tightness",
      "elbow pain",
      "leg swelling",
      "knee pain"
    ]
  },
  {
    "disease": "actinic keratosis",
    "symptoms": [
      "skin swelling",
      "skin lesion",
      "skin growth",
      "skin moles",
      "symptoms of the face",
      "skin dryness, peeling, scaliness, or roughness",
      "skin irritation",
      "skin rash",
      "irregular appearing scalp",
      "itching of skin",
      "abnormal appearing skin"
    ]
  },
  {
    "disease": "chronic obstructive pulmonary disease (copd)",
    "symptoms": [
      "sharp chest pain",
      "chest tightness",
      "cough",
      "nasal congestion",
      "coughing up sputum",
      "coryza",
      "congestion in chest",
      "shortness of breath",
      "sore throat",
      "wheezing",
      "fever"
    ]
  },
  {
    "disease": "spondylosis",
    "symptoms": [
      "leg pain",
      "hip pain",
      "arm pain",
      "neck pain",
      "low back pain",
      "knee pain",
      "loss of sensation",
      "back pain",
      "paresthesia",
      "shoulder pain",
      "lower body pain",
      "ache all over"
    ]
  },
  {
    "disease": "injury to the arm",
    "symptoms": [
      "hand or finger pain",
      "arm pain",
      "bones are painful",
      "loss of sensation",
      "elbow swelling",
      "hand or finger swelling",
      "elbow pain",
      "wrist pain",
      "wrist swelling",
      "arm swelling",
      "joint pain",
      "arm stiffness or tightness"
    ]
  },
  {
    "disease": "complex regional pain syndrome",
    "symptoms": [
      "leg pain",
      "hand or finger pain",
      "foot or toe pain",
      "ache all over",
      "arm pain",
      "back pain",
      "neck pain",
      "low back pain",
      "loss of sensation",
      "abnormal involuntary movements",
      "problems with movement",
      "paresthesia"
    ]
  },
  {
    "disease": "injury to the trunk",
    "symptoms": [
      "symptoms of the scrotum and testes",
      "headache",
      "back pain",
      "neck pain",
      "shoulder pain",
      "rib pain",
      "sharp chest pain",
      "wrist pain",
      "low back pain",
      "bones are painful",
      "lower body pain"
    ]
  },
  {
    "disease": "vulvodynia",
    "symptoms": [
      "nausea",
      "back pain",
      "pelvic pain",
      "burning abdominal pain",
      "side pain",
      "painful urination",
      "lower abdominal pain",
      "vaginal discharge",
      "pain during pregnancy",
      "sharp abdominal pain",
      "vaginal pain",
      "cramps and spasms"
    ]
  },
  {
    "disease": "concussion",
    "symptoms": [
      "dizziness",
      "difficulty speaking",
      "headache",
      "nausea",
      "rib pain",
      "facial pain",
      "back pain",
      "neck pain",
      "sleepiness",
      "vomiting",
      "double vision",
      "disturbance of memory"
    ]
  },
  {
    "disease": "hypoglycemia",
    "symptoms": [
      "depressive or psychotic symptoms",
      "dizziness",
      "abnormal involuntary movements",
      "feeling ill",
      "nausea",
      "problems with movement",
      "seizures",
      "sweating",
      "fainting",
      "weakness",
      "decreased appetite",
      "sleepiness"
    ]
  },
  {
    "disease": "hiatal hernia",
    "symptoms": [
      "dizziness",
      "difficulty in swallowing",
      "nausea",
      "regurgitation",
      "burning abdominal pain",
      "heartburn",
      "regurgitation.1",
      "sharp chest pain",
      "back pain",
      "vomiting blood",
      "upper abdominal pain",
      "sharp abdominal pain"
    ]
  },
  {
    "disease": "allergy",
    "symptoms": [
      "skin swelling",
      "lip swelling",
      "itchiness of eye",
      "fluid retention",
      "swollen eye",
      "itching of skin",
      "skin rash",
      "cough",
      "abnormal appearing skin",
      "allergic reaction",
      "peripheral edema"
    ]
  },
  {
    "disease": "acute bronchospasm",
    "symptoms": [
      "sharp chest pain",
      "chest tightness",
      "nasal congestion",
      "vomiting",
      "wheezing",
      "difficulty breathing",
      "shortness of breath",
      "fever",
      "sore throat",
      "coryza",
      "cough"
    ]
  },
  {
    "disease": "degenerative disc disease",
    "symptoms": [
      "leg pain",
      "arm pain",
      "back pain",
      "low back pain",
      "loss of sensation",
      "shoulder pain",
      "lower body pain",
      "joint pain",
      "neck pain",
      "paresthesia",
      "hip pain"
    ]
  },
  {
    "disease": "pain after an operation",
    "symptoms": [
      "sharp chest pain",
      "leg pain",
      "headache",
      "back pain",
      "low back pain",
      "nausea",
      "lower abdominal pain",
      "neck pain",
      "side pain",
      "sharp abdominal pain",
      "vomiting"
    ]
  },
  {
    "disease": "injury to the leg",
    "symptoms": [
      "knee pain",
      "ankle pain",
      "knee stiffness or tightness",
      "leg swelling",
      "infant feeding problem",
      "irregular appearing nails",
      "ankle swelling",
      "leg pain",
      "foot or toe swelling",
      "knee swelling",
      "foot or toe pain",
      "problems with movement"
    ]
  },
  {
    "disease": "gout",
    "symptoms": [
      "hand or finger pain",
      "knee pain",
      "foot or toe pain",
      "knee swelling",
      "foot or toe swelling",
      "joint pain",
      "wrist pain",
      "ankle pain",
      "leg swelling",
      "ankle swelling",
      "hand or finger swelling",
      "wrist swelling"
    ]
  },
  {
    "disease": "otitis media",
    "symptoms": [
      "sore throat",
      "diminished hearing",
      "vomiting",
      "ear pain",
      "plugged feeling in ear",
      "fever",
      "cough",
      "coryza",
      "pulling at ears",
      "nasal congestion",
      "fluid in ear"
    ]
  },
  {
    "disease": "acute kidney injury",
    "symptoms": [
      "shortness of breath",
      "dizziness",
      "retention of urine",
      "sharp abdominal pain",
      "peripheral edema",
      "weakness",
      "symptoms of the kidneys",
      "vomiting",
      "nausea",
      "kidney mass",
      "sharp chest pain"
    ]
  },
  {
    "disease": "threatened pregnancy",
    "symptoms": [
      "sharp abdominal pain",
      "back pain",
      "problems during pregnancy",
      "uterine contractions",
      "vaginal discharge",
      "pelvic pain",
      "spotting or bleeding during pregnancy",
      "cramps and spasms",
      "blood clots during menstrual periods",
      "intermenstrual bleeding",
      "lower abdominal pain"
    ]
  },
  {
    "disease": "gum disease",
    "symptoms": [
      "toothache",
      "facial pain",
      "mouth ulcer",
      "ear pain",
      "jaw swelling",
      "lip swelling",
      "fever",
      "peripheral edema",
      "bleeding gums",
      "pain in gums",
      "gum pain"
    ]
  },
  {
    "disease": "gastrointestinal hemorrhage",
    "symptoms": [
      "dizziness",
      "blood in stool",
      "fainting",
      "vomiting",
      "nausea",
      "diarrhea",
      "vomiting blood",
      "changes in stool appearance",
      "rectal bleeding",
      "sharp abdominal pain",
      "melena",
      "weakness"
    ]
  },
  {
    "disease": "anxiety",
    "symptoms": [
      "anxiety and nervousness",
      "depression",
      "shortness of breath",
      "abnormal involuntary movements",
      "increased heart rate",
      "sharp chest pain",
      "insomnia",
      "palpitations",
      "irregular heartbeat",
      "fears and phobias",
      "headache",
      "depressive or psychotic symptoms"
    ]
  },
  {
    "disease": "conjunctivitis due to allergy",
    "symptoms": [
      "cough",
      "nasal congestion",
      "diminished vision",
      "pain in eye",
      "eye redness",
      "lacrimation",
      "itchiness of eye",
      "eye burns or stings",
      "symptoms of eye",
      "allergic reaction",
      "swollen eye",
      "sneezing"
    ]
  },
  {
    "disease": "drug reaction",
    "symptoms": [
      "shortness of breath",
      "throat swelling",
      "vomiting",
      "nausea",
      "peripheral edema",
      "itching of skin",
      "headache",
      "allergic reaction",
      "skin rash",
      "dizziness",
      "abnormal appearing skin"
    ]
  },
  {
    "disease": "macular degeneration",
    "symptoms": [
      "diminished vision",
      "double vision",
      "abnormal movement of eyelid",
      "itchiness of eye",
      "blindness",
      "bleeding from eye",
      "foreign body sensation in eye",
      "spots or clouds in vision",
      "symptoms of eye",
      "pain in eye",
      "lacrimation"
    ]
  },
  {
    "disease": "pneumonia",
    "symptoms": [
      "shortness of breath",
      "sharp chest pain",
      "sore throat",
      "nasal congestion",
      "vomiting",
      "wheezing",
      "weakness",
      "cough",
      "difficulty breathing",
      "chills",
      "coryza",
      "fever"
    ]
  },
  {
    "disease": "vaginal cyst",
    "symptoms": [
      "sharp abdominal pain",
      "lower abdominal pain",
      "vaginal discharge",
      "pain during pregnancy",
      "pelvic pain",
      "vaginal pain",
      "intermenstrual bleeding",
      "problems during pregnancy",
      "spotting or bleeding during pregnancy",
      "blood clots during menstrual periods",
      "heavy menstrual flow",
      "cramps and spasms"
    ]
  },
  {
    "disease": "carpal tunnel syndrome",
    "symptoms": [
      "hand or finger pain",
      "wrist pain",
      "hand or finger stiffness or tightness",
      "elbow pain",
      "arm weakness",
      "hand or finger swelling",
      "arm pain",
      "wrist swelling",
      "paresthesia",
      "loss of sensation",
      "neck pain"
    ]
  },
  {
    "disease": "nose disorder",
    "symptoms": [
      "cough",
      "ear pain",
      "difficulty breathing",
      "coryza",
      "sinus congestion",
      "painful sinuses",
      "nasal congestion",
      "headache",
      "facial pain",
      "fever",
      "nosebleed",
      "sore throat"
    ]
  },
  {
    "disease": "dental caries",
    "symptoms": [
      "toothache",
      "facial pain",
      "peripheral edema",
      "jaw swelling",
      "gum pain",
      "skin irritation",
      "pain in gums",
      "skin swelling",
      "restlessness",
      "ear pain",
      "mouth pain",
      "neck swelling"
    ]
  },
  {
    "disease": "hypertensive heart disease",
    "symptoms": [
      "sharp chest pain",
      "insomnia",
      "chest tightness",
      "leg swelling",
      "heartburn",
      "weakness",
      "fatigue",
      "shortness of breath",
      "difficulty breathing",
      "palpitations",
      "recent pregnancy"
    ]
  },
  {
    "disease": "seasonal allergies (hay fever)",
    "symptoms": [
      "sore throat",
      "headache",
      "ear pain",
      "frontal headache",
      "lacrimation",
      "coryza",
      "sneezing",
      "cough",
      "allergic reaction",
      "itchiness of eye",
      "nasal congestion"
    ]
  },
  {
    "disease": "fungal infection of the hair",
    "symptoms": [
      "skin swelling",
      "abnormal appearing skin",
      "skin lesion",
      "skin growth",
      "irregular appearing scalp",
      "pelvic pain",
      "skin dryness, peeling, scaliness, or roughness",
      "skin irritation",
      "acne or pimples",
      "itching of skin",
      "itchy scalp",
      "skin rash"
    ]
  },
  {
    "disease": "rectal disorder",
    "symptoms": [
      "blood in stool",
      "diarrhea",
      "pain of the anus",
      "burning abdominal pain",
      "cramps and spasms",
      "melena",
      "itching of the anus",
      "sharp abdominal pain",
      "constipation",
      "heartburn",
      "rectal bleeding"
    ]
  },
  {
    "disease": "stye",
    "symptoms": [
      "skin swelling",
      "abnormal appearing skin",
      "eye redness",
      "mass on eyelid",
      "eyelid swelling",
      "eyelid lesion or rash",
      "pain in eye",
      "eye burns or stings",
      "symptoms of eye",
      "itchiness of eye",
      "swollen eye"
    ]
  },
  {
    "disease": "heart attack",
    "symptoms": [
      "shortness of breath",
      "chest tightness",
      "irregular heartbeat",
      "nausea",
      "arm pain",
      "increased heart rate",
      "burning chest pain",
      "sweating",
      "fainting",
      "sharp chest pain",
      "heartburn"
    ]
  },
  {
    "disease": "obstructive sleep apnea (osa)",
    "symptoms": [
      "shortness of breath",
      "abnormal involuntary movements",
      "difficulty in swallowing",
      "mouth dryness",
      "fatigue",
      "insomnia",
      "difficulty breathing",
      "sleepiness",
      "apnea",
      "abnormal breathing sounds",
      "weight gain",
      "sweating"
    ]
  },
  {
    "disease": "psoriasis",
    "symptoms": [
      "abnormal appearing skin",
      "skin lesion",
      "skin growth",
      "skin moles",
      "joint pain",
      "skin dryness, peeling, scaliness, or roughness",
      "skin rash",
      "skin swelling",
      "itchy scalp",
      "irregular appearing scalp",
      "itching of skin"
    ]
  },
  {
    "disease": "arthritis of the hip",
    "symptoms": [
      "hip pain",
      "groin pain",
      "hip stiffness or tightness",
      "back pain",
      "low back pain",
      "ache all over",
      "lower body pain",
      "joint pain",
      "leg pain",
      "pelvic pain",
      "problems with movement",
      "knee pain"
    ]
  },
  {
    "disease": "sickle cell crisis",
    "symptoms": [
      "sharp chest pain",
      "leg pain",
      "hip pain",
      "sharp abdominal pain",
      "vomiting",
      "back pain",
      "ache all over",
      "low back pain",
      "knee pain",
      "arm pain",
      "burning abdominal pain"
    ]
  },
  {
    "disease": "otitis externa (swimmer's ear)",
    "symptoms": [
      "cough",
      "diminished hearing",
      "ringing in ear",
      "itchy ear(s)",
      "sore throat",
      "facial pain",
      "plugged feeling in ear",
      "fever",
      "ear pain",
      "fluid in ear",
      "redness in ear"
    ]
  },
  {
    "disease": "acute bronchiolitis",
    "symptoms": [
      "cough",
      "nasal congestion",
      "irritable infant",
      "vomiting",
      "wheezing",
      "decreased appetite",
      "fever",
      "difficulty breathing",
      "pulling at ears",
      "hurts to breath",
      "coryza",
      "shortness of breath"
    ]
  },
  {
    "disease": "pyogenic skin infection",
    "symptoms": [
      "skin swelling",
      "hand or finger swelling",
      "abnormal appearing skin",
      "skin lesion",
      "foot or toe pain",
      "leg swelling",
      "leg pain",
      "foot or toe swelling",
      "hand or finger pain",
      "skin rash",
      "peripheral edema"
    ]
  },
  {
    "disease": "noninfectious gastroenteritis",
    "symptoms": [
      "sharp abdominal pain",
      "headache",
      "decreased appetite",
      "chills",
      "rectal bleeding",
      "blood in stool",
      "burning abdominal pain",
      "fever",
      "fluid retention",
      "nausea",
      "vomiting",
      "diarrhea"
    ]
  },
  {
    "disease": "benign prostatic hyperplasia (bph)",
    "symptoms": [
      "retention of urine",
      "swelling of scrotum",
      "impotence",
      "excessive urination at night",
      "hesitancy",
      "low urine output",
      "pain in testicles",
      "involuntary urination",
      "blood in urine",
      "symptoms of bladder",
      "symptoms of prostate",
      "frequent urination"
    ]
  },
  {
    "disease": "spinal stenosis",
    "symptoms": [
      "arm pain",
      "neck pain",
      "paresthesia",
      "shoulder pain",
      "lower body pain",
      "leg pain",
      "hip pain",
      "headache",
      "problems with movement",
      "loss of sensation",
      "back pain",
      "low back pain"
    ]
  },
  {
    "disease": "acute bronchitis",
    "symptoms": [
      "shortness of breath",
      "sharp chest pain",
      "sore throat",
      "nasal congestion",
      "headache",
      "wheezing",
      "fever",
      "coughing up sputum",
      "congestion in chest",
      "cough",
      "difficulty breathing",
      "coryza"
    ]
  },
  {
    "disease": "croup",
    "symptoms": [
      "hoarse voice",
      "nasal congestion",
      "coryza",
      "abnormal breathing sounds",
      "shortness of breath",
      "wheezing",
      "fever",
      "sore throat",
      "vomiting",
      "cough",
      "pulling at ears"
    ]
  },
  {
    "disease": "idiopathic excessive menstruation",
    "symptoms": [
      "sharp abdominal pain",
      "cramps and spasms",
      "blood clots during menstrual periods",
      "long menstrual periods",
      "unpredictable menstruation",
      "painful menstruation",
      "frequent menstruation",
      "vaginal discharge",
      "intermenstrual bleeding",
      "heavy menstrual flow",
      "involuntary urination"
    ]
  },
  {
    "disease": "ear drum damage",
    "symptoms": [
      "cough",
      "diminished hearing",
      "pus draining from ear",
      "ear pain",
      "pulling at ears",
      "redness in ear",
      "bleeding from ear",
      "ringing in ear",
      "fluid in ear",
      "nasal congestion",
      "plugged feeling in ear"
    ]
  },
  {
    "disease": "temporary or benign blood in urine",
    "symptoms": [
      "suprapubic pain",
      "painful urination",
      "involuntary urination",
      "frequent urination",
      "lower abdominal pain",
      "regurgitation",
      "regurgitation.1",
      "retention of urine",
      "sharp abdominal pain",
      "back pain",
      "blood in urine",
      "symptoms of bladder"
    ]
  },
  {
    "disease": "common cold",
    "symptoms": [
      "cough",
      "nasal congestion",
      "wheezing",
      "ear pain",
      "chills",
      "coryza",
      "sore throat",
      "vomiting",
      "fever",
      "flu-like syndrome",
      "headache"
    ]
  },
  {
    "disease": "depression",
    "symptoms": [
      "depression",
      "abusing alcohol",
      "anxiety and nervousness",
      "disturbance of memory",
      "delusions or hallucinations",
      "depressive or psychotic symptoms",
      "excessive anger",
      "temper problems",
      "insomnia",
      "hostile behavior",
      "drug abuse"
    ]
  },
  {
    "disease": "idiopathic irregular menstrual cycle",
    "symptoms": [
      "sharp abdominal pain",
      "intermenstrual bleeding",
      "pelvic pain",
      "cramps and spasms",
      "unpredictable menstruation",
      "painful menstruation",
      "infertility",
      "frequent menstruation",
      "long menstrual periods",
      "lower abdominal pain",
      "heavy menstrual flow"
    ]
  },
  {
    "disease": "schizophrenia",
    "symptoms": [
      "anxiety and nervousness",
      "insomnia",
      "temper problems",
      "fears and phobias",
      "low self-esteem",
      "hostile behavior",
      "excessive anger",
      "hysterical behavior",
      "depression",
      "depressive or psychotic symptoms",
      "delusions or hallucinations"
    ]
  },
  {
    "disease": "sepsis",
    "symptoms": [
      "shortness of breath",
      "sharp abdominal pain",
      "decreased appetite",
      "difficulty breathing",
      "suprapubic pain",
      "feeling ill",
      "vomiting",
      "cough",
      "fever",
      "chills",
      "weakness"
    ]
  },
  {
    "disease": "cholecystitis",
    "symptoms": [
      "sharp abdominal pain",
      "vomiting",
      "nausea",
      "back pain",
      "burning abdominal pain",
      "side pain",
      "lower body pain",
      "upper abdominal pain",
      "stomach bloating",
      "symptoms of the kidneys",
      "sharp chest pain",
      "regurgitation.1"
    ]
  },
  {
    "disease": "cystitis",
    "symptoms": [
      "retention of urine",
      "sharp abdominal pain",
      "painful urination",
      "pelvic pain",
      "side pain",
      "lower abdominal pain",
      "blood in urine",
      "back pain",
      "suprapubic pain",
      "frequent urination",
      "symptoms of bladder",
      "involuntary urination"
    ]
  },
  {
    "disease": "hemorrhoids",
    "symptoms": [
      "blood in stool",
      "pain of the anus",
      "heartburn",
      "rectal bleeding",
      "constipation",
      "mass or swelling around the anus",
      "itching of the anus",
      "lower body pain",
      "changes in stool appearance",
      "sharp abdominal pain",
      "melena"
    ]
  },
  {
    "disease": "contact dermatitis",
    "symptoms": [
      "skin swelling",
      "skin lesion",
      "acne or pimples",
      "skin moles",
      "skin dryness, peeling, scaliness, or roughness",
      "skin irritation",
      "allergic reaction",
      "itching of skin",
      "abnormal appearing skin",
      "swollen eye",
      "skin rash"
    ]
  },
  {
    "disease": "sinus bradycardia",
    "symptoms": [
      "shortness of breath",
      "dizziness",
      "chest tightness",
      "palpitations",
      "weakness",
      "decreased heart rate",
      "fainting",
      "feeling ill",
      "increased heart rate",
      "sharp chest pain",
      "irregular heartbeat"
    ]
  },
  {
    "disease": "pelvic inflammatory disease",
    "symptoms": [
      "vomiting",
      "pelvic pain",
      "burning abdominal pain",
      "suprapubic pain",
      "nausea",
      "painful urination",
      "lower abdominal pain",
      "vaginal discharge",
      "intermenstrual bleeding",
      "back pain",
      "sharp abdominal pain"
    ]
  },
  {
    "disease": "liver disease",
    "symptoms": [
      "sharp abdominal pain",
      "diarrhea",
      "peripheral edema",
      "heartburn",
      "weakness",
      "upper abdominal pain",
      "nausea",
      "unusual color or odor to urine",
      "shortness of breath",
      "blood in stool",
      "jaundice",
      "side pain"
    ]
  },
  {
    "disease": "chronic constipation",
    "symptoms": [
      "retention of urine",
      "blood in stool",
      "sharp abdominal pain",
      "vomiting",
      "nausea",
      "pain of the anus",
      "constipation",
      "rectal bleeding",
      "lower abdominal pain",
      "burning abdominal pain",
      "changes in stool appearance"
    ]
  },
  {
    "disease": "skin polyp",
    "symptoms": [
      "skin swelling",
      "irregular appearing scalp",
      "skin moles",
      "skin irritation",
      "abnormal appearing skin",
      "skin lesion",
      "acne or pimples",
      "skin growth",
      "skin dryness, peeling, scaliness, or roughness",
      "warts",
      "itching of skin"
    ]
  },
  {
    "disease": "brachial neuritis",
    "symptoms": [
      "headache",
      "arm pain",
      "back pain",
      "low back pain",
      "elbow pain",
      "paresthesia",
      "shoulder pain",
      "hand or finger pain",
      "loss of sensation",
      "hand or finger weakness",
      "neck pain"
    ]
  },
  {
    "disease": "esophagitis",
    "symptoms": [
      "shortness of breath",
      "sharp chest pain",
      "chest tightness",
      "cough",
      "difficulty in swallowing",
      "sharp abdominal pain",
      "vomiting",
      "sore throat",
      "burning abdominal pain",
      "heartburn",
      "upper abdominal pain",
      "nausea"
    ]
  },
  {
    "disease": "diverticulitis",
    "symptoms": [
      "blood in stool",
      "sharp abdominal pain",
      "vomiting",
      "diarrhea",
      "lower abdominal pain",
      "burning abdominal pain",
      "side pain",
      "fever",
      "nausea",
      "constipation",
      "upper abdominal pain",
      "chills"
    ]
  },
  {
    "disease": "sprain or strain",
    "symptoms": [
      "leg pain",
      "headache",
      "hand or finger pain",
      "arm pain",
      "back pain",
      "neck pain",
      "low back pain",
      "knee pain",
      "wrist pain",
      "foot or toe pain",
      "ankle pain",
      "shoulder pain"
    ]
  },
  {
    "disease": "idiopathic painful menstruation",
    "symptoms": [
      "lower abdominal pain",
      "vaginal discharge",
      "cramps and spasms",
      "blood clots during menstrual periods",
      "long menstrual periods",
      "heavy menstrual flow",
      "unpredictable menstruation",
      "pelvic pain",
      "sharp abdominal pain",
      "vaginal itching",
      "painful menstruation"
    ]
  },
  {
    "disease": "eustachian tube dysfunction (ear disorder)",
    "symptoms": [
      "dizziness",
      "sore throat",
      "ear pain",
      "allergic reaction",
      "redness in ear",
      "swollen or red tonsils",
      "ringing in ear",
      "abnormal breathing sounds",
      "nasal congestion",
      "diminished hearing",
      "plugged feeling in ear"
    ]
  },
  {
    "disease": "appendicitis",
    "symptoms": [
      "sharp abdominal pain",
      "diarrhea",
      "burning abdominal pain",
      "decreased appetite",
      "side pain",
      "upper abdominal pain",
      "lower abdominal pain",
      "fever",
      "stomach bloating",
      "vomiting",
      "nausea"
    ]
  },
  {
    "disease": "hyperemesis gravidarum",
    "symptoms": [
      "sharp abdominal pain",
      "nausea",
      "diarrhea",
      "pain during pregnancy",
      "vomiting blood",
      "burning abdominal pain",
      "problems during pregnancy",
      "dizziness",
      "weakness",
      "vomiting",
      "headache"
    ]
  },
  {
    "disease": "urinary tract infection",
    "symptoms": [
      "retention of urine",
      "vomiting",
      "painful urination",
      "frequent urination",
      "back pain",
      "suprapubic pain",
      "nausea",
      "blood in urine",
      "side pain",
      "lower abdominal pain",
      "fever"
    ]
  },
  {
    "disease": "peripheral nerve disorder",
    "symptoms": [
      "dizziness",
      "abnormal involuntary movements",
      "leg pain",
      "back pain",
      "foot or toe pain",
      "problems with movement",
      "loss of sensation",
      "disturbance of memory",
      "arm pain",
      "paresthesia",
      "arm weakness",
      "leg weakness"
    ]
  },
  {
    "disease": "sebaceous cyst",
    "symptoms": [
      "skin swelling",
      "abnormal appearing skin",
      "skin lesion",
      "acne or pimples",
      "skin growth",
      "back mass or lump",
      "arm lump or mass",
      "hand or finger lump or mass",
      "irregular appearing scalp",
      "neck mass",
      "skin moles"
    ]
  },
  {
    "disease": "spontaneous abortion",
    "symptoms": [
      "sharp abdominal pain",
      "lower abdominal pain",
      "intermenstrual bleeding",
      "pelvic pain",
      "burning abdominal pain",
      "problems during pregnancy",
      "pain during pregnancy",
      "spotting or bleeding during pregnancy",
      "blood clots during menstrual periods",
      "heavy menstrual flow",
      "cramps and spasms",
      "uterine contractions"
    ]
  },
  {
    "disease": "gallstone",
    "symptoms": [
      "sharp abdominal pain",
      "burning abdominal pain",
      "heartburn",
      "regurgitation.1",
      "sharp chest pain",
      "upper abdominal pain",
      "vomiting",
      "lower body pain",
      "nausea",
      "back pain",
      "side pain"
    ]
  },
  {
    "disease": "multiple sclerosis",
    "symptoms": [
      "dizziness",
      "headache",
      "weakness",
      "loss of sensation",
      "paresthesia",
      "abnormal involuntary movements",
      "problems with movement",
      "fatigue",
      "disturbance of memory",
      "leg weakness",
      "focal weakness"
    ]
  },
  {
    "disease": "angina",
    "symptoms": [
      "dizziness",
      "chest tightness",
      "irregular heartbeat",
      "hot flashes",
      "palpitations",
      "increased heart rate",
      "lower body pain",
      "shortness of breath",
      "sharp chest pain",
      "sweating",
      "arm pain"
    ]
  },
  {
    "disease": "skin pigmentation disorder",
    "symptoms": [
      "skin swelling",
      "skin lesion",
      "acne or pimples",
      "irregular appearing scalp",
      "skin moles",
      "skin dryness, peeling, scaliness, or roughness",
      "warts",
      "skin rash",
      "skin growth",
      "itching of skin",
      "abnormal appearing skin"
    ]
  },
  {
    "disease": "personality disorder",
    "symptoms": [
      "anxiety and nervousness",
      "insomnia",
      "hostile behavior",
      "drug abuse",
      "excessive anger",
      "fears and phobias",
      "low self-esteem",
      "depression",
      "temper problems",
      "depressive or psychotic symptoms",
      "delusions or hallucinations"
    ]
  },
  {
    "disease": "strep throat",
    "symptoms": [
      "nasal congestion",
      "difficulty in swallowing",
      "vomiting",
      "headache",
      "decreased appetite",
      "ache all over",
      "chills",
      "sore throat",
      "cough",
      "fever",
      "ear pain",
      "skin rash"
    ]
  },
  {
    "disease": "developmental disability",
    "symptoms": [
      "depressive or psychotic symptoms",
      "hostile behavior",
      "restlessness",
      "seizures",
      "temper problems",
      "obsessions and compulsions",
      "difficulty speaking",
      "fears and phobias",
      "lack of growth",
      "delusions or hallucinations",
      "antisocial behavior"
    ]
  },
  {
    "disease": "chronic back pain",
    "symptoms": [
      "low back pain",
      "loss of sensation",
      "side pain",
      "back cramps or spasms",
      "back stiffness or tightness",
      "leg pain",
      "back pain",
      "lower body pain",
      "hip pain",
      "neck pain",
      "groin pain"
    ]
  },
  {
    "disease": "heart failure",
    "symptoms": [
      "sharp chest pain",
      "cough",
      "leg swelling",
      "difficulty breathing",
      "shortness of breath",
      "chest tightness",
      "weight gain",
      "weakness",
      "palpitations",
      "hurts to breath",
      "fluid retention"
    ]
  },
  {
    "disease": "conjunctivitis",
    "symptoms": [
      "sore throat",
      "cough",
      "itchiness of eye",
      "coryza",
      "swollen eye",
      "white discharge from eye",
      "pain in eye",
      "lacrimation",
      "nasal congestion",
      "eye redness",
      "fever"
    ]
  },
  {
    "disease": "herniated disk",
    "symptoms": [
      "leg pain",
      "arm pain",
      "back pain",
      "neck pain",
      "shoulder pain",
      "arm weakness",
      "leg weakness",
      "low back pain",
      "paresthesia",
      "hip pain",
      "loss of sensation"
    ]
  },
  {
    "disease": "diaper rash",
    "symptoms": [
      "vomiting",
      "diarrhea",
      "fever",
      "temper problems",
      "skin rash",
      "diaper rash",
      "cough",
      "nasal congestion",
      "blood in stool",
      "irritable infant",
      "pulling at ears"
    ]
  },
  {
    "disease": "eczema",
    "symptoms": [
      "skin lesion",
      "irregular appearing scalp",
      "skin irritation",
      "skin rash",
      "cough",
      "skin swelling",
      "abnormal appearing skin",
      "itching of skin",
      "skin dryness, peeling, scaliness, or roughness",
      "acne or pimples",
      "allergic reaction",
      "warts"
    ]
  }
];
