import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

const Pdfviewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 whenever pdfUrl changes
  }, [pdfUrl]);

  return (
    <div className="inner-div">
      <Document file="./sample-PDF.pdf" onLoadSuccess={handleDocumentLoadSuccess}>
        <Page pageNumber={currentPage} />
      </Document>
      <div>
        <p>
          Page {currentPage} of {numPages}
        </p>

        <div className="buttons">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage >= numPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pdfviewer;
