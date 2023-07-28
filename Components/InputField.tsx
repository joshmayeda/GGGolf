import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { FAB } from 'react-native-paper';

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
}

const InputField: React.FC<InputFieldProps> = ({ disabled, setDisabled, pars, setPars, scores, setScores, currentHole, setCurrentHole }) => {
    
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
          onPress = {() => setDisabled(true)}
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
        />
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