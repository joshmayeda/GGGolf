import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

type ThisModalProps = {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const styles = StyleSheet.create({
    modalCloseButton: {
        left: 320,
        top: 10,
    },
});

const ThisModal:React.FC<ThisModalProps> = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            >
            <View>
                <View>
                    <IconButton iconColor="#f70202" containerColor="#fff" style={styles.modalCloseButton} icon="alpha-x-circle" mode="contained" onPress={() => setModalVisible(false)}></IconButton>
                </View>
            </View>
        </Modal>
    )
}

export default ThisModal;