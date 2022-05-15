import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addCountryToCart } from '../redux/actions'
import { AppState } from '../redux/Reducers'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 1000,
  },
}))

const columns = ['flag', 'name', 'population', 'region']

const CountryTable = ({ countries }: any) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const itemState = useSelector((state: AppState) => state.cartReducer.cart)

  const [paginatedCountries, setPaginatedCountries] = useState([])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    setPaginatedCountries(
      countries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    )
  }, [dispatch, countries, page, rowsPerPage])

  return (
    <>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table>
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    align="center"
                    style={{ minWidth: 170 }}
                    key={index}
                  >
                    {column.toUpperCase()}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedCountries.map(
                (country: any, index: React.Key | null | undefined) => (
                  <TableRow key={index}>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      <img
                        src={country.flags.svg}
                        alt="country flag"
                        style={{ width: '150px' }}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      <Link
                        to={`/${country.name.common}`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        {country.name.common}
                      </Link>
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {country.population}
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {country.region}
                    </TableCell>

                    <TableCell align="center" style={{ minWidth: 170 }}>
                      {itemState.find(
                        (item: { name: any }) =>
                          item.name.common === country.name.common
                      ) ? (
                          <Button variant="contained" disabled>
                          Add
                          </Button>
                        ) : (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => dispatch(addCountryToCart(country))}
                          >
                          Add
                          </Button>
                        )}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={3}
                  count={countries.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
export default CountryTable
