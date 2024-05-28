import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, Platform, Pressable } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors_Profile } from "../../../constant/Colors";
import { useNavigation } from "@react-navigation/native";

const Childs_Card = ({ child }) => {
  const navigation =useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [editChild, setEditChild] = useState(child);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleEditChange = (key, value) => {
    setEditChild({ ...editChild, [key]: value });
  };

  const handleSave = () => {
    // Add your save logic here
    console.log('Updated Child:', editChild);
    setModalVisible(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
      handleEditChange('dob', formattedDate);
      setDatePickerVisibility(false); // Close the picker
    } else {
      setDatePickerVisibility(false); // Close the picker
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.detail}>
          <Text style={styles.label}>ID</Text>
          <Text style={styles.value}>{child.id}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.value}>{child.name}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.value}>{child.gender}</Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.label}>DOB</Text>
          <Text style={styles.value}>{child.dob}</Text>
        </View>
        <View style={styles.action}>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonDelete]}>
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.action,{backgroundColor:'#f5f5f8',paddingVertical:10}]}>
          <TouchableOpacity style={styles.button_nav} onPress={() => navigation.navigate('progress')}>
            <Text style={styles.nav_btn_text}>Progress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_nav} onPress={() => navigation.navigate('tags')}>
            <Text style={styles.nav_btn_text}>Tags</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_nav} onPress={() => navigation.navigate('activities')}>
            <Text style={styles.nav_btn_text}>Activity</Text>
          </TouchableOpacity>
        </View>
      
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Child</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={editChild.name}
              onChangeText={(text) => handleEditChange('name', text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender"
              value={editChild.gender}
              onChangeText={(text) => handleEditChange('gender', text)}
            />
            <Pressable onPress={showDatePicker} style={styles.datePicker}>
              <Text>{new Date(editChild.dob).toDateString()}</Text>
            </Pressable>
            {isDatePickerVisible && (
              <DateTimePicker
                value={new Date(editChild.dob || Date.now())}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                <Text style={styles.btnText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.buttonDelete]} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 10,
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontFamily: 'poppins_m',
    color: "#333",
    fontSize: 16,
  },
  value: {
    color: "#666",
    fontSize: 16,
    fontFamily: 'poppins_r'
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  button_nav: {
   backgroundColor:'#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonDelete: {
    backgroundColor: "#ff4d4d",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  nav_btn_text:{
    fontSize: 16,
    fontWeight: "bold",
    color: "#3498db",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    elevation: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  datePicker: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
    borderRadius: 10,
    marginBottom: 10,
  },
  datePickerText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
    width: "45%",
    alignItems: "center",
  },
});

export default Childs_Card;
