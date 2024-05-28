import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Colors_Profile } from '../../constant/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Top_Header from '../components/Header';
import Childs_Card from '../components/comp_parent/Child_List';
import Form_Modal from '../components/comp_parent/Form_Modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllChildsById, fetchDetailsById, selectDetails, selectChilds, selectChildsLoading, selectChildsError } from '../../redux/parentSlice';

const { height, width } = Dimensions.get('window');

const Parent_Screen = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigation = useNavigation(); // Initialize useNavigation hook
  const dispatch = useDispatch();

  const { data: userData } = useSelector(selectDetails);
  const childs = useSelector(selectChilds);
  const childsLoading = useSelector(selectChildsLoading);
  const childsError = useSelector(selectChildsError);

  useEffect(() => {
    const checkUserId = async () => {
      const userId = await AsyncStorage.getItem('userId');
      if (userId) {
        setIsLogin(true);
        dispatch(fetchDetailsById(userId));
        dispatch(fetchAllChildsById(userId));
      
      } else {
        navigation.replace('Login'); // Redirect to Login screen if userId is not found
      }
    };

    checkUserId();
  }, [dispatch]);
  
  if (!isLogin) {
    // If not logged in, navigate to Login screen
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors_Profile.background, flex: 1 }}>
      <Top_Header screen_info='Parents dashboard' />
      <Form_Modal />
      {childsLoading ? (
        
        <ActivityIndicator size="large" color="#0000ff" />
      ) : childsError ? (
        <Text>Error: {childsError}</Text>
      ) : (
        <ScrollView>
         
          {childs.length > 0 ? (
           
            childs.map((child) => (
              <Childs_Card child={child} key={child._id} />
            ))
          ) : (
            <Text>No children found</Text>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Parent_Screen;
