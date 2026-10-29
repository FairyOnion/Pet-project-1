import './event-order-styles.css'
import { useState } from 'react'

export default function EventOrder() {

    const [isExplanationVisible, setIsExplanationVisible] = useState(false);
    const [outputedCode, setOutputedCode] = useState('None');
    let codeToOutput = ''
    function handleGenerateCode () {
        codeToOutput = '';
        setTimeout(() => {codeToOutput += '1'}, 0);
        codeToOutput += '2';
        Promise.resolve().then(() => {codeToOutput += '3'})
        codeToOutput += '4';
        //Display logic
        setTimeout(() => {setOutputedCode(codeToOutput)}, 0);
    }

    function handleOpenExplanation () {
        setIsExplanationVisible(!isExplanationVisible);
    }

    return (
        <div id='event-zone'>
            <h2>Event Order</h2>
            <p id='code-label' className='something-p'>The code to be executed:</p>
            <pre id='event-pre'>
                <code id='event-code-snippet'>
                    setTimeout(() =&gt; {"console.log('1')"}, 0);<br/>
                    console.log('2');<br/>
                    Promise.resolve().then(() =&gt; {"console.log('3')"})<br/>
                    console.log('4');
                </code>
            </pre>
            <button id='run-code-btn' onClick={handleGenerateCode}>Run the code</button>
            <p>Expected output: <span className='code-span'>2431</span></p>
            <p>Output: <span className='code-span'>{outputedCode}</span></p>
            <p id='open-explanation-text' onClick={handleOpenExplanation}>Explanation 
                <span> {isExplanationVisible ? <>&#9650;</> : <>&#x25BC;</>}</span>
            </p>
            {isExplanationVisible && (
                <p id='code-snippet-explanation'>Code is divided into synchronous and asynchronous.
                First, all synchronous code is executed, so <code>console.log</code> statemenents run before.
                Only after all synchronous code is completed, asynchronous code execution starts.
                It is also divided to microtasks and macrotasks. Microtask are the first to execute.
                When all of them are finished macrotasks are executed. Therefore <code>Promise.resolve</code>
                (microtask) is completed before <code>setInterval</code>(macrotask).
                </p>
            )} 
        </div>
    )
}