import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { LWSlice } from '../store/reducers/LWSlice'


const VariantInput: React.FC = () => {
    const { variant } = useAppSelector(state => state.LWReducer)
    const dispatch = useAppDispatch();
    return (
        <div className='variant'>
            <h2>Выберите номер варианта:</h2>
            <select
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
            </select>
        </div>
    )
}

export default VariantInput