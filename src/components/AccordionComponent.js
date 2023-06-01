
import React, { Fragment } from 'react';
import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { tokens } from "../../theme";
import { tokens } from '../theme';

const AccordionComponent = ({question , text}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
  return (
    <Fragment>

<Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </Fragment>
  )
}

export default AccordionComponent
