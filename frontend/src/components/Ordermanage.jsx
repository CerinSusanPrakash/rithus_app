import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const Ordermanage = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  // Fetch orders on component mount
  useEffect(() => {
    axios
      .get('https://rithus-app-backend-r.onrender.com/getorders')
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Delete an order
  function del_Value(orderId) {
    axios
      .delete(`https://rithus-app-backend-r.onrender.com/deleteorder/${orderId}`)
      .then(() => {
        alert('Order Deleted');
        setData(data.filter((order) => order._id !== orderId)); // Update state without reloading
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Handle image click for zoom-in
  const handleImageClick = (imagePath) => {
    setCurrentImage(imagePath);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentImage('');
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="order details table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Product Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Address
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Phone Number
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Quantity
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                UPI Transaction ID
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Payment Image
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.productName || 'Unknown Product'} {/* Product Name */}
                </TableCell>
                <TableCell>{row.orderName}</TableCell>
                <TableCell align="right">{row.orderAddress}</TableCell>
                <TableCell align="right">{row.orderPhoneNumber}</TableCell>
                <TableCell align="right">{row.orderQuantity}</TableCell>
                <TableCell align="right">{row.upiTransactionId}</TableCell>
                <TableCell align="right">
                  {row.paymentImage ? (
                    <img
                      src={`https://rithus-app-backend-r.onrender.com/${row.paymentImage}`}
                      alt="Payment"
                      style={{
                        width: '100px',
                        height: 'auto',
                        cursor: 'pointer',
                        borderRadius: '5px',
                      }}
                      onClick={() =>
                        handleImageClick(`https://rithus-app-backend-r.onrender.com/${row.paymentImage}`)
                      }
                    />
                  ) : (
                    'No Image'
                  )}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: '#FFFDD0',
                      color: '#5B3A29',
                      '&:hover': { backgroundColor: '#f5e3a1' },
                    }}
                    onClick={() => del_Value(row._id)}
                  >
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog for zoom-in */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent>
          <img
            src={currentImage}
            alt="Zoomed Payment"
            style={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ordermanage;


// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button, Dialog, DialogContent } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';

// const Ordermanage = () => {
//   const [data, setData] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentImage, setCurrentImage] = useState('');

//   // Fetch orders on component mount
//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/getorders')
//       .then((res) => {
//         console.log(res);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   // Delete an order
//   function del_Value(orderId) {
//     axios
//       .delete(`http://localhost:4000/deleteorder/${orderId}`)
//       .then(() => {
//         alert('Order Deleted');
//         setData(data.filter((order) => order._id !== orderId)); // Update state without reloading
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   // Handle image click for zoom-in
//   const handleImageClick = (imagePath) => {
//     setCurrentImage(imagePath);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setCurrentImage('');
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="order details table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Address</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Phone Number</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Quantity</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">UPI Transaction ID</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Payment Image</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => (
//               <TableRow
//                 key={row._id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">{row.orderName}</TableCell>
//                 <TableCell align="right">{row.orderAddress}</TableCell>
//                 <TableCell align="right">{row.orderPhoneNumber}</TableCell>
//                 <TableCell align="right">{row.orderQuantity}</TableCell>
//                 <TableCell align="right">{row.upiTransactionId}</TableCell>
//                 <TableCell align="right">
//                   {row.paymentImage ? (
//                     <img
//                       src={`http://localhost:4000/${row.paymentImage}`}
//                       alt="Payment"
//                       style={{ width: '100px', height: 'auto', cursor: 'pointer', borderRadius: '5px' }}
//                       onClick={() => handleImageClick(`http://localhost:4000/${row.paymentImage}`)}
//                     />
//                   ) : (
//                     'No Image'
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button
//                     variant="contained"
//                     size="small"
//                     sx={{
//                       backgroundColor: '#FFFDD0',
//                       color: '#5B3A29',
//                       '&:hover': { backgroundColor: '#f5e3a1' },
//                     }}
//                     onClick={() => del_Value(row._id)}
//                   >
//                     <DeleteIcon />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Dialog for zoom-in */}
//       <Dialog open={open} onClose={handleClose} maxWidth="lg">
//         <DialogContent>
//           <img
//             src={currentImage}
//             alt="Zoomed Payment"
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default Ordermanage;


//woking

// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Button } from '@mui/material';
// import DeleteIcon from '@mui/icons-material/Delete';
// import axios from 'axios';

// const Ordermanage = () => {
//   const [data, setData] = useState([]);

//   // Fetch orders on component mount
//   useEffect(() => {
//     axios
//       .get('http://localhost:4000/getorders')
//       .then((res) => {
//         console.log(res);
//         setData(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   // Delete an order
//   function del_Value(orderId) {
//     axios
//       .delete(`http://localhost:4000/deleteorder/${orderId}`)
//       .then(() => {
//         alert('Order Deleted');
//         setData(data.filter((order) => order._id !== orderId)); // Update state without reloading
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table sx={{ minWidth: 650 }} aria-label="order details table">
//           <TableHead>
//             <TableRow>
//               <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Address</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Phone Number</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Quantity</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">UPI Transaction ID</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Payment Image</TableCell>
//               <TableCell sx={{ fontWeight: 'bold' }} align="right">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {data.map((row) => (
//               <TableRow
//                 key={row._id}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">{row.orderName}</TableCell>
//                 <TableCell align="right">{row.orderAddress}</TableCell>
//                 <TableCell align="right">{row.orderPhoneNumber}</TableCell>
//                 <TableCell align="right">{row.orderQuantity}</TableCell>
//                 <TableCell align="right">{row.upiTransactionId}</TableCell>
//                 <TableCell align="right">
//                   {row.paymentImage ? (
//                     <img
//                       src={`http://localhost:4000/${row.paymentImage}`}
//                       alt="Payment"
//                       style={{ width: '100px', height: 'auto', borderRadius: '5px' }}
//                     />
//                   ) : (
//                     'No Image'
//                   )}
//                 </TableCell>
//                 <TableCell align="right">
//                   <Button
//                     variant="contained"
//                     size="small"
//                     sx={{
//                       backgroundColor: '#FFFDD0',
//                       color: '#5B3A29',
//                       '&:hover': { backgroundColor: '#f5e3a1' },
//                     }}
//                     onClick={() => del_Value(row._id)}
//                   >
//                     <DeleteIcon />
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Ordermanage;


// before upi

// import React from 'react'
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { Button } from '@mui/material';

// // Delete button
// import DeleteIcon from '@mui/icons-material/Delete';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  

//   // const rows = [
//   //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   //   createData('Eclair', 262, 16.0, 24, 6.0),
//   //   createData('Cupcake', 305, 3.7, 67, 4.3),
//   //   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   // ];

// const Ordermanage = () => {
//   const [data,setdata]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:4000/getorders').then((res)=>{
//           console.log(res)
//           setdata(res.data)
//         }).catch((err)=>{
//           console.log(err)
//         })
//       },[])
//     function del_Value(e){
//         axios.delete('http://localhost:4000/deleteorder/'+e).then((res)=>{
//           alert('Order Deleted')
//           window.location.reload();
//         }).catch((err)=>{
//           console.log(err)
//         })
//         }
//   return (
//     <div>
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow >
//             <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
//             <TableCell sx={{ fontWeight: 'bold' }} align="right">Address</TableCell>
//             <TableCell sx={{ fontWeight: 'bold' }} align="right">Phone Number</TableCell>
//             <TableCell sx={{ fontWeight: 'bold' }} align="right">Quantity</TableCell>
//             {/* <TableCell sx={{ fontWeight: 'bold' }} align="right">OrdersDescription</TableCell> */}
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
              
//               <TableCell component="th" scope="row">
//                 {row.orderName}
//               </TableCell>
//               <TableCell align="right">{row.orderAddress}</TableCell>
//               <TableCell align="right">{row.orderPhoneNumber}</TableCell>
//               <TableCell align="right">{row.orderQuantity}</TableCell>
//               {/* <TableCell align="right">{row.orderDes}</TableCell> */}
//               <TableCell align="right">
//               <Button variant='contained' size="small" sx={{ backgroundColor: '#FFFDD0', color: '#5B3A29', '&:hover': { backgroundColor: '#f5e3a1' } }}  onClick={()=>{
//             del_Value(row._id)
//              }}>
//             <DeleteIcon />
//             </Button>
              
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//   )
// }

// export default Ordermanage

// // import * as React from 'react';
// // import PropTypes from 'prop-types';
// // import { alpha } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TablePagination from '@mui/material/TablePagination';
// // import TableRow from '@mui/material/TableRow';
// // import TableSortLabel from '@mui/material/TableSortLabel';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Paper from '@mui/material/Paper';
// // import Checkbox from '@mui/material/Checkbox';
// // import IconButton from '@mui/material/IconButton';
// // import Tooltip from '@mui/material/Tooltip';
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Switch from '@mui/material/Switch';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import FilterListIcon from '@mui/icons-material/FilterList';
// // import { visuallyHidden } from '@mui/utils';

// // // Create data for orders
// // function createData(orderId, customerName, orderDate, status, totalAmount) {
// //   return { orderId, customerName, orderDate, status, totalAmount };
// // }

// // // Example order data
// // const rows = [
// //   createData(1, 'John Doe', '2024-10-01', 'Shipped', 120.5),
// //   createData(2, 'Jane Smith', '2024-10-02', 'Processing', 85.0),
// //   createData(3, 'Robert Brown', '2024-10-03', 'Delivered', 99.99),
// //   createData(4, 'Lucy Lee', '2024-10-04', 'Shipped', 60.75),
// //   createData(5, 'David Green', '2024-10-05', 'Cancelled', 30.0),
// // ];

// // // Sorting logic
// // function descendingComparator(a, b, orderBy) {
// //   if (b[orderBy] < a[orderBy]) {
// //     return -1;
// //   }
// //   if (b[orderBy] > a[orderBy]) {
// //     return 1;
// //   }
// //   return 0;
// // }

// // function getComparator(order, orderBy) {
// //   return order === 'desc'
// //     ? (a, b) => descendingComparator(a, b, orderBy)
// //     : (a, b) => -descendingComparator(a, b, orderBy);
// // }

// // // Define columns
// // const headCells = [
// //   { id: 'customerName', numeric: false, disablePadding: true, label: 'Customer Name' },
// //   { id: 'orderDate', numeric: true, disablePadding: false, label: 'Order Date' },
// //   { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
// //   { id: 'totalAmount', numeric: true, disablePadding: false, label: 'Total Amount ($)' },
// // ];

// // function EnhancedTableHead(props) {
// //   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
// //   const createSortHandler = (property) => (event) => {
// //     onRequestSort(event, property);
// //   };

// //   return (
// //     <TableHead>
// //       <TableRow>
// //         <TableCell padding="checkbox">
// //           <Checkbox
// //             color="primary"
// //             indeterminate={numSelected > 0 && numSelected < rowCount}
// //             checked={rowCount > 0 && numSelected === rowCount}
// //             onChange={onSelectAllClick}
// //             inputProps={{ 'aria-label': 'select all orders' }}
// //           />
// //         </TableCell>
// //         {headCells.map((headCell) => (
// //           <TableCell
// //             key={headCell.id}
// //             align={headCell.numeric ? 'right' : 'left'}
// //             padding={headCell.disablePadding ? 'none' : 'normal'}
// //             sortDirection={orderBy === headCell.id ? order : false}
// //           >
// //             <TableSortLabel
// //               active={orderBy === headCell.id}
// //               direction={orderBy === headCell.id ? order : 'asc'}
// //               onClick={createSortHandler(headCell.id)}
// //             >
// //               {headCell.label}
// //               {orderBy === headCell.id ? (
// //                 <Box component="span" sx={visuallyHidden}>
// //                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
// //                 </Box>
// //               ) : null}
// //             </TableSortLabel>
// //           </TableCell>
// //         ))}
// //       </TableRow>
// //     </TableHead>
// //   );
// // }

// // EnhancedTableHead.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// //   onRequestSort: PropTypes.func.isRequired,
// //   onSelectAllClick: PropTypes.func.isRequired,
// //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
// //   orderBy: PropTypes.string.isRequired,
// //   rowCount: PropTypes.number.isRequired,
// // };

// // function EnhancedTableToolbar(props) {
// //   const { numSelected } = props;

// //   return (
// //     <Toolbar
// //       sx={[
// //         {
// //           pl: { sm: 2 },
// //           pr: { xs: 1, sm: 1 },
// //         },
// //         numSelected > 0 && {
// //           bgcolor: (theme) =>
// //             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
// //         },
// //       ]}
// //     >
// //       {numSelected > 0 ? (
// //         <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
// //           {numSelected} selected
// //         </Typography>
// //       ) : (
// //         <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
// //           Orders
// //         </Typography>
// //       )}

// //       {numSelected > 0 ? (
// //         <Tooltip title="Delete">
// //           <IconButton>
// //             <DeleteIcon />
// //           </IconButton>
// //         </Tooltip>
// //       ) : (
// //         <Tooltip title="Filter list">
// //           <IconButton>
// //             <FilterListIcon />
// //           </IconButton>
// //         </Tooltip>
// //       )}
// //     </Toolbar>
// //   );
// // }

// // EnhancedTableToolbar.propTypes = {
// //   numSelected: PropTypes.number.isRequired,
// // };

// // export default function Ordermanage() {
// //   const [order, setOrder] = React.useState('asc');
// //   const [orderBy, setOrderBy] = React.useState('orderDate');
// //   const [selected, setSelected] = React.useState([]);
// //   const [page, setPage] = React.useState(0);
// //   const [dense, setDense] = React.useState(false);
// //   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// //   const handleRequestSort = (event, property) => {
// //     const isAsc = orderBy === property && order === 'asc';
// //     setOrder(isAsc ? 'desc' : 'asc');
// //     setOrderBy(property);
// //   };

// //   const handleSelectAllClick = (event) => {
// //     if (event.target.checked) {
// //       const newSelected = rows.map((n) => n.orderId);
// //       setSelected(newSelected);
// //       return;
// //     }
// //     setSelected([]);
// //   };

// //   const handleClick = (event, orderId) => {
// //     const selectedIndex = selected.indexOf(orderId);
// //     let newSelected = [];

// //     if (selectedIndex === -1) {
// //       newSelected = newSelected.concat(selected, orderId);
// //     } else if (selectedIndex === 0) {
// //       newSelected = newSelected.concat(selected.slice(1));
// //     } else if (selectedIndex === selected.length - 1) {
// //       newSelected = newSelected.concat(selected.slice(0, -1));
// //     } else if (selectedIndex > 0) {
// //       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
// //     }

// //     setSelected(newSelected);
// //   };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const handleChangeDense = (event) => {
// //     setDense(event.target.checked);
// //   };

// //   // Avoid layout jump when reaching last page with empty rows.
// //   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

// //   const visibleRows = React.useMemo(
// //     () => [...rows].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
// //     [order, orderBy, page, rowsPerPage]
// //   );

// //   return (
// //     <Box sx={{ width: '100%' }}>
// //       <Paper sx={{ width: '100%', mb: 2 }}>
// //         <EnhancedTableToolbar numSelected={selected.length} />
// //         <TableContainer>
// //           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
// //             <EnhancedTableHead
// //               numSelected={selected.length}
// //               order={order}
// //               orderBy={orderBy}
// //               onSelectAllClick={handleSelectAllClick}
// //               onRequestSort={handleRequestSort}
// //               rowCount={rows.length}
// //             />
// //             <TableBody>
// //               {visibleRows.map((row, index) => {
// //                 const isItemSelected = selected.indexOf(row.orderId) !== -1;
// //                 const labelId = `enhanced-table-checkbox-${index}`;

// //                 return (
// //                   <TableRow
// //                     hover
// //                     onClick={(event) => handleClick(event, row.orderId)}
// //                     role="checkbox"
// //                     aria-checked={isItemSelected}
// //                     tabIndex={-1}
// //                     key={row.orderId}
// //                     selected={isItemSelected}
// //                   >
// //                     <TableCell padding="checkbox">
// //                       <Checkbox
// //                         color="primary"
// //                         checked={isItemSelected}
// //                         inputProps={{ 'aria-labelledby': labelId }}
// //                       />
// //                     </TableCell>
// //                     <TableCell component="th" id={labelId} scope="row" padding="none">
// //                       {row.customerName}
// //                     </TableCell>
// //                     <TableCell align="right">{row.orderDate}</TableCell>
// //                     <TableCell align="left">{row.status}</TableCell>
// //                     <TableCell align="right">{row.totalAmount}</TableCell>
// //                   </TableRow>
// //                 );
// //               })}
// //               {emptyRows > 0 && (
// //                 <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
// //                   <TableCell colSpan={6} />
// //                 </TableRow>
// //               )}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //         <TablePagination
// //           rowsPerPageOptions={[5, 10, 25]}
// //           component="div"
// //           count={rows.length}
// //           rowsPerPage={rowsPerPage}
// //           page={page}
// //           onPageChange={handleChangePage}
// //           onRowsPerPageChange={handleChangeRowsPerPage}
// //         />
// //       </Paper>
// //       {/* <FormControlLabel
// //         control={<Switch checked={dense} onChange={handleChangeDense} />}
// //         label="Dense padding"
// //       /> */}
// //     </Box>
// //   );
// // }

// import * as React from 'react';
// import axios from 'axios';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import Tooltip from '@mui/material/Tooltip';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { visuallyHidden } from '@mui/utils';

// // Sorting logic (unchanged)
// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc'
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// }

// const headCells = [
//   { id: 'customerName', numeric: false, disablePadding: true, label: 'Customer Name' },
//   { id: 'orderDate', numeric: true, disablePadding: false, label: 'Order Date' },
//   { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
//   { id: 'totalAmount', numeric: true, disablePadding: false, label: 'Total Amount ($)' },
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{ 'aria-label': 'select all orders' }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell
//             key={headCell.id}
//             align={headCell.numeric ? 'right' : 'left'}
//             padding={headCell.disablePadding ? 'none' : 'normal'}
//             sortDirection={orderBy === headCell.id ? order : false}
//           >
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={[
//         {
//           pl: { sm: 2 },
//           pr: { xs: 1, sm: 1 },
//         },
//         numSelected > 0 && {
//           bgcolor: (theme) =>
//             alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
//         },
//       ]}
//     >
//       {numSelected > 0 ? (
//         <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
//           Orders
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton>
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton>
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

// export default function Ordermanage() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('orderDate');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [dense, setDense] = React.useState(false);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [orders, setOrders] = React.useState([]);

//   // Fetch orders from the API
//   React.useEffect(() => {
//     axios.get('/api/orders')  // Assuming your backend API route is '/api/orders'
//       .then(response => {
//         setOrders(response.data);  // Set the orders from the backend
//       })
//       .catch(error => {
//         console.error('Error fetching the orders:', error);
//       });
//   }, []);

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = orders.map((n) => n.orderId);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, orderId) => {
//     const selectedIndex = selected.indexOf(orderId);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, orderId);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }

//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   // Avoid layout jump when reaching last page with empty rows.
//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orders.length) : 0;

//   const visibleRows = React.useMemo(
//     () => [...orders].sort(getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
//     [order, orderBy, page, rowsPerPage, orders]
//   );

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TableContainer>
//           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? 'small' : 'medium'}>
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={orders.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = selected.indexOf(row.orderId) !== -1;
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.orderId)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.orderId}
//                     selected={isItemSelected}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId,
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell component="th" id={labelId} scope="row" padding="none">
//                       {row.customerName}
//                     </TableCell>
//                     <TableCell align="right">{row.orderDate}</TableCell>
//                     <TableCell align="left">{row.status}</TableCell>
//                     <TableCell align="right">{row.totalAmount}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: (dense ? 33 : 53) * emptyRows,
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={orders.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//       <Box sx={{ textAlign: 'center' }}>
//         {/* <Tooltip title="Dense padding">
//           <Checkbox checked={dense} onChange={handleChangeDense} />
//         </Tooltip> */}
//       </Box>
//     </Box>
//   );
// }
