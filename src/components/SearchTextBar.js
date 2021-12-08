import React from 'react';

import { VStack, Input, Icon, Box, Divider } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const SearchTextBar = () => {
  return (
    <VStack
      space={5}
      width='60%'
      divider={
        <Box px='2'>
          <Divider />
        </Box>
      }
    >
      <VStack width='100%' space={5}>
        <Input
          placeholder='search by name'
          type='date'
          variant='filled'
          width='100%'
          size='lg'
          height={10}
          bg='#fff'
          borderRadius='4'
          py='1'
          px='2'
          borderColor='gray.300'
          _hover={{ borderColor: 'gray.500' }}
          InputLeftElement={
            <Icon
              ml='2'
              size='5'
              color='gray.500'
              as={<Ionicons name='ios-search' />}
            />
          }
        />
      </VStack>
    </VStack>
  );
};
