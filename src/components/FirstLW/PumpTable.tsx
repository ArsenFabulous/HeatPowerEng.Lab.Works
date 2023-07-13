import React, { useState } from 'react'
import { variants } from './variants'
import { table } from './table'
import { useAppSelector } from '../../hooks/redux';
import TableRow from './TableRow';
import { PumpValues } from './table';
import PumpCircut from './PumpCircut';

const PumpTable: React.FC = () => {
    const { variant } = useAppSelector(state => state.LWReducer);
    const dataValue: number[] = variants[+variant];

    const [switcher, setSwitcher] = useState<boolean>(false);
    const [pumpMark, setPumpMark] = useState<string>('');
    const [engineMark, setEngineMark] = useState<string>('');
    const [pumpHead, setPumpHead] = useState<number>(0);
    const [enginePower, setEnginePower] = useState<number>(0);

    const validation = (tableValues: PumpValues) => {
        setSwitcher(false)
        for (let i = 0; i < tableValues.H.length; i++) {
            if (dataValue[17] < tableValues.H[i]
                && dataValue[17] > tableValues.H[i] * 0.75) {
                setPumpHead(tableValues.H[i])
                setPumpMark(tableValues.pumpName)
                console.log(tableValues.H[i])
                for (let i = 0; i < tableValues.H.length; i++) {
                    if (dataValue[18] < tableValues.N[i]
                        && dataValue[1] == tableValues.QValue[0]) {
                        setEnginePower(tableValues.N[i])
                        setEngineMark(tableValues.engineName[i])
                        console.log(tableValues.N[i])
                        return setSwitcher(true)
                    }
                }
            }
        }
        console.log(switcher);
    }

    return (
        <>
            {switcher ?
                <>
                    <p>
                        Выбран центробежный насос марки {pumpMark}, Q = {dataValue[1]} м<sup>3</sup>/c, напор H = {pumpHead} м.<br />
                        Насос снабжен двигателем {engineMark} номинальной мощностью {enginePower} кВт.
                    </p>
                    <h3>Сборка схемы установки центробежного насоса</h3>
                    <PumpCircut />
                </>
                :
                <div>
                    <h3>Выберите подходящее значение из таблицы</h3>
                    <table>
                        <thead>
                            <tr >
                                <th>Марка насоса</th>
                                <th>Q, м<sup>3</sup>/c</th>
                                <th>H, м столба жидкости</th>
                                <th>Электродвигатель</th>
                                <th>N<sub>н</sub>, кВ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((row) => <TableRow
                                key={row.pumpName}
                                onClick={() => validation(row)}
                                H={row.H}
                                Q={row.Q}
                                N={row.N}
                                engineName={row.engineName}
                                pumpName={row.pumpName}
                            />)}
                        </tbody>
                    </table >
                </div >
            }
        </>
    )

}
export default PumpTable