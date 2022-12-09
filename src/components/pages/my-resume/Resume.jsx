import React from "react";
import { StyledContainer } from "../../styled/containers/StyledContainer";
import resume from "./resume.module.css";
import { PictureAsPdf } from "@mui/icons-material";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import "./pdf.css";
import { useEffect } from "react";

//import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [file, setFile] = useState();

  // useEffect(() => {
  //   fetch("resume.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);
  //       setFile(fileURL);
  //     });
  //   });
  // }, []);

  // const [file, setFile]=("./resume.pdf");
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
  const HandlePdf = () => {
    try {
      fetch(
        "https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
      ).then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Ikenna_Chike_Obi.pdf";
          alink.click();
        });
      });
    } catch (error) {
      console.log("pdfviewer", error);
    }
  };

  return (
    <main className={resume.main}>
      <StyledContainer>
        <div className={resume.container}>
          <div className={resume.pdfBox}>
            <Document
              file="https://res.cloudinary.com/jibz/image/upload/v1670576135/docs/Joshua_Chike_Resume_rf1ypx.pdf"
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
                  className={
                    pageNumber > 1 ? resume.whiteColor : resume.greyColor
                  }
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
            </div>
          </div>

          <div id="download" className={resume.file} onClick={HandlePdf}>
            Download a copy <PictureAsPdf style={{ color: "red" }} />
          </div>
        </div>
      </StyledContainer>
    </main>
  );
}

export default Resume;
