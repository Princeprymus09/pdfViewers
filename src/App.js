import './App.css';
import Pdfviewer from './components/pdfviewer';

function App() {
  const pdfUrl = 'https://www.africau.edu/images/default/sample.pdf'; // Replace with your PDF URL

  return (
    <div>
      <h1 className='heading'>PDF Viewer App</h1>
      <Pdfviewer pdfUrl={pdfUrl} />
    </div>
  );
}

export default App;
