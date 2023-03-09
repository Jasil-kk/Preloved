import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const SetPrice = () => {
  return (
    <div className='p-5'>
        <h2 className='text-2xl font-semibold text-slate-800'>SET A PRICE</h2>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
        </FormControl>
    </div>
  )
}

export default SetPrice