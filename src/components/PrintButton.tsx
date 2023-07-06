import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReactComponent as PdfLogo } from '../assets/download-pdf-icon.svg';

const PrintButton: React.FC = () => {
    const exportPDF = () => {
        const input = document.getElementById('App')!
        html2canvas(input, {
            logging: true,
            letterRendering: 1,
            useCORS: true
        })
            .then(canvas => {
                const imgWidth = 208;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                const imgData = canvas.toDataURL('img/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
                pdf.save('Лабораторная работа.pdf')
            })
    }
    return (
        <button onClick={() => exportPDF()} className='PrintButton'>Сохранить
            <PdfLogo style={{ width: '28', marginLeft: '10'}} />
        </button>
    )
}

export default PrintButton