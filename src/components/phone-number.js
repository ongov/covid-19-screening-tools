import React from "react"

const orStr = { en: "or", fr: "ou" }

const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})[ ]?(x\d{4})?$/

function getPhoneNumbers(input) {
  if (input.indexOf(",") > -1) {
    return input
      .split(",")
      .map(num => {
        num = num.trim()
        return phoneRegex.test(num) ? num : null
      })
      .filter(num => num != null)
  } else {
    console.log(input)
    return phoneRegex.test(input) ? input.trim() : ""
  }
}

const PhoneNumber = ({ courthouse, fieldName, lang }) => {
  if (!courthouse || !courthouse[fieldName]) return null

  const phoneNumbers = getPhoneNumbers(courthouse[fieldName])

  if (!phoneNumbers) return null

  console.log(`${fieldName} ${phoneNumbers}`)

  return Array.isArray(phoneNumbers) ? (
    <>
      {phoneNumbers.reduce((acc, cur) => {
        if (!cur) return acc // In case we have something other than a phone number we simply return what we have

        // If we have more than one phone number we need to separate them with an "or" or "ou" depending on lang parameter
        if (acc && acc.length) acc.push(` ${orStr[lang]} `)

        acc.push(<a href={`tel:${cur}`}>{cur}</a>)
        return acc
      }, [])}
    </>
  ) : (
    <a href={`tel:${phoneNumbers}`}>{phoneNumbers}</a>
  )
}

export default PhoneNumber
