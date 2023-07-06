import React from 'react'

interface Props {
    inscription: string;
    propFunc: (e: React.MouseEvent<HTMLElement>) => void;
    uniqueClass?: string;
}

const MyButton: React.FC<Props> = ({ inscription, propFunc, uniqueClass }) => {
    return (
        <button
            className={uniqueClass ? uniqueClass : 'button'}
            onClick={(e) => propFunc(e)}
        >
            {inscription}
        </button>
    )
}

export default MyButton