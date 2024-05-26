// components/Header.js
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Menu, IconButton, Dialog, Portal, TextInput, Button } from 'react-native-paper';
import { Colors_Profile } from '../../constant/Colors';

const Top_Header = ({ screen_info }) => {
  const [visible, setVisible] = useState(false);
  const [passwordDialogVisible, setPasswordDialogVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const openPasswordDialog = () => {
    setPasswordDialogVisible(true);
    closeMenu();
  };
  
  const closePasswordDialog = () => setPasswordDialogVisible(false);

  const handleLogout = () => {
    // Placeholder for logout logic
    closeMenu();
  };

  const handleChangePassword = async () => {
    // Placeholder for change password logic
    closePasswordDialog();
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Amit</Text>
        <Text style={styles.subtitle}>{screen_info}</Text>
      </View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <IconButton
            icon="account-settings"
            color={Colors_Profile.background}
            size={40}
            onPress={openMenu}
          />
        }
      >
        <Menu.Item onPress={openPasswordDialog} title="Change Password" />
        <Menu.Item onPress={handleLogout} title="Logout" />
      </Menu>
      <Portal>
        <Dialog visible={passwordDialogVisible} onDismiss={closePasswordDialog}>
          <Dialog.Title>Change Password</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Current Password"
              secureTextEntry
              value={currentPassword}
              onChangeText={setCurrentPassword}
              style={styles.input}
            />
            <TextInput
              label="New Password"
              secureTextEntry
              value={newPassword}
              onChangeText={setNewPassword}
              style={styles.input}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closePasswordDialog}>Cancel</Button>
            <Button onPress={handleChangePassword}>Change</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: Colors_Profile.Primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'poppins_r',
    color: Colors_Profile.text,
    fontSize: 24,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'poppins_m',
    color: Colors_Profile.text,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  input: {
    marginBottom: 10,
  },
});

export default Top_Header;
