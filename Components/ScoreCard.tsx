import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable, PaperProvider, Portal, Modal, Text } from 'react-native-paper';
import ScoreRow from './ScoreRow';
import ParRow from './ParRow';

const styles = StyleSheet.create({
    table: {
        flex: 0,
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#e0dcbf',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        borderTopWidth: 1,
        borderTopColor: '#000000',
    },
    cell: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#000000',
    },
});

type ScoreCardProps = {
    disabled: boolean;
    setDisabled: React.Dispatch<React.SetStateAction<boolean>>;
    pars: number[];
    setPars: React.Dispatch<React.SetStateAction<number[]>>;
    scores: number[];
    setScores: React.Dispatch<React.SetStateAction<number[]>>;
    currentHole: number;
    setCurrentHole: React.Dispatch<React.SetStateAction<number>>;
    confirmed: number[];
}

const ScoreCard:React.FC<ScoreCardProps> = ({ disabled, setDisabled, pars, setPars, scores, setScores, currentHole, setCurrentHole, confirmed }) => {

    return (
            <DataTable style={styles.table}>

                <DataTable.Row style={styles.container}>
                    <DataTable.Cell style={styles.cell}>Hole</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>1</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>2</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>3</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>4</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>5</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>6</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>7</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>8</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>9</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}> </DataTable.Cell>
                </DataTable.Row>

                <ParRow 
                    pars={pars}
                    setPars={setPars}
                    row={0}
                />
                <ScoreRow
                    disabled={disabled}
                    setDisabled={setDisabled}
                    scores={scores}
                    setScores={setScores}
                    row={0}
                    currentHole={currentHole}
                    setCurrentHole={setCurrentHole}
                    confirmed={confirmed}
                />

                <DataTable.Row style={styles.container}>
                    <DataTable.Cell style={styles.cell}>Hole</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>10</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>11</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>12</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>13</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>14</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>15</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>16</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>17</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}>18</DataTable.Cell>
                    <DataTable.Cell style={styles.cell}> </DataTable.Cell>
                </DataTable.Row>

                <ParRow 
                    pars={pars}
                    setPars={setPars}
                    row={9}
                />
                <ScoreRow
                    disabled={disabled}
                    setDisabled={setDisabled}
                    scores={scores}
                    setScores={setScores}
                    row={9}
                    currentHole={currentHole}
                    setCurrentHole={setCurrentHole}
                    confirmed={confirmed}
                />

            </DataTable>
    )
}

export default ScoreCard;