// components/Header.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Menu, IconButton, Dialog, Portal, TextInput, Button } from 'react-native-paper';
import { Colors_Profile } from '../../constant/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/parentSlice';
import { selectDetails } from '../../redux/parentSlice';


const Top_Header = ({ screen_info }) => {
  const dispatch =useDispatch()
  
  const { data: userData } = useSelector(selectDetails);

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);
  const [passwordDialogVisible, setPasswordDialogVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error,setError] =useState('')
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const openPasswordDialog = () => {
    setPasswordDialogVisible(true);
    closeMenu();
  };

  const closePasswordDialog = () => {
    setPasswordDialogVisible(false);
    setError('')
  }

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      navigation.navigate('Login'); // Navigate back to the login screen
    } catch (error) {
      console.error('Error logging out: ', error);
    }
    closeMenu();
  };

  const handleChangePassword = async () => {
    try {
      // Check if userData exists and has a valid _id
      if (userData && userData._id) {
        const id = userData._id;
        
        const action=await dispatch(changePassword({ id: id, oldPassword: currentPassword, newPassword: newPassword }));
        if(action.type =="details/changePassword/fulfilled"){
          if(action.payload.error){
        
            setError(action.payload.error)
          }
          else{
            Alert.alert('Password Change Made Successfully')
            closePasswordDialog();
          }
        }

        
        
        // Reset current password and new password after successful update
        setCurrentPassword('');
        setNewPassword('');
      } else {
        console.error('User data is missing or invalid');
      }
    } catch (error) {
      // Handle any errors
      console.error('Error updating password:', error);
      // Optionally, set error state to display error message to the user
    }
  };
  

  return (

      <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Amit</Text>
        <Text style={styles.subtitle}>{screen_info}</Text>
      </View>
      <Menu
      style={{marginVertical:25,width:'90%'}}
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
        <Menu.Item title={`Hello, ${userData?.username}`} disabled />
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
            <Text style={{color:'red'}}>{error}</Text>
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
