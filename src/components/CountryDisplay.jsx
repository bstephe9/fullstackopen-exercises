import CountryView from "./CountryView"

const CountryDisplay = ({ countries, selectedCountry, handleCountrySelection }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 0) {
    return <p>No countries found</p>
  } else if (countries.length == 1 || selectedCountry) {
    const countryToShow = selectedCountry || countries[0]
    return <CountryView country={countryToShow}></CountryView>
  }

  // Display all queried countries otherwise
  return (
    <div>
      <ul>
        {countries.map(country =>
          <li key={country.cca2}>{country.name.common}
            <button
              style={{ 'marginLeft': '8px' }}
              onClick={() => handleCountrySelection(country)}
            >Show
            </button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CountryDisplay