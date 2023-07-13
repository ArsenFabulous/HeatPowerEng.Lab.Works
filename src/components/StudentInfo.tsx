import React from 'react'

const StudentInfo: React.FC = () => {
    return (
        <div className='student-info'>
            <label> Фамилия <input /></label>
            <label> Имя     <input /></label>
            <label> Отчество<input /></label>
            <label> Группа  <input /></label>
        </div>
    )
}

export default StudentInfo