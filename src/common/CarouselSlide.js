import React from "react";
import Box from "@mui/material/Box";

/**
 *
 * @param {CarouselSlideProps} props
 */
export function CarouselSlide(props) {
  const { ...rest } = props;
  return <Box flex="1 0 100%" overflow="hidden" {...rest} />;
}

export default CarouselSlide;

/**
 * @typedef {{} & import("@material-ui/core").BoxProps} CarouselSlideProps
 */
