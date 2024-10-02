'use client'

import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';

const Editor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: '',
                language: 'javascript',
                theme: 'vs-dark',
            });

            // TODO: Implement synchronization logic here

            return () => {
                editor.dispose();
            };
        }
    }, []);

    return <div ref={editorRef} style={{ height: '100vh', width: '100%' }} />;
};

export default Editor;
