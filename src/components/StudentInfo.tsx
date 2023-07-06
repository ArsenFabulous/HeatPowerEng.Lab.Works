import React from 'react'

const StudentInfo: React.FC = () => {
    return (
        <div className='student-info'>
            <label> Фамилия
                <input></input>
            </label>
            <label > Имя
                <input></input>
            </label>
            <label> Отчество
                <input></input>
            </label>
            <label> Группа
                <input></input>
            </label>
        </div>
    )
}

export default StudentInfo