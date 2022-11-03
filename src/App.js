import React from 'react';
import { AppBar,Toolbar , IconButton , Typography } from '@material-ui/core';




export default function Todos() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color='inherit'>
                <img src="logo1.png" alt="Todos" style={
                  {width:"50px"}
                } />
          </IconButton>
          <Typography variant="h5">
            Todo's 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
