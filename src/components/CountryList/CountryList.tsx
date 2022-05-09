import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAllCountries } from '../../redux/actions'
import { AppState } from '../../types/index'
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
            countries &&
            countries.map((country) => <CountryCard {...country} />)}
        </div>
      </div>
    </div>
  )
}

export default CountryList
