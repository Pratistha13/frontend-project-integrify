import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

import './countrycard.scss'

type CountryCardProps = {
  flag: string
  name: string
  region: string
}

const CountryCard = ({ flag, name, region }: CountryCardProps) => {
  return (
    <div className="country-card">
      <div className="country-card__wrapper">
        <Link to={`/country/${name}`}>
          <img src={flag} alt={name} />

          <h2 className="country-card__name"> {name} </h2>
          <h2 className="country-card__continent"> {region} </h2>
        </Link>

        <div className="country-card__action">
          <Button className="btn btn__primary" color="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CountryCard
