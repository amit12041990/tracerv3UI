import React, { useEffect, useState, useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './redux/store';

import Login_Screen from './screens/auth/Login_Screen';
import Parent_Screen from './screens/admin/Parent_Screen';
import Grammer_Screen from './screens/admin/Grammer_Screen';
import TagCloud_Screen from './screens/admin/TagCloud_Screen';
import Pages_History from './screens/admin/Pages_History';
import UserPage from './screens/child/UserPage';

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

  // Function to handle font loading and hiding splash screen
  const handleAppLoad = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    handleAppLoad();
  }, [handleAppLoad]);

  // Render loading indicator or splash screen while app is loading
  if (!appIsReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <SafeAreaProvider>
            <Stack.Navigator>
              <>
                <Stack.Screen name="Parent" component={Parent_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="progress" component={Grammer_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="tags" component={TagCloud_Screen} options={{ headerShown: false }} />
                <Stack.Screen name="activities" component={Pages_History} options={{ headerShown: false }} />
                <Stack.Screen name="UserPage" component={UserPage} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login_Screen} options={{ headerShown: false }} />
              </>
            </Stack.Navigator>
          </SafeAreaProvider>
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
