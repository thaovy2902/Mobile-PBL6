import React from 'react';
import {
  VStack,
  Input,
  Icon,
  Box,
  Divider,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const SearchTextBar = () => {
  return (
    <VStack
      space={5}
      width="60%"
      divider={
        <Box px="2">
          <Divider />
        </Box>
      }>
      <VStack width="100%" space={5}>
        <Input
          placeholder="search by name"
          type="date"
          variant="filled"
          width="100%"
          height={10}
          bg="gray.100"
          borderRadius="10"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          _hover={{ bg: 'gray.200', borderWidth: 0 }}
          borderWidth="0"
          _web={{
            _focus: { style: { boxShadow: 'none' } },
          }}
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </VStack>
    </VStack>
  )
}
