import React from 'react'
import './App.css'
import AsideUserInterface from './components/AsideUserInterface'
import FirstLW from './components/FirstLW/FirstLW'
import MyButton from './components/MyButton'
import SecondLW from './components/SecondLW/SecondLW'
import { useAppDispatch, useAppSelector } from './hooks/redux'
import { LWSlice } from './store/reducers/LWSlice'

const App: React.FC = () => {
  const dispatch = useAppDispatch()
  const { number } = useAppSelector(state => state.LWReducer)

  switch (number) {
    case 1:
      return (
        <div id='App' className='app'>
          <AsideUserInterface />
          <FirstLW />
        </div>
      )
    case 2:
      return (
        <div id='App' className='app'>
          <AsideUserInterface />
          <SecondLW />
        </div>
      )
    default:
      return (
        <div id='App' className='app'>
          <AsideUserInterface />
          <h1>Выберите лабораторную работу:</h1>
          <div className='app__content'>

            <MyButton
              inscription='Выбор центробежного насоса, построение схемы насосной установки'
              uniqueClass='app__content__button'
              propFunc={() => dispatch(LWSlice.actions.numberSelection(1))}
            />
            <MyButton
              inscription='Определение КПД насоса и построение его графической характеристики'
              uniqueClass='app__content__button'
              propFunc={() => dispatch(LWSlice.actions.numberSelection(2))}
            />
          </div>
        </div>
      )
  }
}
export default App