import React from 'react'

interface Props {
    dragElem: boolean[];
    onDrop: React.DragEventHandler<HTMLDivElement>;
    className: string;
}

const DropElement: React.FC<Props> = ({ dragElem, onDrop, className }) => {
    return (
        <>
            {dragElem[1]
                ? <></>
                : <div
                    onDrop={onDrop}
                    className={className}
                    style={{ border: '1px solid gray' }} />}
        </>
    )
}

export default DropElement