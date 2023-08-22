import React from 'react';

const PdfViewer = ({ pdfUrl }) => {
  const downloadPdf = () => {
    let file = pdfUrl.split("/");
    let last = file[file.length - 1];
    let fileByDot = last.split(".");
    let lastByDot = fileByDot[0];
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = lastByDot; // Specify the desired filename for the downloaded PDF
    link.click();
  };

  return (
    <h5 className="blur" onClick={downloadPdf}>
      <a className='pointer blur'>Click to Download Brochure</a>
    </h5>
  );
};

export default PdfViewer;
