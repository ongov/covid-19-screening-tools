const schoolDataFields = {
  Region: "la région",
  "Board Number": "le numéro du conseil",
  "Board Name": "le nom du conseil",
  "Board Type": "le type du conseil",
  "Board Language": "la langue du conseil",
  "School Number": "le numéro de l’école",
  "School Name": "le nom de l’école",
  "School Level": "le niveau de l’école",
  "School Language": "la langue de l’école",
  "School Type": "le type  d’école",
  "School Special Conditions Code": "le code du type d’enseignement spécial",
  Street: "le nom de la rue",
  City: "la ville",
  Province: "la province",
  "Postal Code": "le code postal",
  Phone: "le numéro de téléphone",
  Fax: "le numéro de télécopieur",
  "Grade Range": "les années d'études scolaires",
  "Date Open": "la date d’ouverture",
  "School Email": "l’adresse électronique de l’école",
  "School Website": "le site web de l’école",
  "Board Website": "le site web du conseil",
}

const getLocalizedSchoolDataField = (lang, fieldName) => (lang === "en" ? fieldName : schoolDataFields[fieldName])

export default getLocalizedSchoolDataField
