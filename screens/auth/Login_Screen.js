import { View, Text, StyleSheet, Dimensions, TextInput, Pressable, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors_Profile } from '../../constant/Colors';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window');

const Login_Screen = () => {
  const navigation=useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setUsertype] = useState('admin');
 
  const handleAdminLogin = async() => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/login', {
        email,
        password
      });
      console.log(response.data)
      
      await AsyncStorage.setItem('userId', response.data.user._id); 
   
      navigation.navigate('Parent')
      // Navigate to the admin dashboard or perform any other actions
    } catch (error) {
      Alert.alert('Login failed', error.message);
    }
  };

  const handleChildLogin = () => {
    // Add your child login logic here
    Alert.alert('Child login', `Email: ${email}, Password: ${password}`);
  };

  const handleLogin = () => {
    if (usertype === 'admin') {
      handleAdminLogin();
    } else {
      handleChildLogin();
    }
  };

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: Colors_Profile.background, height: height }}>
        <Text style={styles.head_text}>Tracer App</Text>
        <Image style={styles.head_img} source={require('../../assets/user_photo.png')} />
        <View style={styles.container}>
          <Text style={[styles.head_text2, { alignSelf: 'flex-start' }]}>Welcome</Text>
          <TextInput
            value={email}
            placeholder='Email'
            style={styles.text_input}
            onChangeText={newText => setEmail(newText)}
          />
          <TextInput
            value={password}
            placeholder='Password'
            style={styles.text_input}
            secureTextEntry={true}
            onChangeText={newText => setPassword(newText)}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={usertype}
              onValueChange={(itemValue) => setUsertype(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label='Admin' value='admin' />
              <Picker.Item label='Child' value='user' />
            </Picker>
          </View>
          <Pressable style={styles.btn} onPress={handleLogin}>
            <Text style={styles.btnText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  head_text: {
    textAlign: 'center',
    fontSize: 32,
    color: '#AC1B61',
    marginVertical: 10,
    fontFamily: 'poppins_r',
  },
  head_text2: {
    padding: 5,
    fontSize: 16,
    fontFamily: 'poppins_r',
    color: Colors_Profile.Primary,
  },
  text_input: {
    backgroundColor: Colors_Profile.text,
    fontFamily: 'poppins_m',
    fontSize: 16,
    marginTop: 5,
    paddingHorizontal: 20,
    width: '100%',
    height: 50,
    borderRadius: 7,
  },
  btn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: Colors_Profile.secondary,
  },
  btnText: {
    textAlign: 'center',
    fontFamily: 'poppins_r',
    color: 'white',
    fontSize: 16,
  },
  head_img: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginVertical: 20,
  },
  pickerContainer: {
    backgroundColor: Colors_Profile.text,
    height: 50,
    borderRadius: 7,
    width: '100%',
    marginTop: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
    gap: 5,
    margin: 5,
  },
});

export default Login_Screen;
