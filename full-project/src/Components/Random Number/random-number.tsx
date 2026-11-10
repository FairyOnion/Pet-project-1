import './random-number-styles.css'
import {useState} from 'react'

export default function RandomNumGenerator () {

    const[minNum, setMinNum] = useState(1);
    const[maxNum, setMaxNum] = useState(3);
    const[generatedNum, setGeneratedNum] = useState<number | null>(null);

    function handleGeneration ():number {
        const returnedNum: number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        setGeneratedNum(returnedNum);
        return returnedNum
    }

    return (
        <div id='random-num-zone' className='grid-tile-first-row'>
          <h2>Random Number Generator</h2>
          <p>Pick minimum and maximun numbers, then click 'Generate' button</p>
          <div id='num-labels-container'>
            <label className='generate-num-label'>Minimum Number: 
                <input onChange={(e) => {setMinNum(Number(e.target.value))}} type='number' id='min-num' className='generate-num-input' defaultValue='1'/>
            </label>
            <label className='generate-num-label'>Maximum Number: 
                <input onChange={(e) => {setMaxNum(Number(e.target.value))}} type='number' id='max-num' className='generate-num-input' defaultValue='3'/>
            </label>
          </div>
          <button id='generate-num-btn' onClick={handleGeneration}>Generate</button>
          <h3 id='output'>{generatedNum ? generatedNum : "Output will be here"}</h3>
        </div>
    )
}