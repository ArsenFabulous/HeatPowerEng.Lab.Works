import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

interface Props {
    variant: (string | number[])[]
}

const LineChartComp: React.FC<Props> = ({ variant }) => {

    const data = [
        {
            name: '1',
            Q: +variant[0][0] * 3600,
            H: variant[0][1],
            N: variant[0][2],
            η: variant[0][3],
        },
        {
            name: '2',
            Q: +variant[1][0] * 3600,
            H: variant[1][1],
            N: variant[1][2],
            η: variant[1][3],
        },
        {
            name: '3',
            Q: +variant[2][0] * 3600,
            H: variant[2][1],
            N: variant[2][2],
            η: variant[2][3],
        },
        {
            name: '4',
            Q: +variant[3][0] * 3600,
            H: variant[3][1],
            N: variant[3][2],
            η: variant[3][3],
        },
        {
            name: '5',
            Q: +variant[4][0] * 3600,
            H: variant[4][1],
            N: variant[4][2],
            η: variant[4][3],
        },

    ];

    return (
        <LineChart
            width={720}
            height={450}
            data={data}
            margin={{
                top: 25,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Q" name="Q, м³/ч" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="H" name="H, м" stroke="#82ca9d" />
            <Line type="monotone" dataKey="N" name="N, КВт" stroke="blue" />
            <Line type="monotone" dataKey="η" name="η, %" stroke="red" />
        </LineChart>
    )
}

export default LineChartComp