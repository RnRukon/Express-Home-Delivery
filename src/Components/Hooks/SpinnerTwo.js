import React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
const SpinnerTwo = () => {
    return (
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
        </Stack>
    );
}





export default SpinnerTwo;