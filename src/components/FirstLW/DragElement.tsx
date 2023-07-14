import React from 'react'

interface Props {
    dragElem: boolean[],
    imgSrc: string,
    onDrag: React.DragEventHandler<HTMLDivElement>
}

const DragElement: React.FC<Props> = ({ dragElem, onDrag, imgSrc }) => {
    return (
        <div onDrag={onDrag}>
            {dragElem[1]
                ? <></>
                : <div draggable>
                    <img
                        style={{
                            pointerEvents: dragElem[1] ? "none" : "auto",
                            opacity: dragElem[1] ? 0.5 : 1,
                        }}
                        onDrag={onDrag}
                        className='blocks__element' src={imgSrc} />
                </div>
            }
        </div>
    )
}

export default DragElement