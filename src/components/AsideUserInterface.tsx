import React from 'react'
import StudentInfo from './StudentInfo'
import MyButton from './MyButton'
import PrintButton from './PrintButton';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { LWSlice } from '../store/reducers/LWSlice';
import Hint from './Hint';

const AsideUserInterface: React.FC = () => {
    const dispatch = useAppDispatch()
    const { number } = useAppSelector(state => state.LWReducer)


    return (
        <aside className='aside-interface'>
            <StudentInfo />
            <PrintButton />

            {number ? <MyButton
                inscription='К выбору лабораторной работы'
                propFunc={() => dispatch(LWSlice.actions.reset())}
            /> : <></>}
            <Hint />

        </aside>
    )
}

export default AsideUserInterface