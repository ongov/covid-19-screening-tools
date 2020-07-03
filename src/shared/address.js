function getAddressPieces(courthouse) {
  // This is required because we want this to run on the UI side.
  // We add a check for Gatsby to skip this during build.
  if (!courthouse) return {}

  const [address, cityAndPostalCode] = courthouse.address.split(",")
  const [city, postalCode] = cityAndPostalCode.split(" ON ")
  return { address, city, postalCode }
}

export default getAddressPieces
