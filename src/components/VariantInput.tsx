import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { LWSlice } from '../store/reducers/LWSlice'

interface Props {
    numberOfVariants: number,
}

const VariantInput: React.FC<Props> = ({ numberOfVariants }) => {
    const { variant } = useAppSelector(state => state.LWReducer)
    const dispatch = useAppDispatch();
    return (
        <div className='variant'>
            <h2>Введите номер варианта:</h2>
            <select
                size={numberOfVariants}
                value={variant}
                onChange={(e) => dispatch(LWSlice.actions.variantSelection(+(e.target.value)))}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
            </select>
            <button onClick={()=> console.log(variant)} >Подтвердить</button>
        </div>
    )
}

export default VariantInput