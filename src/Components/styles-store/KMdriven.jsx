import React from 'react'
import TextField from '@mui/material/TextField';


const KMdriven = () => {
  return (
    <div className='mt-8'>
        <TextField sx={{ width: 400 }} type="number" id="outlined-basic" label="KM driven *" variant="outlined" />
        
    </div>
  )
}

export default KMdriven