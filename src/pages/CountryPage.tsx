import * as React from 'react'
import {
  Button,
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { useHistory, useParams } from 'react-router'

import useCountry from '../custom-hook/useCountry'
import { Country } from '../types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 90,
      textAlign: 'center',
      width: '30%',
      minWidth: 345,
    },

    button: {
      marginTop: '20',
      marginLeft: '250',
    },
  })
)
type Params = {
  countryName: string
}

const CountryPage = () => {
  const classes = useStyles()
  const history = useHistory()
  const { countryName } = useParams<Params>()

  const countryData = useCountry()

  const details = (countryData as Country[] | Country | any).find(
    (c: { name: { common: string } }) => c.name.common === countryName
  )
  return (
    <>
      {countryData.length !== 0 && details && (
        <>
          <Grid container justifyContent="center">
            <Card className={classes.root}>
              <img
                src={details.flags.svg}
                style={{ width: '345px' }}
                alt="flags"
              />
              <CardContent>
                <Typography variant="h4" component="h2">
                  {details.name.common}
                </Typography>
                <br></br>
                <Typography>
                  When you visit us you can spend on:{' '}
                  {Object.keys(details.currencies).join(',')}
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Borders of {details.name.common}:{' '}
                  {details.borders && details.borders.join(',')}
                  {!details.borders && <p>No borders found for this country</p>}
                </Typography>
                <br></br>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="span"
                >
                  Languages spoken here:{' '}
                  {Object.values(details.languages).join(',')}
                </Typography>
                <p></p>
                <p></p>
                <Button
                  variant="contained"
                  onClick={() => history.push('/')}
                  color="primary"
                  className={classes.button}
                >
                  Back
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </>
      )}
    </>
  )
}

export default CountryPage
