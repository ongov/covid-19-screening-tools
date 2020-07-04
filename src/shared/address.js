function getAddressPieces(courthouse, lang) {
  // This is required because we want this to run on the UI side.
  // We add a check for Gatsby to skip this during build.
  if (!courthouse) return {}

  const [address, cityAndPostalCode] = lang === "fr" ? getFrAddress(courthouse) : getEnAddress(courthouse)
  const [city, postalCode] = cityAndPostalCode.split(" ON ")
  return { address, city: city.trim(), postalCode }
}

function getEnAddress(courthouse) {
  return courthouse.address.split(",")
}

function getFrAddress(courthouse) {
  const breakpoint = courthouse.address_fr.lastIndexOf(",")
  return [courthouse.address_fr.slice(0, breakpoint), courthouse.address_fr.slice(breakpoint + 1)]
}

export default getAddressPieces
