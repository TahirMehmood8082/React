import { toHaveTextContent } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper btn clicked')
        setText(text.toUpperCase())
    }
    const handleLoClick = ()=>{
        console.log('upper btn clicked')
        setText(text.toLowerCase())
    }
    const handleOnChange = (e)=>{
        console.log('On Change')
        setText(e.target.value)
    }
    
    const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to Lowercase</button>
        </div>

    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
