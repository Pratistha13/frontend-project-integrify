/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import {
  Card,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { removeCountryfromCart } from '../redux/actions'
import { AppState } from '../redux/Reducers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 90,
      textAlign: 'center',
      width: '100%',
    },

    sideBar: {
      width: '300px',
      textAlign: 'center',
    },
  })
)

type CountryProps = {
  name: {
    common: string
  }
  flags: {
    svg: string
  }
}

const Countrycart = () => {
  const classes = useStyles()
  const cartState = useSelector((state: AppState) => state.cartReducer.cart)
  const dispatch = useDispatch()

  return (
    <Grid container className={classes.sideBar} justifyContent="center">
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: 'center', display: 'inline-block' }}
      >
        {cartState.length === 0 && <p> No Items in Cart </p>}
      </Typography>
      {cartState.map(
        (item: CountryProps, index: React.Key | null | undefined) => (
          <Card className={classes.root} key={index}>
            <CardContent>
              <img src={item.flags.svg} style={{ width: '80px' }} alt="flags" />

              <Typography variant="h5" color="textSecondary">
                {item.name.common}
              </Typography>
              <DeleteIcon
                onClick={() => dispatch(removeCountryfromCart(item))}
                cursor="pointer"
              />
            </CardContent>
          </Card>
        )
      )}
    </Grid>
  )
}

export default Countrycart
