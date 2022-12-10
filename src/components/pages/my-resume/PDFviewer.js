import React from "react";
import resume from "./resume.module.css";
import { PictureAsPdf } from "@mui/icons-material";
//import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import "./pdf.css";
import { useEffect } from "react";
import LoadingSpinner from "../../helpers/LoadingSpinner";

//import { pdfjs } from 'react-pdf';
//pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function PDFviewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [fileurl, setFileurl] = useState("");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => pageNumber + offSet);
  }

  function changePageBack() {
    if (pageNumber > 1) {
      changePage(-1);
    } else {
    }
  }

  function changePageNext() {
    if (pageNumber < numPages) {
      changePage(+1);
    } else {
    }
  }
  function fetchpdf() {
    try {
      fetch(
        "https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
      ).then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          setFileurl(fileURL);

          // Setting various property values
        });
      });
    } catch (error) {
      console.log("pdfviewer", error);
      setFileurl("failed");
    }
  }

  useEffect(() => {
    fetchpdf();
  }, []);

  return (
    <>
      <div className={resume.pdfBox}>
        {/* <iframe
          id="Iframe"
          className={resume.frame}
          title="resume"
          src="https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
        /> */}
        {fileurl === "" ? (
          <div className={resume.spinnerContainer}>
            <LoadingSpinner />
          </div>
        ) : fileurl === "failed" ? (
          <div className={resume.spinnerContainer}>
            <p>
              Failed to load
              <br />
              Refresh the page or download a copy
            </p>
          </div>
        ) : (
          <object
            type="application/pdf"
            className={resume.pdfObject}
            // data="https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
            data={fileurl}
            aria-label="Resumepdf"
          />
        )}
        {/* <Document
          // file="https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page className={resume.page} pageNumber={pageNumber} />
        </Document>
        <div className={resume.pdfExtras}>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <div className={resume.buttons}>
            <p
              className={pageNumber > 1 ? resume.whiteColor : resume.greyColor}
              onClick={changePageBack}
            >
              <ImArrowLeft />
            </p>

            <p
              className={
                pageNumber < numPages ? resume.whiteColor : resume.greyColor
              }
              onClick={changePageNext}
            >
              <ImArrowRight />
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default PDFviewer;
