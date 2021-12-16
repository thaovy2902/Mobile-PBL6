import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Button, Modal, NativeBaseProvider } from 'native-base';
import { SpeedDial } from 'react-native-elements';
import styles from '../styles/MainMenu';
import { logOut } from '../redux/actions/authAction';

export const MainMenu = ({ navigation }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={require('../assets/logo_white.png')}
          />
          <Text style={styles.full}>FULL HOPE</Text>
          <Text style={styles.slogan}>Try hard with more hope!</Text>
        </View>
        <View style={styles.frame}>
          <View style={styles.frameBtn}>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemMR]}
              onPress={() => navigation.navigate('Employee')}
            >
              <Text style={styles.menuItemText}>Employee Management</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemML]}
              onPress={() => navigation.navigate('CompanyCalendar')}
            >
              <Text style={styles.menuItemText}>Company Calendar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.frameBtn}>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemMR]}
              onPress={() => setShowModal(true)}
            >
              <Text style={styles.menuItemText}>Absence Management</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.menuItem, styles.menuItemML]}
              onPress={() => navigation.navigate('Lunch')}
            >
              <Text style={styles.menuItemText}>Lunch Management</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={styles.frameSetting}>
          <TouchableOpacity>
            <Image
              style={styles.imgIcon}
              resizeMode={'contain'}
              source={require('../assets/icon_settings.png')}
            />
          </TouchableOpacity>
        </View> */}
        <SpeedDial
          isOpen={open}
          icon={{ name: 'settings', color: '#4da4e0' }}
          openIcon={{ name: 'close', color: '#4da4e0' }}
          onOpen={() => setOpen(!open)}
          onClose={() => setOpen(!open)}
          color='#ffffff'
        >
          <SpeedDial.Action
            color='#ffffff'
            icon={{ name: 'logout', color: '#4da4e0' }}
            title='Logout'
            onPress={() => {
              navigation.navigate('Login');
              dispatch(logOut());
            }}
          />
          <SpeedDial.Action
            color='#ffffff'
            icon={{ name: 'edit', color: '#4da4e0' }}
            title='Profile'
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </SpeedDial>
      </View>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth='400px'>
          <Modal.CloseButton />
          <Modal.Header>Choose</Modal.Header>
          <Modal.Body>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Request')}
            >
              <Text style={styles.subMenuItemText}>Request Management</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.subMenuItem}
              onPress={() => navigation.navigate('Leave')}
            >
              <Text style={styles.subMenuItemText}>Leave Management</Text>
            </TouchableOpacity>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant='ghost'
                colorScheme='blueGray'
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
};
