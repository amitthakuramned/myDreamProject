import React from "react";
import {
  Menu,
  HamburgerIcon,
  Box,
  Pressable,
  Center,
  NativeBaseProvider,
} from "native-base";

export default function MenuBar(props: any) {
  const { options } = props;

  return (
    <Box w="90%" alignItems="center">
      <Menu
        w="190"
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon />
            </Pressable>
          );
        }}
      >
        {options}
      </Menu>
    </Box>
  );
}
