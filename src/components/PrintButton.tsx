import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ReactComponent as PdfLogo } from '../assets/download-pdf-icon.svg';

const PrintButton: React.FC = () => {
    const exportPDF = () => {
        const input = document.getElementById('root')!
        html2canvas(input, {
            logging: true,
            useCORS: true,
            allowTaint: true,
        })
            .then(canvas => {
                const pdf = new jsPDF('l', 'mm', 'a4');
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                const imgData = canvas.toDataURL('img/png');
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save('Лабораторная работа.pdf')
            })
    }
    return (
        <button onClick={() => exportPDF()} className='PrintButton'>Сохранить
            <PdfLogo style={{ width: '28', marginLeft: '10' }} />
        </button>
    )
}

export default PrintButton