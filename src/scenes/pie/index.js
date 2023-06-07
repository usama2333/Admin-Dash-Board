import { Box } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
    <Fragment>
    <Box m='20px'>

     <Header title='PIE CHART' subtitle="Simple Pie chart"/>
     <Box height='75vh'>
       <PieChart/>
     </Box>

    </Box>
      
    </Fragment>
  )
}

export default Pie
