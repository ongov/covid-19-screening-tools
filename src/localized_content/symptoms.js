const symptomsTitle = {
  en: {
    text: "Are you currently experiencing any of these symptoms?",
    alt_text: "Are they currently experiencing any of these symptoms?",
    sup_text:
      "Choose any/all that are new, worsening, and not related to other known causes or conditions.",
  },
  fr: {
    text: "Présentez-vous actuellement l’un des symptômes suivants?",
    alt_text: "Présentent-ils l’un des symptômes suivants?",
    sup_text:
      "Cochez tous les nouveaux symptômes, ceux qui s’aggravent et ceux qui ne sont pas liés à d’autres causes ou problèmes de santé connus.",
  },
}

const symptoms = {
  fever: {
    en: {
      text: "Fever",
      sup_text: "Temperature of 37.8 degrees Celsius/100 degrees Fahrenheit or higher",
    },
    fr: {
      text: "Fièvre",
      sup_text: "Température de 37,8 degrés Celsius/100 degrés Fahrenheit ou plus",
    },
  },
  chills: { en: { text: "Chills" }, fr: { text: "Frissons" } },
  cough_new: {
    en: { text: "Cough that's new or worsening", sup_text: "Continuous, more than usual, not related to other known causes or conditions (for example, COPD)" },
    fr: { text: "Toux nouvelle ou qui s’aggrave ", sup_text: "Continue, plus que d’habitude, sans lien avec d’autres causes ou problèmes de santé connus (par exemple, MPOC)" },
  },
  barking_cough: {
    en: {
      text: "Barking cough, making a whistling noise when breathing",
      sup_text: "Croup, not related to other known causes or conditions",
    },
    fr: {
      text: "Toux qui ressemble à un aboiement, grincement ou sifflement durant la respiration ",
      sup_text: "Laryngotrachéite aiguë, sans lien avec d’autres causes ou problèmes de santé connus",
    },
  },
  shortness_of_breath: {
    en: { text: "Shortness of breath", sup_text: "Out of breath, unable to breathe deeply, not related to other known causes or conditions (for example, asthma)" },
    fr: { text: "Essoufflement", sup_text: "Souffle court, incapacité à respirer profondément, sans lien avec d’autres causes ou problèmes de santé connus (par exemple, asthme)" },
  },
  sore_throat: {
    en: {
      text: "Sore throat",
      sup_text: "Not related to other known causes or conditions (for example, seasonal allergies, acid reflux)",
    },
    fr: {
      text: "Mal de gorge",
      sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, allergies saisonnières, reflux acide) ",
    },
  },
  difficulty_swallowing: {
    en: { text: "Difficulty swallowing", sup_text: "Painful swallowing, not related to other known causes or conditions" },
    fr: { text: "Difficulté à avaler", sup_text: "Déglutition douloureuse, sans lien avec d’autres causes ou problèmes de santé connus" },
  },
  runny_nose: {
    en: { text: "Runny nose", sup_text: "Not related to other known causes or conditions (for example, seasonal allergies, being outside in cold weather)"},
    fr: {
      text: "Nez qui coule ",
      sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, allergies saisonnières, retour à l’intérieur après avoir été exposé au froid)",
    },
  },
  stuffy_nose: {
    en: {
      text: "Stuffy or congested nose",
      sup_text: "Not related to other known causes or conditions (for example, seasonal allergies)",
    },
    fr: {
      text: "Nez bouché ou congestionné ",
      sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, allergies saisonnières)",
    },
  },
  lost_taste_smell: {
    en: { text: "Decrease or loss of  taste or smell", sup_text: "Not related to other known causes or conditions (for example, allergies, neurological disorders)" },
    fr: { text: "Diminution ou perte du goût ou de l’odorat", sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, allergies, troubles neurologiques)" },
  },
  pinkeye: {
    en: { text: "Pink eye", sup_text: "Conjunctivitis, not related to other know causes or conditions (for example, reoccurring styes)" },
    fr: { text: "Conjonctivite", sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, orgelets récurrents)" },
  },
  headache: {
    en: { text: "Headache that’s unusual or long lasting", sup_text: "Not related to other known causes or conditions (for example, tension-type headaches, chronic migraines)" },
    fr: { text: "Mal de tête inhabituel ou prolongé", sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, céphalées de tension, migraines chroniques)" },
  },
  digestive_issues: {
    en: {
      text: "Digestive issues like nausea/vomiting, diarrhea, stomach pain",
      sup_text: "Not related to other known causes or conditions (for example, irritable bowel syndrome, anxiety in children, menstrual cramps)",
    },
    fr: {
      text: "Problèmes digestifs comme nausées ou vomissements, diarrhée, maux de ventre",
      sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, syndrome du côlon irritable, anxiété chez l’enfant, crampes menstruelles)",
    },
  },
  muscle_aches: {
    en: { text: "Muscle aches that are unusual or long lasting", sup_text: "Not related to other known causes or conditions (for example, a sudden injury, fibromyalgia)" },
    fr: { text: "Douleurs musculaires inhabituelles ou prolongées", sup_text: "Sans lien avec d’autres causes ou problèmes de santé connus (par exemple, lésion aiguë, fibromyalgie)" },
  },
  fatigue: {
    en: { text: "Extreme tiredness that is unusual", sup_text: "Fatigue, lack of energy, not related to other known causes or conditions (for example, depression, insomnia, thyroid disfunction)" },
    fr: { text: "Fatigue extrême inhabituelle", sup_text: "Fatigue, manque d'énergie, sans lien avec d’autres causes ou problèmes de santé connus (par exemple, dépression, insomnie, dysfonctionnement thyroïdien)" },
  },
  falling_down: {
    en: { text: "Falling down often", sup_text: "For older people" },
    fr: { text: "Chutes fréquentes", sup_text: "Chez les personnes plus âgées" },
  },
  kids_symptoms: {
    en: { text: "Sluggishness or lack of appetite", sup_text: "For young children and infants" },
    fr: { text: "Léthargie ou manque d’appétit", sup_text:"Chez les jeunes enfants et les nourrissons" },
  },
  none_of_the_above: { en: { text: "None of the above" }, fr: { text: "Aucun des énoncés ci\u2011dessus" } },
}

const noSymptomsId = "none_of_the_above"

export { symptomsTitle, symptoms, noSymptomsId }
