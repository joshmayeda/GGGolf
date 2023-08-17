import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FAB, Button } from 'react-native-paper';
import ScoreCard from './Components/ScoreCard';
import InputField from './Components/InputField';
import ThisModal from './Components/ThisModal';
import FinalModal from './Components/FinalModal';

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
  const [completedScorecard, setCompleteScorecard] = React.useState(false);
  const [currentHole, setCurrentHole] = React.useState(0);

  const [pars, setPars] = React.useState([3,4,5,3,4,5,3,4,5,3,4,5,3,4,5,3,4,5]);
  const [scores, setScores] = React.useState([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]);
  const [finalScore, setFinalScore] = React.useState(0);
  const [confirmed, setConfirmed] = React.useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [scoreName, setScoreName] = React.useState('');
  const [firstScore, setFirstScore] = React.useState(0);
  const [philScore, setPhilScore] = React.useState(0);

  const [modalVisible, setModalVisible] = React.useState(false);
  const [finalModalVisible, setFinalModalVisible] = React.useState(false);

  async function fetchData() {
    try{
      const firstResponse = await fetch('http://192.168.1.250:3000/api/first');
      const philResponse = await fetch('http://192.168.1.250:3000/api/phil');
      const firstData = await firstResponse.json();
      const philData = await philResponse.json();
      const firstScore = firstData.rounds[3].strokes;
      const philScore = philData.rounds[3].strokes;
      setFirstScore(firstScore);
      setPhilScore(philScore);
    }catch (error) {
      console.error('Error: ', error);
    }
  }

  const handleSubmit = () => {
    setFinalModalVisible(true);
    fetchData();
    setFinalScore(scores.reduce((a, b) => a + b, 0));
  }

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
        confirmed={confirmed}
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
        setModalVisible={setModalVisible}
        confirmed={confirmed}
        setConfirmed={setConfirmed}
        setCompleteScorecard={setCompleteScorecard}
        setScoreName={setScoreName}
      />}

      <ThisModal 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        scoreName={scoreName}
      />

      {completedScorecard ? 
        <Button
          mode="contained"
          buttonColor="#9b7ca6"
          style={{
            position: 'absolute',
            margin: 16,
            right: 93,
            bottom: 0,
          }}
          onPress={handleSubmit}
        >SUBMIT SCORE</Button>
        : null
      }

      <FinalModal 
        finalModalVisible={finalModalVisible}
        setFinalModalVisible={setFinalModalVisible}
        firstScore={firstScore}
        finalScore={finalScore}
        philScore={philScore}
      />
      
    </View>
  );
}
