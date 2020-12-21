import React, { useState } from 'react';

import { runInterpreter } from '../logic/tslox/lox';

export function Interpreter() {
    const [code, setCode] = useState('');

    return(
        <div>
            <textarea value={code} onChange={(e)=>setCode(e.target.value)}></textarea>
            <button onClick={()=>runInterpreter(code)}>Run</button>
        </div>
    )
}