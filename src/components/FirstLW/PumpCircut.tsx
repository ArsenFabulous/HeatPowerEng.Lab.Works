import React, { useState } from 'react';
import DragElement from './DragElement';
import DropElement from './DropElement';

const PumpCircut: React.FC = () => {
    const [drag1P, setDrag1P] = useState<boolean[]>([false, false]);
    const [drag2P, setDrag2P] = useState<boolean[]>([false, false]);
    const [drag3P, setDrag3P] = useState<boolean[]>([false, false]);
    const [drag4P, setDrag4P] = useState<boolean[]>([false, false]);
    const [drag5P, setDrag5P] = useState<boolean[]>([false, false]);
    const [drag6P, setDrag6P] = useState<boolean[]>([false, false]);

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault()

    const dropPrevent = () => {
        if (drag1P[0] && !drag1P[1]) setDrag1P([false, false])
        if (drag2P[0] && !drag2P[1]) setDrag2P([false, false])
        if (drag3P[0] && !drag3P[1]) setDrag3P([false, false])
        if (drag4P[0] && !drag4P[1]) setDrag4P([false, false])
        if (drag5P[0] && !drag5P[1]) setDrag5P([false, false])
        if (drag6P[0] && !drag6P[1]) setDrag6P([false, false])
    }

    const dragHandler1p = (): void => setDrag1P([true, false])

    const dropHandler1P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag1P[0]) setDrag1P([true, true]);
        e.stopPropagation()
    }

    const dragHandler2p = (): void => setDrag2P([true, false])

    const dropHandler2P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag2P[0]) setDrag2P([true, true]);
        e.stopPropagation()
    }

    const dragHandler3p = (): void => setDrag3P([true, false])

    const dropHandler3P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag3P[0]) setDrag3P([true, true]);
        e.stopPropagation()
    }

    const dragHandler4p = (): void => setDrag4P([true, false])

    const dropHandler4P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag4P[0]) setDrag4P([true, true]);
        e.stopPropagation()
    }

    const dragHandler5p = (): void => setDrag5P([true, false])

    const dropHandler5P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag5P[0]) setDrag5P([true, true]);
        e.stopPropagation()
    }

    const dragHandler6p = (): void => setDrag6P([true, false])


    const dropHandler6P = (e: React.DragEvent<HTMLDivElement>): void => {
        if (drag6P[0]) setDrag6P([true, true]);
        e.stopPropagation()
    }

    return (
        <div>
            <div className='blocks'>
                <DragElement
                    dragElem={drag1P}
                    onDrag={dragHandler1p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/1part.jpg?raw=true'
                />
                <DragElement
                    dragElem={drag2P}
                    onDrag={dragHandler2p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/2part.jpg?raw=true'
                />
                <DragElement
                    dragElem={drag3P}
                    onDrag={dragHandler3p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/3part.jpg?raw=true'
                />
                <DragElement
                    dragElem={drag4P}
                    onDrag={dragHandler4p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/4part.jpg?raw=true'
                />
                <DragElement
                    dragElem={drag5P}
                    onDrag={dragHandler5p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/5part.jpg?raw=true'
                />
                <DragElement
                    dragElem={drag6P}
                    onDrag={dragHandler6p}
                    imgSrc='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/6part.jpg?raw=true'
                />
            </div>
            <div className='puzzle'
                onDrop={dropPrevent}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
            >
                <img src='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/FullCircut.jpg?raw=true' className='circut' />
                <DropElement
                    dragElem={drag1P}
                    onDrop={dropHandler1P}
                    className='bordered bordered-1part'
                />
                <DropElement
                    dragElem={drag2P}
                    onDrop={dropHandler2P}
                    className='bordered bordered-2part'
                />
                <DropElement
                    dragElem={drag3P}
                    onDrop={dropHandler3P}
                    className='bordered bordered-3part'
                />
                <DropElement
                    dragElem={drag4P}
                    onDrop={dropHandler4P}
                    className='bordered bordered-4part'
                />
                <DropElement
                    dragElem={drag5P}
                    onDrop={dropHandler5P}
                    className='bordered bordered-5part'
                />
                <DropElement
                    dragElem={drag6P}
                    onDrop={dropHandler6P}
                    className='bordered bordered-6part'
                />
            </div>
        </div >
    )
}

export default PumpCircut