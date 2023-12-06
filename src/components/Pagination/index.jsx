import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import { lime, purple, green } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: lime,
      secondary: green,
    },
  });

const PaginationData = () => {
    
  return (
    <>
    <ThemeProvider theme={theme}>
          <Pagination dir='ltr' count={2} variant="outlined" color='secondary' shape="rounded" />
    </ThemeProvider>
    </>
  )
}

export default PaginationData

