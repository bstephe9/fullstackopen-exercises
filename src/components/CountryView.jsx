const CountryView = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      {country.capital && (
        <div>Capital {country.capital[0]}</div>
      )}
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
}

export default CountryView