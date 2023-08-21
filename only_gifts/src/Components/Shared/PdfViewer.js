import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  const openPdfInNewTab = () => {
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
    
    // Create an invisible <a> element for downloading
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfUrl;
    downloadLink.download = 'your-pdf-filename.pdf'; // Set the desired filename
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <h5 className="blur" onClick={openPdfInNewTab}><a className='pointer blur'>Click to Download Brochure </a> </h5>
  );
};

export default PdfViewer;
