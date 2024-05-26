import { View, Text,StyleSheet,Dimensions,TextInput, Button, Pressable, Alert,Image, } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Colors_Profile } from '../../constant/Colors'
import { Picker } from '@react-native-picker/picker'



const {height,width} =Dimensions.get('window')
const Login_Screen = () => {
  

 
  const [email,setEmail] = useState('')
  const [password,setPassword] =useState('')
  const [usertype,setUsertype] =useState('admin')

  return (
 <SafeAreaView>
 <View style={{backgroundColor:Colors_Profile.background,height:height}}>
    <Text style={styles.head_text}>Tracer App</Text>
    <Image style={styles.head_img} source={require('../../assets/user_photo.png')}/>
    <View style={{flex:1,alignItems:'center',width:'100%',paddingHorizontal:40,gap:5,margin:5}}>
    <Text style={[styles.head_text2,{alignSelf:'flex-start'}]}>Welcome</Text>
    <TextInput
    value={email}
    placeholder='Email'
    style={styles.text_input}
    onChangeText={newText=>setEmail(newText)}

    />
    <TextInput
    value={password}
    placeholder='Password '
    style={styles.text_input}
    onChangeText={newText=>setPassword(newText)}
    />
    <View style={{backgroundColor:Colors_Profile.text,height:50,borderRadius:7,width:'100%', marginTop:5,
       }}>
    <Picker
        selectedValue={usertype}
        onValueChange={(changeValue) => setUsertype(changeValue)}
        style={{height:50,width:'100%'}}
       
      >
        <Picker.Item label='Admin' value='admin' />
        <Picker.Item label='Child' value='user' />
    </Picker>
    </View>
    
    <View style={{width:'100%',}}>
     <Pressable style={styles.btn} onPress={()=>{Alert.alert('hii')}}>
      <Text style={{textAlign:'center',fontFamily:'poppins_r',color:'white',fontSize:16,}}>Sign In</Text>
     </Pressable>
    </View>
    </View>
 
    </View>
  
 </SafeAreaView>
   
   

  )
}

const styles = StyleSheet.create({
    head_text:{
        textAlign:'center',
        fontSize:32,
        color:'#AC1B61',
        marginVertical:10,
        fontFamily:'poppins_r',


    },
    head_text2:{
   
            
            padding:5,
            fontSize:16,
            fontFamily:'poppins_r',
            color:Colors_Profile.Primary

    },
    text_input:{
        backgroundColor:Colors_Profile.text,
        fontFamily:'poppins_m',
        fontSize:16,
        marginTop:5,
        paddingHorizontal:20,
        width:'100%',
        height:50,
        borderRadius: 7
    
     
       
        
    },
    btn:{
      width:'100%',
      height:50,
   
      justifyContent:'center',
      marginVertical:10,
      borderRadius:15,
      backgroundColor:Colors_Profile.secondary,
    
      

    },
    head_img:{
      height:200,
      width:300,
      alignSelf:'center',
      marginVertical:20,
    },
    dropdown:{
      width:'100%',
     
      

    }

})

export default Login_Screen