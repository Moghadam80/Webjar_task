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

const PaginationData = ({ count, page, onChange, variant, color, shape }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Pagination
          dir="ltr"
          count={count}
          page={page}
          onChange={onChange}
          variant={variant}
          color={color}
          shape={shape}
        />
      </ThemeProvider>
    </>
  );
};

export default PaginationData

