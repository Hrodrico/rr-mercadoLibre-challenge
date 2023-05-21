/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {type ChangeEvent, type MouseEvent, useState} from 'react';
// import {type ChangeEvent, type MouseEvent, useEffect, useState} from 'react';
// Hooks
import {useAppDispatch} from 'hooks/Hooks';
// import {useAppDispatch, useAppSelector} from 'hooks/Hooks';
// Mui
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
  IconButton,
  Box
} from '@mui/material';
import {useTheme} from '@mui/material/styles';
// Mui-Icon
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import {formatNumberToMoney} from 'utils/FormatFn';
// Rdux
// import {getAllUsers, selectUsers} from 'redux/Reducer/User/UserSlice';
// Interface
import {type ILabelDisplayedRows, type ITablePaginationActionsProps} from 'interface/Interface';
// Component
// import ModalUserEdit from './ModalUserEdit';
import shoppingList from 'mocks/compras.json';
// Css
import styles from './Shopping.module.css';
import {transDateToDDMMYYYYY} from 'utils/DateFn';

function ShoppingTable(): JSX.Element {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const {listAllUser: USERS}: any = useAppSelector(selectUsers);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, [dispatch]);

  function TablePaginationActions(props: ITablePaginationActionsProps): JSX.Element {
    const theme = useTheme();
    const {count, page, rowsPerPage, onPageChange} = props;

    const handleFirstPageButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
      onPageChange(event, 0);
    };

    const handleBackButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
      const _page: number = Number(page) ?? 0;
      onPageChange(event, _page - 1);
    };

    const handleNextButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
      const _page: number = Number(page) ?? 0;
      onPageChange(event, _page + 1);
    };

    const handleLastPageButtonClick = (event: MouseEvent<HTMLButtonElement>): void => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
      <React.Fragment>
        <Box sx={{flexShrink: 0, ml: 2.5}}>
          <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page">
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page">
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </Box>
      </React.Fragment>
    );
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - shoppingList.length) : 0;

  const handleChangePage = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={styles.content}>
      <Box className={styles.toolbar}>
        <Typography variant="h6" component="h2" color="textSecondary">
          Mis Compras
        </Typography>
      </Box>
      <TableContainer component={Paper} className={styles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className={styles.tableHeaderCell}>Id Compra</TableCell>
              <TableCell className={styles.tableHeaderCell}>Título Item</TableCell>
              <TableCell className={styles.tableHeaderCellCenter}>Precio</TableCell>
              <TableCell className={styles.tableHeaderCell}>Cantidad</TableCell>
              <TableCell className={styles.tableHeaderCellCenter}>Fecha Compra</TableCell>
              <TableCell className={styles.tableHeaderCellCenter}>Ver Detalle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0 ? shoppingList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : shoppingList).map(
              (row: any) => (
                <TableRow key={row.purchase_id}>
                  {/* <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar alt={`${row.firstNameUser} ${row.lastNameUser}`} src={row.avatar} className={styles.avatar} />
                      </Grid>
                      <Grid item lg={10}>
                        <Typography className={styles.name}>{`${row.firstNameUser} ${row.lastNameUser}`}</Typography>
                        <Typography color="textSecondary" variant="body2">
                          {row.mailUser}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell> */}
                  {/* <TableCell>
                    <Typography color="primary" variant="subtitle2">
                      {row.displayNameUser}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {`${row.firstNameUser} ${row.lastNameUser}`}
                    </Typography>
                  </TableCell>
                  <TableCell> */}
                  <TableCell>
                    <Typography color="textSecondary" variant="subtitle2">
                      {row.purchase_id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Grid container>
                      <Grid item lg={2}>
                        <Avatar alt={row.purchase_id} src={row.image} className={styles.avatar} />
                      </Grid>
                      <Grid item lg={10}>
                        <Typography color="textSecondary" variant="body2">
                          {row.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={styles.tableCellLeft}>
                    <Typography color="textSecondary" variant="body2">
                      {formatNumberToMoney(row.cost.total, row.cost.currency)}
                    </Typography>
                  </TableCell>
                  <TableCell className={styles.tableCellLeft}>
                    <Typography color="textSecondary" variant="body2">
                      {row.amount}
                    </Typography>
                  </TableCell>
                  <TableCell className={styles.tableCellCenter}>
                    <Typography color="textSecondary" variant="body2">
                      {transDateToDDMMYYYYY(row.date)}
                    </Typography>
                  </TableCell>
                  <TableCell className={styles.tableCellCenter}>
                    {/* <ModalUserEdit element={row} /> */}
                    <br />
                  </TableCell>
                </TableRow>
              )
            )}
            {emptyRows > 0 && (
              <TableRow style={{height: 53 * emptyRows}}>
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, {label: 'Todos', value: -1}]}
                labelRowsPerPage={'Filas por página:'}
                labelDisplayedRows={({from, to, count}) => `${from}-${to ?? 0} de ${count !== -1 ? count ?? 0 : `más que ${to}`}`}
                colSpan={5}
                count={shoppingList.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default ShoppingTable;
