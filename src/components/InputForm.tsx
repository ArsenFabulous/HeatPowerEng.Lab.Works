import React, { useState } from 'react'

interface Props {
    label?: JSX.Element,
    dataValue: number | string,
    styleChecker?: boolean,
    value?: number,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputForm: React.FC<Props> = ({ label, dataValue, styleChecker }) => {
    const [value, setValue] = useState<string>()
    return (
        <div>
            {label}
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    border: ((value == dataValue) && !styleChecker) ?
                        '3px solid green' :
                        '2px solid black'
                }}
                className='intrmdt-chck'
            />
        </div>
    )
}

export default InputForm