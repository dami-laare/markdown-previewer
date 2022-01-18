import React from 'react';
import './App.css';
import Editor from './components/editor/editor';
import Previewer from './components/previewer/previewer';
import { marked } from 'marked';

function App() {

  const [markdown, setMarkdown] = React.useState('')

  const editorValue = (value) => {
    setMarkdown(marked(value))
  } 
  return (
    <div className={`container-fluid main-container py-5`}>
      <h1 className='mb-5'>MARKDOWN PREVIEWER</h1>
      <Editor editorInput={editorValue}/>
      <Previewer markdown={markdown} />
    </div>
  );
}

export default App;
