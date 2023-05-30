import { Box } from '@mui/material'
import React, { Fragment } from 'react'
import Header from '../../components/Header'

const Dashboard = () => {
  return (
    <Fragment>
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header title="dashboard"  subtitle="Welcome to your dashboard" />

      </Box>
    </Box>
      
    </Fragment>
  )
}

export default Dashboard
