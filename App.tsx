import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FAB } from 'react-native-paper';
import ScoreCard from './Components/ScoreCard';
import InputField from './Components/InputField';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b6dec1',
    paddingTop: 25,
  },
  textTop: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#ebb78f',
    marginBottom: 93,
    marginTop: 0,
  },
});



export default function App() {

  const [disabled, setDisabled] = React.useState(true);
  const [currentHole, setCurrentHole] = React.useState(0);

  const [pars, setPars] = React.useState([3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5]);
  const [scores, setScores] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  return (
    <View style={styles.container}>
      <Text style={styles.textTop}>G(it) G(ud) Golf</Text>
      <ScoreCard
        disabled={disabled}
        setDisabled={setDisabled}
        pars={pars}
        setPars={setPars}
        scores={scores}
        setScores={setScores}
        currentHole={currentHole}
        setCurrentHole={setCurrentHole}
      />
      {disabled ? null : 
      <InputField
        disabled={disabled}
        setDisabled={setDisabled}
        pars={pars}
        setPars={setPars}
        scores={scores}
        setScores={setScores}
        currentHole={currentHole}
        setCurrentHole={setCurrentHole}
      />}
      
    </View>
  );
}
