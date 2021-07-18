import { Box, Menu, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';

export interface IMenuProps {
  children: JSX.Element | JSX.Element[];
}

export default function AppLayout({ children }: IMenuProps) {
  return (
    <Box d="flex" maxW="xl">
      <Box maxW="300px">
        <Menu>
          <MenuList>
            <MenuItem>Пункт 1</MenuItem>
            <MenuItem>Пункт 2</MenuItem>
            <MenuItem>Пункт 3</MenuItem>
            <MenuItem>Пункт 4</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box d="flex" p="6">
        {children}
      </Box>
    </Box>
  );
}
