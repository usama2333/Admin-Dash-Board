import React, { Fragment } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Fragment>
      <Box mb="30px">
        <Typography
          variant="h2"
          color={colors.grey[100]}
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          {title}
        </Typography>

        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Header;
