import React, { useEffect, useState, useCallback } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Login_Screen from './screens/Login_Screen';
import Grammer_Screen from './screens/Grammer_Screen';
import Usage_History from './screens/Usage_History';
import Parent_Screen from './screens/Parent_Screen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const loginRoute = () => <Login_Screen />;
const GrammerRoute = () => <Grammer_Screen />;
const ParentRoute = () => <Parent_Screen/>
const HistoryRoute = () => <Usage_History/>;

const App = () => {
  const [fontsLoaded] = useFonts({
    'poppins_r': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins_m': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins_t': require('./assets/fonts/Poppins-Thin.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [onLayoutRootView]);

  

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'login', title: 'Login', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
    { key: 'grammer', title: 'Language', focusedIcon: 'keyboard-variant',unfocusedIcon:'keyboard-variant' },
    { key: 'parent', title: 'parent', focusedIcon: 'account',unfocusedIcon: 'account-outline' },
    { key: 'history', title: 'Usage History', focusedIcon: 'timeline', unfocusedIcon: 'timeline-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    login: loginRoute,
    grammer: GrammerRoute,
    parent: ParentRoute,
    history: HistoryRoute,
  });
  if (!appIsReady) {
    return null; // Render nothing while the app is loading
  }
  return (
    <SafeAreaProvider>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
};

export default App;
