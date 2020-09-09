import React from "react"

const orStr = { en: "or", fr: "ou" }

export default ({ phoneNumbers, lang }) =>
  Array.isArray(phoneNumbers) ? (
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
