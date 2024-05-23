import { View, Text, StyleSheet, Modal, Pressable, TextInput, Button,  Platform } from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'

const Form_Modal = () => {
    const [visible, setVisible] = useState(false);
    const [childName, setChildName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const toggleModalVisibility = () => {
        setVisible(!visible);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dob;
        setShowDatePicker(Platform.OS === 'ios');
        setDob(currentDate);
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log({
            childName,
            age,
            gender,
            dob: dob.toDateString(),
        });
        toggleModalVisibility();
    };

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={toggleModalVisibility}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Enter Child Details</Text>
                        
                        <TextInput
                            style={styles.input}
                            placeholder="Child's Name"
                            value={childName}
                            onChangeText={setChildName}
                        />
                        
                        <Picker
                            selectedValue={gender}
                            style={styles.input}
                            onValueChange={(itemValue) => setGender(itemValue)}
                        >
                            <Picker.Item label="Select Gender" value="" />
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>
                        <Pressable onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
                            <Text>{dob.toDateString()}</Text>
                        </Pressable>
                        {showDatePicker && (
                            <DateTimePicker
                                value={dob}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                        <View style={{justifyContent:"space-between",flexDirection:'row',paddingHorizontal:10}}>
                        <Pressable onPress={toggleModalVisibility}>
                            <Text style={styles.btn}>Submit</Text>
                        </Pressable>
                        <Pressable onPress={toggleModalVisibility}>
                            <Text style={[styles.btn,{backgroundColor:'red'}]}>close</Text>
                        </Pressable>
                        </View>
                       
                    </View>
                </View>
            </Modal>
            <Pressable onPress={toggleModalVisibility}>
                <Text style={styles.btn}>Add Child</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        padding:10,
        backgroundColor:'#007bff',
        fontFamily:'poppins_m',
        fontSize:12,
        color:'#fff',
        margin:10,

        borderRadius:15,
    },
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: "#f5f5f5",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        width: '80%',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    datePicker: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    hideText: {
        marginTop: 10,
        color: 'blue',
    },
});

export default Form_Modal;
