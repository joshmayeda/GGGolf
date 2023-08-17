import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import * as messages from './Messages.json';

type FinalModalProps = {
    finalModalVisible: boolean;
    setFinalModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    firstScore: number;
    finalScore: number;
    philScore: number;
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
        textAlign: 'center',
        marginHorizontal: 20,
    }
});

const FinalModal:React.FC<FinalModalProps> = ({ finalModalVisible, setFinalModalVisible, firstScore, finalScore, philScore }) => {



    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={finalModalVisible}
        >
            <View>
                <IconButton iconColor="#f70202" containerColor="#fff" style={styles.modalCloseButton} icon="alpha-x-circle" mode="contained" onPress={() => setFinalModalVisible(false)}></IconButton>
                <View style={styles.view}>
                    <Text style={styles.modalScoreText}>Final score: {finalScore}</Text>
                    <Text style={styles.modalScoreText}>Collin's score: {firstScore}</Text>
                    <Text style={styles.modalScoreText}>Phil's score: {philScore}</Text>
                    <Text style={styles.message}>Congrats! You lost!</Text>
                    <Text style={styles.message}>These are Collin Morikawa and Phil Mickelson's scores from the final round of the 2020 PGA Championship at TPC Harding Park.</Text>
                    <Text style={styles.message}>Collin won the tournament with a score of -13, and Phil finished with a score of +6.</Text>
                    <Text style={styles.message}>Better luck next time!</Text>
                </View>
            </View>
        </Modal>
    )
}

export default FinalModal;