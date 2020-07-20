const symptomsTitle = {
  en:
    "Are you currently experiencing any of these symptoms? Choose any/all that are new and not related to seasonal allergies or pre-existing medical conditions.",
  fr: "Présentez-vous actuellement l’un ou l’autre des symptômes suivants? Cochez toutes les réponses applicables.",
}

const symptoms = {
  fever: {
    en: {
      text: "Fever",
      sup_text: "(feeling hot to the touch, a temperature of 37.8 degrees Celsius or higher)",
    },
    fr: {
      text: "Fièvre",
      sup_text: "(avoir la peau chaude, une température de 37,8 degrés Celsius ou plus)",
    },
  },
  chills: { en: { text: "Chills" }, fr: { text: "Frissons" } },
  cough_new: {
    en: { text: "Cough that's new or worsening", sup_text: "(continuous, more than usual)" },
    fr: { text: "Toux récente ou qui empire", sup_text: "(toux continue, plus fréquente que d’habitude)" },
  },
  barking_cough: {
    en: {
      text: "Barking cough, making a whistling noise when breathing",
      sup_text: "(croup)",
    },
    fr: {
      text: "Toux rauque, sifflement à chaque respiration",
      sup_text: "(croup)",
    },
  },
  shortness_of_breath: {
    en: { text: "Shortness of breath", sup_text: "(out of breath, unable to breathe deeply)" },
    fr: { text: "Difficulté respiratoire", sup_text: "(essoufflement, incapacité de respirer profondément)" },
  },
  sore_throat: {
    en: {
      text: "Sore throat",
      sup_text: "(not related to seasonal allergies or other known causes or conditions)",
    },
    fr: {
      text: "Mal de gorge",
      sup_text: "(sans lien avec des allergies saisonnières ou d’autres causes ou états connus)",
    },
  },
  difficulty_swallowing: {
    en: { text: "Difficulty swallowing" },
    fr: { text: "Difficulté à avaler" },
  },
  runny_nose: {
    en: { text: "Runny nose", sup_text: "(not related to seasonal allergies or other known causes or conditions)" },
    fr: {
      text: "Rhume",
      sup_text: "(sans lien avec des allergies saisonnières ou d’autres causes ou états connus)",
    },
  },
  stuffy_nose: {
    en: {
      text: "Stuffy or congested nose",
      sup_text: "(not related to seasonal allergies or other known causes or conditions)",
    },
    fr: {
      text: "Nez bouché",
      sup_text: "(sans lien avec des allergies saisonnières ou d’autres causes ou états connus)",
    },
  },
  lost_taste_smell: {
    en: { text: "Lost sense of taste or smell" },
    fr: { text: "Perte de l’odorat ou du goût " },
  },
  pinkeye: {
    en: { text: "Pink eye", sup_text: "(conjunctivitis)" },
    fr: { text: "Conjonctivite" },
  },
  headache: {
    en: { text: "Headache that’s unusual or long lasting" },
    fr: { text: "Mal de tête inhabituel ou prolongé" },
  },
  digestive_issues: {
    en: {
      text: "Digestive issues like nausea/vomiting, diarrhea, stomach pain ",
      sup_text: "(not related to other known causes or conditions)",
    },
    fr: {
      text: "Problèmes digestifs/vomissements, diarrhée, mal au ventre",
      sup_text: "(sans lien avec des causes ou états connus)",
    },
  },
  muscle_aches: {
    en: { text: "Muscle aches that are unusual or long lasting" },
    fr: { text: "Douleurs musculaires inhabituelles ou prolongées" },
  },
  fatigue: {
    en: { text: "Extreme tiredness that is unusual", sup_text: "(fatigue, lack of energy)" },
    fr: { text: "Fatigue extrême, inhabituelle", sup_text: "(épuisement, manque d’énergie)" },
  },
  falling_down: {
    en: { text: "Falling down often" },
    fr: { text: "Chutes fréquentes" },
  },
  kids_symptoms: {
    en: { text: "For young children and infants: sluggishness or lack of appetite" },
    fr: { text: "Pour les jeunes enfants et les nourrissons : léthargie ou manque d’appétit" },
  },
  none_of_the_above: { en: { text: "None of the above" }, fr: { text: "Aucun des énoncés ci-dessus" } },
}

const noSymptomsId = "none_of_the_above"

export { symptomsTitle, symptoms, noSymptomsId }
