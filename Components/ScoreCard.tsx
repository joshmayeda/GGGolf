import React from 'react';
import { DataTable } from 'react-native-paper';

export function ScoreCard(): JSX.Element {
    return (
        <DataTable>
            <DataTable.Row>
                <DataTable.Cell>Hole</DataTable.Cell>
                <DataTable.Cell>1</DataTable.Cell>
                <DataTable.Cell>2</DataTable.Cell>
                <DataTable.Cell>3</DataTable.Cell>
                <DataTable.Cell>4</DataTable.Cell>
                <DataTable.Cell>5</DataTable.Cell>
                <DataTable.Cell>6</DataTable.Cell>
                <DataTable.Cell>7</DataTable.Cell>
                <DataTable.Cell>8</DataTable.Cell>
                <DataTable.Cell>9</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
            </DataTable.Row>

            <DataTable.Row>
                <DataTable.Cell> </DataTable.Cell>
                <DataTable.Cell>10</DataTable.Cell>
                <DataTable.Cell>11</DataTable.Cell>
                <DataTable.Cell>12</DataTable.Cell>
                <DataTable.Cell>13</DataTable.Cell>
                <DataTable.Cell>14</DataTable.Cell>
                <DataTable.Cell>15</DataTable.Cell>
                <DataTable.Cell>16</DataTable.Cell>
                <DataTable.Cell>17</DataTable.Cell>
                <DataTable.Cell>18</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
            </DataTable.Row>
        </DataTable>
    )
}