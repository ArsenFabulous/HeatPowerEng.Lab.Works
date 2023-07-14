import React, { useState } from 'react'

const Hint: React.FC = () => {
    const [switcher, setSwitcher] = useState<boolean>(true)
    return (<>
        <button onClick={() => setSwitcher(!switcher)}>{switcher ? 'Убрать подсказку' : 'Показать подсказку'}</button>
        {switcher
            && <ul className='hint__list'>
                <li>Все десятичные значения вводить с точкой "."</li>
                <li>
                    <ul> 1 ЛР
                        <li>Для выполнения первого этапа ввести:
                            <img className='hint__list__img' src='https://github.com/ArsenFabulous/HeatPowerEng.Lab.Works/blob/main/public/LW1/Complete.jpg?raw=true' />
                        </li>
                        <li>В таблице выбрать насос X45/54</li>
                    </ul>
                    <ul>    2 ЛР
                        <li>Для снятия показаний поочерёдно ввести 5 значений Подачи: 0.001, 0.002, 0.003, 0.004, 0.005. При этом показатели приборов будут меняться (на приборы нужно навестись мышкой).</li>
                        <li>Для выполнения поочерёдно ввести КПД: 20, 40, 51, 56, 50 </li>
                    </ul>
                </li>
            </ul>
        }
    </>
    )
}

export default Hint