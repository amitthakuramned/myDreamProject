import React, { useEffect } from "react";
import { VStack, Box, Divider } from "native-base";
import { homeStyles } from "../../screens/styling/homeStyle";

export const Card = (props: any) => {
  const { tilte, content, footer,boxStyle } = props;

  return (
    <Box style={boxStyle} borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <Box px="4" pt="4">
          {tilte}
        </Box>
        <Box px="4">{content}</Box>
        <Box px="4" pb="4">
          {footer}
        </Box>
      </VStack>
    </Box>
  );
};
