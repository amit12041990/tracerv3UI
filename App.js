import React, { useEffect, useState, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import Login_Screen from './screens/auth/Login_Screen';

import Parent_Screen from './screens/admin/Parent_Screen';
import Grammer_Screen from './screens/admin/Grammer_Screen';
import TagCloud_Screen from './screens/admin/TagCloud_Screen';
import Pages_History from './screens/admin/Pages_History';

import UserPage from './screens/child/UserPage';
import Google from './screens/child/webview_apps/Google';
import Youtube from './screens/child/webview_apps/Youtube';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins_r': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins_m': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins_t': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
    // Example condition to check if user is admin (you can replace this with your authentication logic)
    // For demo, assuming user is admin if isAdmin state is set to true
    setIsAdmin(true); // Set to true for admin, false for regular user
    setIsLoggedIn(true); // Set to true when user is logged in
  }, [onLayoutRootView]);

  if (!appIsReady) {
    return null; // Render nothing while the app is loading
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack.Navigator>
            {isLoggedIn ? (
              <>
                {isAdmin ? (
                  <>
                    <Stack.Screen name="Parent" component={Parent_Screen} options={{headerShown:false}} />
                    <Stack.Screen name="progress" component={Grammer_Screen} options={{headerShown:false}} />
                    <Stack.Screen name="tags" component={TagCloud_Screen} options={{headerShown:false}} />
                    <Stack.Screen name="activities" component={Pages_History} options={{headerShown:false}} />
                 
                  </>
                ) : (
                  <Stack.Screen name="UserPage" component={UserPage} options={{headerShown:false}}/>
                )}
              </>
            ) : (
              <Stack.Screen name="Login" component={Login_Screen} options={{headerShown:false}}/>
            )}
          </Stack.Navigator>
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
