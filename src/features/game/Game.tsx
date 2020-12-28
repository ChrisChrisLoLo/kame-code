import React, { useState } from 'react';
import { GameCanvas } from '../GameCanvas'

import AceEditor from "react-ace";

// for javascript 
// https://github.com/securingsincity/react-ace/issues/725#issuecomment-543109155

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

import { runInterpreter } from '../../logic/tslox/lox';

export function Game() {
  const [code, setCode] = useState('');
  const [worldData, setWorldData] = useState({
    'world': [[]]
  });

  function onEditorChange(newValue: string) {
    setCode(newValue);
  }

  function runCode() {
    runInterpreter(code);
  }

  return (
    <div className="flex">
      <GameCanvas />
      <div>
        <AceEditor
          mode="python"
          theme="monokai"
          onChange={onEditorChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
        <button onClick={runCode} className="bg-green-200">
          Run
        </button>
      </div>
    </div>
  )
}