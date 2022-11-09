import React from 'react'
import { Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import { SearchBar } from './'

const Navbar = () =>
  (
    <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{position: 'sticky', background: '#000', top: '0', justifyContent: 'space-between'}}
    >
        <Link to="/" style={{display: 'flex', alignItems:'center', color:'white'}}>
            <img 
                src={logo} 
                alt="logo" 
                height={55}
            />
            <Typography variant='h4' display={{ xs: 'none', md: 'block' }}>
                UTube
            </Typography>
            
        </Link>
        <SearchBar />

    </Stack>
  )

export default Navbar