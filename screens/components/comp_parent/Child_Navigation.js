import { View, Text ,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'

const Child_Navigation = () => {


    return (
      <View style={styles.container}>
        <TouchableOpacity style={[styles.button, styles.buttonRed]} onPress={() => navigation.navigate('Page1')}>
          <Text style={styles.buttonText}>Progress</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonGreen]} onPress={() => navigation.navigate('Page2')}>
          <Text style={styles.buttonText}>Tags</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => navigation.navigate('Page3')}>
          <Text style={styles.buttonText}>Activities</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding:10,
      backgroundColor: '#f0f0f0',
    },
    button: {
      paddingVertical: 15,
      paddingHorizontal: 25,
      borderRadius: 7,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
    buttonRed: {
      backgroundColor: '#e74c3c',
    },
    buttonGreen: {
      backgroundColor: '#2ecc71',
    },
    buttonBlue: {
      backgroundColor: '#3498db',
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
    },
  });

export default Child_Navigation