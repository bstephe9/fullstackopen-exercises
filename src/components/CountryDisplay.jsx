const CountryDisplay = ({ countries }) => {
  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map(country => <li key={country.cca2}>{country.name.common}</li>)}
      </ul>
    )
  } else if (countries.length == 1) {
    const country = countries[0]

    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital[0]}</div>
        <div>Area {country.area}</div>
        <h2>Languages</h2>
        <ul>
          {Object.entries(country.languages).map(([code, name]) => (
            <li key={code}>
              {name}
            </li>
          ))}
        </ul>
        <img src={country.flags.png} title={country.flags.alt}></img>
      </div>
    )
  } else {
    return <div>No countries found</div>
  }

}

export default CountryDisplay