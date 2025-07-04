import React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Inject
} from '@syncfusion/ej2-react-pdfviewer';

import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-pdfviewer/styles/material.css';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <PdfViewerComponent
        id="pdfViewer"
        documentPath="https://file-examples.com/wp-content/uploads/2017/10/file-sample_150kB.pdf"
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Inject services={[
          Toolbar, Magnification, Navigation, Annotation,
          LinkAnnotation, BookmarkView, ThumbnailView,
          Print, TextSelection, TextSearch
        ]} />
      </PdfViewerComponent>
    </div>
  );
}

export default App;
