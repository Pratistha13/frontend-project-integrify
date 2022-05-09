import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllCountries } from '../../redux/actions'
import { AppState } from '../../redux/reducers'
import { Country } from '../../types'
import CountryCard from '../CountryCard/CountryCard'
import './countrylist.scss'

const CountryList = () => {
  //get all countries from redux state
  const countries = useSelector(
    (state: AppState) => state.countryReducer.countries
  )

  const isLoading = useSelector(
    (state: AppState) => state.countryReducer.isLoading
  )

  //initialize dispatch
  const dispatch = useDispatch()

  //dispatch fetchAllCountries when page loads
  React.useEffect(() => {
    dispatch(fetchAllCountries())
  }, [dispatch])

  return (
    <div className="country-list">
      <div className="country-list__cards">
        <div>
          {isLoading && <h2>Loading...</h2>}

          {!isLoading &&
            countries.length > 0 &&
            countries.map((country: Country) => (
              <CountryCard
                flag={country.flags}
                name={country.name.common}
                region={country.region}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CountryList

/* import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "../../components/CountryCard/CountryCard";
import { AppState } from "../../redux/reducers";
import Country from "../../pages/Country/Country";


const CountryList = () => {
  
  const {error, isLoading} = useSelector((state:AppState)=> state.countryReducer)

  console.log(Country.name)
  return (
    <>
      <div>
        {error && <p>{error}</p>}
        {!isLoading && Country.length === 0 && (
          <p>No Countries found</p>
        )}
        {isLoading && <p>Loading Data</p>}
        <CountryCard name={Country.name} flag={""} region={""} />
      </div>
    </>
  );
};

export default CountryList; */
