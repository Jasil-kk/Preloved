import React from 'react'
import TextField from '@mui/material/TextField';


const DescriptionAd = () => {
  return (
    <div className='mt-8'>
           <TextField
          id="outlined-multiline-static"
          label="Description *"
          multiline
          rows={4}
          sx={{ width: 400 }}
          helperText="Include condition, features and reason for selling"
        />
    </div>
  )
}

export default DescriptionAd