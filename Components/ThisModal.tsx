import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as messages from './Messages.json';

type ThisModalProps = {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    scoreName: string;
}

const styles = StyleSheet.create({
    modalCloseButton: {
        left: 320,
        top: 10,
    },
    view: {
        alignItems: 'center',
    },
    modalScoreText: {
        fontSize: 50,
        top: 50,
    },
    message: {
        fontSize: 20,
        top: 80,
    }
});

const ThisModal:React.FC<ThisModalProps> = ({ modalVisible, setModalVisible, scoreName }) => {
    
    const getRandomGoodMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.good.length);
        return messages.good[randomIndex];
    }

    const getRandomBadMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.bad.length);
        return messages.bad[randomIndex];
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
        >
            <View>
                <IconButton iconColor="#f70202" containerColor="#fff" style={styles.modalCloseButton} icon="alpha-x-circle" mode="contained" onPress={() => setModalVisible(false)}></IconButton>
                <View style={styles.view}>
                    <Text style={styles.modalScoreText}>You got a {scoreName}!</Text>
                    {scoreName === 'Par' || scoreName === 'Birdie' || scoreName === 'Eagle' || scoreName === 'Albatross' ?
                    <Text style={styles.message}>{getRandomGoodMessage()}</Text> : <Text style={styles.message}>{getRandomBadMessage()}</Text>}
                </View>
            </View>
        </Modal>
    )
}

export default ThisModal;