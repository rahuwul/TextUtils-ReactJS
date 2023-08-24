import React, {useState} from 'react' /* useState is a HOOK */
import copy from "copy-to-clipboard";
import PropTypes from'prop-types';

export default function (props) {
  const [copyText, setCopyText] = useState('');
  const[text,setText]=useState('');
  /* SYNTAX for changing text: setText("newtext") */
  const upCase=(event)=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const lowCase=(event)=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const copyTo=()=>{
    copy(text);
    props.showAlert("Text Copied !!","success");
  }
  const clear=()=>{
    setText("")
  }
  const countWord=()=>{
    return text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
  }

  const handleOnChange=(event)=>{ /* event refers to change event */
  setText(event.target.value);/* video#7 */
  }
  return (
    <>
    <div className='container my-3'><div className="mb-3">
    <h2 style={{color:props.mode==='light'?'#010101':'#FFFFFF'}}>{props.heading}</h2>
    <textarea className="form-control" style={{backgroundColor : props.mode==='light'?'#FEF9F3':'#171717',color:props.mode==='light'?'#010101':'#FFFFFF'}} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} placeholder='Start typing...'></textarea>
  </div>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'outline-light'} mx-2 my-1`}  onClick={upCase} type="button">Convert To Uppercase</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'outline-light'} mx-2 my-1`} onClick={lowCase} type="button">Convert To Lowercase</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'outline-light'} mx-2 my-1`} onClick={copyTo} type="button">Copy</button>
  <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'outline-light'} mx-2 my-1`} onClick={clear} type="button">Clear</button>
  </div>
   <div className='container my-4' style={{color:props.mode==='light'?'#010101':'#FFFFFF'}} >
    <h2>Text Review</h2>
    <p><b>{countWord()}</b> words, <b>{text.length}</b> characters</p> {/* text.split(" ").length gives an array of words */}

    <p>Average Read: <b>{countWord()*0.005}</b> Minutes</p>
   </div>
   </>
  )
}

