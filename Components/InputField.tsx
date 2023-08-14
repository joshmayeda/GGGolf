import * as React from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { FAB } from 'react-native-paper';
import ThisModal from './ThisModal';

const styles = StyleSheet.create({
    textBottom: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#ebb78f',
        marginTop: 89,
        marginBottom: 0,
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
      },
      closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#eee',
        borderRadius: 4,
      },
});

type InputFieldProps = {
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    pars: number[];
    setPars: React.Dispatch<React.SetStateAction<number[]>>;
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number[]>>;
    currentHole: number;
    setCurrentHole: React.Dispatch<React.SetStateAction<number>>;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
    confirmed: number[];
    setConfirmed: React.Dispatch<React.SetStateAction<number[]>>;
    setCompleteScorecard: React.Dispatch<React.SetStateAction<boolean>>;
    setScoreName: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<InputFieldProps> = ({ disabled, setDisabled, pars, setPars, scores, setScores, currentHole, setCurrentHole, setModalVisible, confirmed, setConfirmed, setCompleteScorecard, setScoreName }) => {

    const handleParIncrement = () => {
        const newPars = [...pars];
        newPars[currentHole - 1] += 1;
        setPars(newPars);
    }

    const handleParDecrement = () => {
        const newPars = [...pars];
        newPars[currentHole - 1] -= 1;
        setPars(newPars);
    }

    const handleScoreIncrement = () => {
        const newScores = [...scores];
        newScores[currentHole - 1] += 1;
        setScores(newScores);
    }

    const handleScoreDecrement = () => {
        const newScores = [...scores];
        newScores[currentHole - 1] -= 1;
        setScores(newScores);
    }

    const handleConfirm = () => {
        const newConfirmed = [...confirmed];
        newConfirmed[currentHole - 1] = 1;
        setConfirmed(newConfirmed);
        if(newConfirmed.every(item => item !== 0)){
            setCompleteScorecard(true);
        }
    }

    const handleModalOpen = () => {
        if(pars[currentHole - 1] - scores[currentHole - 1] === 0){
            setScoreName('Par');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === 1){
            setScoreName('Birdie');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === 2){
            setScoreName('Eagle');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === 3){
            setScoreName('Albatross');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === -1){
            setScoreName('Bogey');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === -2){
            setScoreName('Double Bogey');
        } else if(pars[currentHole - 1] - scores[currentHole - 1] === -3){
            setScoreName('Triple Bogey');
        } else {
            let num:number = Math.abs(pars[currentHole - 1] - scores[currentHole - 1]);
            setScoreName("+" + num.toString());
        }
        setModalVisible(true);
    }
    
    return (
        <>
        <Text style={styles.textBottom}>Be Honest</Text>
        <FAB
          icon="check"
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: '#02b820',
          }}
          onPress = {() => { setDisabled(true); handleConfirm(); handleModalOpen(); }}
        />

        <Text style={{
                fontSize: 30,
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#fff',
                marginTop: 20,
                marginLeft: 40,
        }}
        >Par: </Text>
        {(pars[currentHole - 1] >= 4) ?
            <FAB
            icon="minus"
            size='small'
            onPress={handleParDecrement}
            style={{
                position: 'absolute',
                bottom: 170,
                left: 130,
                backgroundColor: '#fff',
            }}
        /> : null}
        <Text style={{
            fontSize: 30,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#fff',
            bottom: 35,
            marginLeft: 190,
        }}
        >{pars[currentHole - 1]}</Text>
        {(pars[currentHole - 1] <= 4) ?
        <FAB
            icon="plus"
            size='small'
            onPress={handleParIncrement}
            style={{
                position: 'absolute',
                bottom: 170,
                left: 230,
                backgroundColor: '#fff',
            }}
        /> : null}

        <Text style={{
                fontSize: 25,
                textAlign: 'left',
                fontWeight: 'bold',
                color: '#fff',
                marginTop: 20,
                marginLeft: 25,
        }}
        >Strokes: </Text>
        {(scores[currentHole - 1] > 1) ?
            <FAB
            icon="minus"
            size='small'
            onPress={handleScoreDecrement}
            style={{
                position: 'absolute',
                bottom: 85,
                left: 130,
                backgroundColor: '#fff',
            }}
        /> : null}
        {(scores[currentHole - 1] > pars[currentHole - 1]) ?
        <Text style={{
            fontSize: 30,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#ff0000',
            bottom: 35,
            marginLeft: 190,
        }}
        >{scores[currentHole - 1]}</Text> : 
        <Text style={{
            fontSize: 30,
            textAlign: 'left',
            fontWeight: 'bold',
            color: '#fff',
            bottom: 35,
            marginLeft: 190,
        }}
        >{scores[currentHole - 1]}</Text>
        }
        <FAB
            icon="plus"
            size='small'
            onPress={handleScoreIncrement}
            style={{
                position: 'absolute',
                bottom: 85,
                left: 230,
                backgroundColor: '#fff',
            }}
        />

        {/* <Text style={styles.textInput}>CurrentHole: {currentHole}</Text> */}
        </>
    )
}

export default InputField;