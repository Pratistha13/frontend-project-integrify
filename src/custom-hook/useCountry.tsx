import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../redux/actions'
import { AppState } from '../redux/Reducers'

const useCountry = () => {
  const dispatch = useDispatch()
  const countryData = useSelector(
    (state: AppState) => state.countryReducer.countries
  )
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])
  return countryData
}

export default useCountry
