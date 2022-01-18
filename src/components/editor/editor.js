import React, { useState, useEffect } from 'react';
import './editor.css';

const Editor = ({editorInput}) => {
    const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other thing my app can do:

You can input list items:
- List Item 1
- List Item 2

> Use Block Quotes!

Use inline code like this! \`<div></div>\`

Or even code blocks like this:

\`\`\`
    const x = 5
    x++
    console.log(x)
\`\`\`

You can also make text **BOLD!!!**

There's also links!!! [Visit my website](https://www.dev-nexus.com)

and images

![my image](https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80)

    `)

    useEffect(() => {
        editorInput(markdown)
    }, [editorInput, markdown, setMarkdown])


    const editorChangeHandler = (event) => {
        setMarkdown(event.target.value);
    }


    return (
        <textarea id='editor' className={`editor-input mb-5`} onChange={editorChangeHandler} value={markdown}></textarea>
    );
};

export default Editor;