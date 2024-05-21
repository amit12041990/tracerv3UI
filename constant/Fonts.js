import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'dancingScriptFont': require('../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    'poppins_r' : require('../assets/fonts/Poppins-Regular.ttf'),
    'poppins_m' : require('../assets/fonts/Poppins-Medium.ttf'),
    'poppins_t' : require('../assets/fonts/Poppins-Thin.ttf'),
    
  
  });
};

export default loadFonts