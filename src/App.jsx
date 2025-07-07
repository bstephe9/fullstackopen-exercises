import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LabeledInput from './components/LabeledInput'
import CountryDisplay from './components/CountryDisplay'

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    async function fetchData() {
      const countryList = await axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      setCountries(countryList.data)
      console.log(countryList.data.slice(0, 3))
    }
    fetchData()
  }, [])

  const countriesToShow = (query === "") ? [] : countries.filter(
    country => country.name.common.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <LabeledInput text="find countries" value={query} setValue={setQuery} />
      <CountryDisplay countries={countriesToShow}></CountryDisplay>
    </>
  )
}

export default App
