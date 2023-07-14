import React, { SetStateAction, useState } from 'react'
import Modal from '../Modal'
import VariantInput from '../VariantInput'
import LineChartComp from './LineChart'
import { variants } from './variants'
import { useAppSelector } from '../../hooks/redux'
import MeasuringInstrumentFrame from './MeasuringInstrumentFrame'

const SecondLW: React.FC = () => {
  const [rashod, setRashod] = useState<string | number>('');
  const [power, setPower] = useState<string | number>('');
  const [pressure, setPressure] = useState<string | number>('');
  const [vacuum, setVacuum] = useState<string | number>('');
  const [kpd, setKpd] = useState(0);
  const [switcher, setSwitcher] = useState<boolean>(false);
  const [styleSwitcher, setStyleSwitcher] = useState<boolean>(false);
  const [isModalActive, setModalActive] = useState<boolean>(true);
  // @ts-ignore
  const [kpdChecker, setKpdChecker] = useState<number[]>([])


  const handleModalClose = () => setModalActive(false);
  const { variant } = useAppSelector(state => state.LWReducer)
  const dataValue: (string | number[])[] = variants[+variant]

  function setter(rashod: number, power: number, vacuum: number, pressure: number): void {
    const outNum = (num: number, time: number, step: number, set: React.Dispatch<SetStateAction<number | string>>): void => {
      let n = 0;
      let t = Math.round(time / (Math.round(num) / step));
      let interval =
        setInterval(() => {
          n = n + step;
          set(n)
          if (n > num) {
            set(num)
            clearInterval(interval);
            set(num)
          }
        }, t);
    }
    outNum(rashod, 5000, 1, setRashod)
    outNum(power, 5000, 1, setPower)
    outNum(vacuum, 5000, 1, setVacuum)
    outNum(pressure, 5000, 1, setPressure)
  }

  function kpdCheck(kpd: number) {
    switch (kpd) {
      case dataValue[0][3]:
        console.log(kpdChecker);

        if (!kpdChecker.includes(0)) {
          kpdChecker.push(0);
          styleSwitch()
          if (kpdChecker.length == 5) setSwitcher(true)
        }
        console.log(kpdChecker)
        break;
      case dataValue[1][3]:
        console.log(kpdChecker);
        if (!kpdChecker.includes(1)) {
          kpdChecker.push(1);
          styleSwitch()
          if (kpdChecker.length == 5) setSwitcher(true)
        }
        break;
      case dataValue[2][3]:
        console.log(kpdChecker);
        if (!kpdChecker.includes(2)) {
          kpdChecker.push(2);
          styleSwitch()
          if (kpdChecker.length == 5) setSwitcher(true)
        }
        break;
      case dataValue[3][3]:
        console.log(kpdChecker);
        if (!kpdChecker.includes(3)) {
          kpdChecker.push(3);
          styleSwitch()
          if (kpdChecker.length == 5) setSwitcher(true)
        }
        break;
      case dataValue[4][3]:
        console.log(kpdChecker);
        if (!kpdChecker.includes(4)) {
          kpdChecker.push(4);
          styleSwitch()
          if (kpdChecker.length == 5) setSwitcher(true)
        }
        break;
      default:
        return 'Введено неправильное значение';
    }
  }

  function styleSwitch(): void {
    setStyleSwitcher(true)
    console.log(styleSwitcher)
    setTimeout(() => setStyleSwitcher(false), 100)
  }

  function animate(rashod: number) {
    console.log('Сработала func animate')
    switch (rashod) {
      case dataValue[0][0]:
        console.log('1 кейс')
        setter(
          +dataValue[0][0] * 3600,
          +dataValue[0][2],
          +dataValue[0][4],
          +dataValue[0][5]
        );
        break;
      case dataValue[1][0]:
        console.log('2 кейс')
        setter(
          +dataValue[1][0] * 3600,
          +dataValue[1][2],
          +dataValue[1][4],
          +dataValue[1][5]
        )
        if (!kpdChecker.includes(2)) {
          kpdChecker.push(2);
        }
        break;
      case dataValue[2][0]:
        console.log('3 кейс')
        setter(
          +dataValue[2][0] * 3600,
          +dataValue[2][2],
          +dataValue[2][4],
          +dataValue[2][5]
        )
        if (!kpdChecker.includes(3)) {
          kpdChecker.push(3);
        }
        break;
      case dataValue[3][0]:
        console.log('4 кейс')
        setter(
          +dataValue[3][0] * 3600,
          +dataValue[3][2],
          +dataValue[3][4],
          +dataValue[3][5]
        )
        if (!kpdChecker.includes(4)) {
          kpdChecker.push(4);
        }
        break;
      case dataValue[4][0]:
        console.log('5 кейс')
        setter(
          +dataValue[4][0] * 3600,
          +dataValue[4][2],
          +dataValue[4][4],
          +dataValue[4][5]
        )
        if (!kpdChecker.includes(5)) {
          kpdChecker.push(5);
        }
        break;
      default:
        return 'Введено неправильное значение';
    }
  }
  return (
    <div><>
      <div className='main'>
        <div className='scheme'>
          <img className='scheme__pic' src='public\LW2\centrifugalScheme.svg' />
          <MeasuringInstrumentFrame
            device='manometer'
            imgSrc='public\LW2\manometer.svg'
            value={pressure}
          />
          <MeasuringInstrumentFrame
            device='vacuum'
            imgSrc='public\LW2\vacuumGauge.svg'
            value={vacuum}
          />
          <MeasuringInstrumentFrame
            device='flowMeter'
            imgSrc='public\LW2\flowMeter.svg'
            value={rashod}
          />
          <MeasuringInstrumentFrame
            device='wattmeter'
            imgSrc='public\LW2\wattmeter.svg'
            value={power}
          />
        </div>
        <div>
          <div className='forms'>
            <div className='forms__rashod'>
              <div>Введите подачу [м³/c]:</div>
              <input onChange={(e) => setRashod(e.target.value)}></input>
              <button onClick={() => animate(+rashod)}>Симуляция процесса</button>
            </div>
            <div className='forms__rashod'
              style={{
                border: (styleSwitcher ?
                  '4px solid green' : '1px solid black'
                )
              }}
            >
              <div>Введите КПД [%]:</div>
              <input onChange={(e) => setKpd(+e.target.value)}></input>
              <button onClick={() => kpdCheck(kpd)}>Проверить расчёт</button>
            </div>
          </div>
          {switcher && <LineChartComp variant={dataValue} />}
        </div>
      </div>
    </>
      {isModalActive && (
        <Modal title="" onClose={handleModalClose}>
          <VariantInput />
        </Modal>
      )}
    </div>

  )
}

export default SecondLW