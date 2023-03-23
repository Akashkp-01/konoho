import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
             
            </IconButton>
            <Typography align='left'variant='h4' component="div" sx={{ flexGrow: 1 }}>
            <Link to='/' style={{color:'white', textDecoration:'none'}}>
          Movies</Link></Typography>
            
          
            <Button color="inherit">
            <Link to='/addmovie' style={{color:'white', textDecoration:'none'}}>ADD</Link>
            </Button>
        
            <Button color="inherit"> 
            <Link to='/read' style={{color:'white', textDecoration:'none'}}>VIEW</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      )
    }

export default Nav
