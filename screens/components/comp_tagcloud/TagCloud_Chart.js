import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import { Colors_Profile } from '../../../constant/Colors';
import { data } from '../../../constant/demo_wc_data';
import { TagCloud } from 'react-tagcloud/rn';
import DetailView from './TagCloud_Modal';


const { height, width } = Dimensions.get('window');

const TagCloud_Chart = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTag, setSelectedTag] = useState(null);

    const sum_of_data = Object.entries(data.reduce((acc, cur) => {
        acc[cur.value] = (acc[cur.value] || 0) + cur.count;
        return acc;
    }, {})).map(([value, count]) => ({ value, count }));

 

    // Function to determine rotation angle
    const rotateWord = (tag) => {
        // Rotate some words by 90 degrees
        return Math.random() > 0.5 ? 90 : 0;
    };

    const handlePress = (tag) => {
        setSelectedTag(tag);
        setModalVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: Colors_Profile.btn_text, padding: 5 }}>
                <Text style={{ fontFamily: 'poppins_m', color: Colors_Profile.secondary }}>Word Cloud ⬅️</Text>
            </View>
            <TagCloud
                minSize={5}
                maxSize={35}
                tags={sum_of_data}
                shuffle={true}
                onPress={handlePress}
                rotate={rotateWord}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <DetailView/>
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
          
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalView: {
        width: '90%',
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        backgroundColor: '#ff0000',
        borderRadius: 7,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default TagCloud_Chart;
