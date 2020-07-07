const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})[ ]?(x\d+)?$/

function getPhoneNumbers(input) {
  if (!input) return null

  if (input.indexOf(",") > -1) {
    return input
      .split(",")
      .map(num => {
        num = num.trim()
        return phoneRegex.test(num) ? num : null
      })
      .filter(num => num != null)
  } else {
    return phoneRegex.test(input) ? input.trim() : null
  }
}

export default getPhoneNumbers
