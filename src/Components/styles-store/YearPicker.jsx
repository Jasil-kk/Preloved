import React from 'react'
import TextField from '@mui/material/TextField';

const YearPicker = () => {
  return (
    <div className='mt-8'>
        <TextField sx={{ width: 400 }} type="number" id="outlined-basic" label="Year *" variant="outlined" />
    </div>
  )
}

export default YearPicker