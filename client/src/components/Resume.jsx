
import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { resume } from "../assets";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [width, setWidth] = useState(100);


        useEffect(() => {

            setWidth(window.innerWidth);
        }, []);

        return (
            <div fluid className="container mx-auto">

                <a href={"https://drive.google.com/file/d/1qte9396ENtaz2Lx_0T4CvE3bgBlXOX_c/view?usp=sharing"} target="_blank"
                   rel="noreferrer">
                    Open Second PDF
                </a>
                <div className="grid grid-rows-1 grid-flow-col gap-4">

                <Document file={resume} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.0 : 0.6} />
                    </Document>
                </div>
            </div>
        );
    };


export default SectionWrapper(Resume, "resume");