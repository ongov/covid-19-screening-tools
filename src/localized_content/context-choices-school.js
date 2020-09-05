const schoolContextChoices = {
  en: [
    {
      labelText: "Student",
      supplementaryText: "",
      id: "student",
    },
    {
      labelText: "Parent/guardian on behalf of a student",
      supplementaryText: "",
      id: "guardian",
    },
    {
      labelText: "Employee (for example, teacher, office staff, custodian, bus driver)",
      supplementaryText: "",
      id: "employee",
    },
    {
      labelText: "Visitor",
      supplementaryText: "",
      id: "visitor",
    },
  ],
  fr: [
    {
      labelText: "Élève",
      supplementaryText: "",
      id: "student",
    },
    {
      labelText: "Parent/tuteur au nom d’un élève",
      supplementaryText: "",
      id: "guardian",
    },
    {
      labelText: "Employé (par exemple, enseignant, employé de bureau, gardien, chauffeur d’autobus)",
      supplementaryText: "",
      id: "employee",
    },
    {
      labelText: "Visiteur",
      supplementaryText: "",
      id: "visitor",
    },
  ],
}

const schoolContextContent = {
  en: {
    heading: "I am doing this screening as a:",
  },
  fr: {
    heading: "Je fais ce dépistage en tant que :",
  },
}

export { schoolContextChoices, schoolContextContent }
