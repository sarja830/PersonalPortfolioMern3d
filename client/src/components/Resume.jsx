import React, {useState} from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Typed from 'react-typed';
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {resume} from "../assets/index.js";
// import {Document,Page,pdfjs} from 'react-pdf';

import {Document, Page, PDFDownloadLink, StyleSheet, Text, View} from "@react-pdf/renderer";
import React from "react";
import {pdfjs} from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});



const Resume = () => {

    const MyDoc = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Section #1</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    );

    return (



    <div>
        <PDFDownloadLink
            className=" bg-slate-600"
            document={<MyDoc />}
            fileName={resume}
        >
            {
                ({
                  blob, url, loading, error }) =>

                <button className=" bg-slate-500">Download now!</button>
                )
            }
        </PDFDownloadLink>
    </div>

    );
};

export default SectionWrapper(Resume, "resume");