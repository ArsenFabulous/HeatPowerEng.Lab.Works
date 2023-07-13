import React, { useState } from 'react'
import Modal from '../Modal'
import VariantInput from '../VariantInput';
import { variants } from './variants';
import { useAppSelector } from '../../hooks/redux';
import InputForm from '../InputForm';
import MyButton from '../MyButton';
import PumpTable from './PumpTable';

const FirstLW: React.FC = () => {
    const [isModalActive, setModalActive] = useState<boolean>(true);
    const [switcher, setSwitcher] = useState<boolean>(false);
    const [head, setHead] = useState<string>('');
    const [power, setPower] = useState<string>('');
    const handleModalClose = () => setModalActive(false);
    const { variant } = useAppSelector(state => state.LWReducer)
    const dataValue: number[] = variants[+variant]

    function validation(): void {
        if (head && power) {
            if (+head < dataValue[17] * 1.03 &&
                +head > dataValue[17] * 0.97 &&
                +power < dataValue[18] * 1.03 &&
                +power > dataValue[18] * 0.97) {
                setSwitcher(true)
            } else {
                setSwitcher(false)
            }
        }
    }
    return (
        <div>
            {switcher ? (<PumpTable />) :
             (<><h3>Введите:</h3>
                <div className='forms'>
                    <div className='forms__container'>
                        <h5>Входные данные:</h5>
                        <InputForm label={<label>V, м<sup>3</sup>/ч</label>} dataValue={dataValue[1]} />
                        <InputForm label={<label>P, МПа</label>} dataValue={dataValue[2]} />
                        <InputForm label={<label>H<sub>г</sub>, м</label>} dataValue={dataValue[3]} />
                        <InputForm label={<label>t<sub>в</sub>, <sup>o</sup>C</label>} dataValue={dataValue[4]} />
                        <InputForm label={<label>L<sub>вс</sub>, м</label>} dataValue={dataValue[12]} />
                        <InputForm label={<label>L<sub>н</sub>, м</label>} dataValue={dataValue[5]} />
                        <InputForm label={<label>R<sub>o</sub>/d</label>} dataValue={dataValue[16]} />
                    </div>
                    <div className='forms__container'>
                        <h5>Расчётные данные:</h5>
                        <InputForm label={<label>Re</label>} dataValue={dataValue[9]} />
                        <InputForm label={<label>λ</label>} dataValue={dataValue[20]} />
                        <div><label>H, м</label><input value={head} onChange={(e) => setHead((e.target.value))}></input></div>
                        <div><label>N<sub>дв</sub></label><input value={power} onChange={(e) => setPower((e.target.value))}></input></div>
                        <MyButton inscription='Проверить' propFunc={() => validation()} />
                    </div>
                </div>
            </>)}
            {isModalActive && (
                <Modal title="" onClose={handleModalClose}>
                    <VariantInput />
                </Modal>
            )}
        </div>
    )
}
export default FirstLW