import React from 'react'

interface Props {
    pumpName: string,
    Q: string,
    H: number[],
    engineName: string[],
    N: number[],
    onClick: (e: React.MouseEvent) => void;
}

const TableRow: React.FC<Props> = ({ pumpName, Q, H, engineName, N, onClick }) => {

    return (
        <tr onClick={onClick}>
            <td>{pumpName}</td>
            <td>{Q}</td>
            <td>
                {(H[0]) ? (H[0]) : (' ')}  <br />
                {(H[1]) ? (H[1]) : (' ')}<br />
                {(H[2]) ? (H[2]) : (' ')}
            </td>
            <td>
                {(engineName[0]) ? (engineName[0]) : (' ')}<br />
                {(engineName[1]) ? (engineName[1]) : (' ')}<br />
                {(engineName[2]) ? (engineName[2]) : (' ')}
            </td>
            <td>
                {(N[0]) ? (N[0]) : (' ')}<br />
                {(N[1]) ? (N[1]) : (' ')}<br />
                {(N[2]) ? (N[2]) : (' ')}
            </td>
        </tr>
    )
}

export default TableRow