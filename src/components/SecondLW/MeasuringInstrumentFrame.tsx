import React, { useState } from 'react'

interface Props {
    device: 'manometer' | 'vacuum' | 'wattmeter' | 'flowMeter';
    value: string | number;
    imgSrc: string;
}

const MeasuringInstrumentFrame: React.FC<Props> = ({ device, value, imgSrc }) => {

    const [hover, setHover] = useState<boolean>(false)

    function humanReadable(numb: number): string {
        const pad = (x: number): string => (x < 10) ? "0" + x : x.toString();
        return pad(Math.floor(numb / 100)) + pad(Number((numb % 100).toFixed(1)));
    }

    return (
        <>
            <div className={`scheme__frame__${device}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            />
            {hover

                && <dialog open className={`scheme__frame__${device}__tooltip`}>
                    <div className={`scheme__frame__${device}__tooltip__value`}>{humanReadable(+value)}</div>
                    <img
                        src={imgSrc}
                    />
                </dialog >
            }
        </>
    )
}

export default MeasuringInstrumentFrame