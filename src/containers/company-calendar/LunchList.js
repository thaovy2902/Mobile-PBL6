import React from 'react';

import { View, Text } from 'react-native';
import { Button, Modal } from 'native-base';

export const LunchList = ({ isOpenModal, closeModal, listItem, isVeggie }) => {
  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal} size='xl'>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>
            {isVeggie
              ? `Veggie Lunch : ${listItem.length}`
              : `Lunch : ${listItem.length}`}
          </Modal.Header>
          <Modal.Body>
            <View>
              {listItem?.map((item, index) => (
                <Text
                  style={{
                    color: '#4da4e0',
                    marginLeft: 20,
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                >{`${index + 1} - ${item.profile.name}`}</Text>
              ))}
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={closeModal}
              >
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
