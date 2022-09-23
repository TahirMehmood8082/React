import React from 'react'
import {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log('upper btn clicked')
        setText(text.toUpperCase())
        props.showAlert("converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        console.log('upper btn clicked')
        setText(text.toLowerCase())
        props.showAlert("converted to lowercase", "success")
    }
    const handleClear = ()=>{
        console.log('upper btn clicked')
        setText('')
    }
    
    const handleOnChange = (e)=>{
        console.log('On Change')
        setText(e.target.value)
    }
    //Credits: A
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        //when copy text -text not selected
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success")
    }

    //Credits: Coding wala
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter Text here');
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleClear}>clear</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleCopy}>copy</button>
        <button disabled={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>extra spaces</button>
        </div>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        {/* this filter code stops spaces to be count in words */}
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
