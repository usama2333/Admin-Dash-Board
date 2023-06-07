import { Box } from '@mui/material'
import React from 'react'
import { Fragment } from 'react'
import Header from '../../components/Header'
import BarChart from '../../components/BarChart'

const Bar = () => {
  return (
    <Fragment>
    <Box m='20px'>

     <Header title='BAR CHART' subtitle="Simple Bar chart"/>
     <Box height='75vh'>
        <BarChart/>
     </Box>

    </Box>
      
    </Fragment>
  )
}

export default Bar
