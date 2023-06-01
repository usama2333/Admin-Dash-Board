import React, { Fragment } from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import AccordianComponent from "../../components/AccordionComponent";

const data = [
  {
    question: "An Important Question",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Another Important Question",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Your Favorite Question",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "Some Random Question",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    question: "The Final Question",
    text: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const Faq = () => {
  return (
    <Fragment>
      <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions About" />

        {data.map((data) => (
          <AccordianComponent question={data.question} text={data.text} />
        ))}
        
      </Box>
    </Fragment>
  );
};

export default Faq;
