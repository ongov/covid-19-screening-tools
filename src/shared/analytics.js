export default searchData => {
  if (window && window.dataLayer) {
    window.dataLayer.push({
      event: "covid-19-ac-location-search",
      searchData,
    })
  }
}
