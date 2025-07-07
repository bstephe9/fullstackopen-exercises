import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LabeledInput from './components/LabeledInput'
import CountryDisplay from './components/CountryDisplay'

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const countryList = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      setCountries(countryList.data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    setSelectedCountry(null)
  }, [query])

  const countriesToShow = (query === "") ? [] : countries.filter(
    country => country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <LabeledInput text="find countries" value={query} setValue={setQuery} />
      <CountryDisplay
        countries={countriesToShow}
        selectedCountry={selectedCountry}
        handleCountrySelection={(country) => setSelectedCountry(country)}
      />
    </>
  )
}

export default App
