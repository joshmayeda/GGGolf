import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable, Provider, Modal, Portal, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        marginBottom: 5,
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#000000',
        
    },
    modal: {
        flex: 1,
        backgroundColor: '#000',
    }
});

type ScoreRowProps = {
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number[]>>;
    row: number;
    currentHole: number;
    setCurrentHole: React.Dispatch<React.SetStateAction<number>>;
}

const ScoreRow:React.FC<ScoreRowProps> = ({ disabled, setDisabled, scores, setScores, row, currentHole, setCurrentHole }) => {

    const handleOnClick = (id: number) => {
        setDisabled(false);
        setCurrentHole(id + 1);
    }
    let row1TotalScore: number = scores[0] + scores[1] + scores[2] + scores[3] + scores[4] + scores[5] + scores[6] + scores[7] + scores[8];
    let row2TotalScore: number = scores[9] + scores[10] + scores[11] + scores[12] + scores[13] + scores[14] + scores[15] + scores[16] + scores[17];

    return (

        <>
            <DataTable.Row style={styles.container}>
                <DataTable.Cell style={styles.cell}> </DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(0 + row)}>{scores[0 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(1 + row)}>{scores[1 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(2 + row)}>{scores[2 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(3 + row)}>{scores[3 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(4 + row)}>{scores[4 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(5 + row)}>{scores[5 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(6 + row)}>{scores[6 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(7 + row)}>{scores[7 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell} onPress={() => handleOnClick(8 + row)}>{scores[8 + row]}</DataTable.Cell>
                {row ? <DataTable.Cell style={styles.cell}>{row2TotalScore}</DataTable.Cell> : <DataTable.Cell style={styles.cell}>{row1TotalScore}</DataTable.Cell>}
            </DataTable.Row>
        </>

    )
}

export default ScoreRow;