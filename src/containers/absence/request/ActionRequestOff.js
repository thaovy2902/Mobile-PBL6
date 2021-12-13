import React, { useState, useEffect } from 'react';

import axiosConfig from '../../../core/axiosConfig';

import { Button, FormControl, Modal, TextArea, Text } from 'native-base';

export const ActionRequestOff = ({
  isOpenModal,
  closeModal,
  action,
  id,
  handleIsRefresh,
}) => {
  const [newData, setNewData] = useState({
    action: action,
    request_off_id: id,
    comment: null,
  });
  const [hasError, setHasError] = useState(false);

  const onSubmit = () => {
    (async () => {
      try {
        if (action === 'Approved') {
          const response = await axiosConfig.post(
            'workday/request/management',
            newData
          );
        } else {
          const response = await axiosConfig.post(
            'workday/request/management',
            newData
          );
        }
        handleIsRefresh();
        setNewData({ ...newData, comment: null });
        closeModal();
      } catch (error) {
        setHasError(true);
        closeModal();
      }
    })();
  };

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={closeModal}>
        <Modal.Content maxWidth='500px'>
          <Modal.CloseButton />
          <Modal.Header>
            <Text style={{ fontWeight: 'bold' }}>
              {action === 'Approved' ? 'Approve' : 'Reject'} Request Off
            </Text>
          </Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label _text={{ bold: true }}>
                Comment
              </FormControl.Label>
              <TextArea
                value={newData?.comment}
                onChangeText={(value) =>
                  setNewData({ ...newData, comment: value })
                }
              />
            </FormControl>
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
              <Button onPress={onSubmit}>Confirm</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
