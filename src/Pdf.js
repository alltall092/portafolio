import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import pdf from './pdf.pdf';



export default function Pdf() {
  return(
  <PDFViewer
  document={{
      url:'https://drive.google.com/file/d/1kz0anOz93KDE-0uDVvcbpI3f38tvRGcU/view?usp=sharing',
      
  }}
/>
);
}