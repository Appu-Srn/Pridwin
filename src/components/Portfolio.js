import React , { Component } from 'react'
import { Document, Page} from 'react-pdf';

import Pridwin_CV from '../Images/Pridwin_CV.pdf'
// PDFJS.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

export default class Portfolio extends Component {
    state = {
        numPages: null,
        pageNumber: 1,
      }

      onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
      }

    render() {
       
         const { pageNumber, numPages } = this.state;
 
    return (
      <div>
        <Document
          file={Pridwin_CV}
          onLoadSuccess={this.onDocumentLoadSuccess}
          onLoadError ={(error) => alert('Error while loading document! ' + error.message)}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    );
        
    }
}


