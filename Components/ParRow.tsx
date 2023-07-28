import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable, Provider, Modal, Portal, Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebc7d2',
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
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

type ParRowProps = {
    pars: number[];
    setPars: React.Dispatch<React.SetStateAction<number[]>>;
    row: number;
}

const ParRow:React.FC<ParRowProps> = ({ pars, setPars, row }) => {

    let row1Par: number = pars[0] + pars[1] + pars[2] + pars[3] + pars[4] + pars[5] + pars[6] + pars[7] + pars[8];
    let row2Par: number = pars[9] + pars[10] + pars[11] + pars[12] + pars[13] + pars[14] + pars[15] + pars[16] + pars[17];

    return (

        <>
            <DataTable.Row style={styles.container}>
                <DataTable.Cell style={styles.cell}>Par</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[0 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[1 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[2 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[3 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[4 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[5 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[6 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[7 + row]}</DataTable.Cell>
                <DataTable.Cell style={styles.cell}>{pars[8 + row]}</DataTable.Cell>
                {row ? <DataTable.Cell style={styles.cell}>{row2Par}</DataTable.Cell> : <DataTable.Cell style={styles.cell}>{row1Par}</DataTable.Cell>}
            </DataTable.Row>
        </>

    )
}

export default ParRow;