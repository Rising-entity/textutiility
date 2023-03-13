import React, { useState } from 'react'


export default function TextForm
    (props) {
    function uppercase() {
        // console.log("upercase");
        let newText = text.toUpperCase();
        setText(newText);
    }
    function lowercase() {
        // console.log("upercase");
        let newText = text.toLowerCase();
        setText(newText);
    }
    function deleteText() {
        setText("");
    }
    function handleOnChange(event) {
        // console.log("onChange");
        setText(event.target.value);//text+change  simply we can change the value by this statement
        // console.log(text);
    }

    const [text, setText] = useState("enter text here");

    return (
        <>
            <div className="mb-3">
                <h1 style={{ color:props.mode==="dark"?"white":"black" }}>{props.heading}</h1>
                <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==="dark"?"#43519c":"white",color:props.mode==="dark"?"white":"black"}} ></textarea>
                <button className='btn btn-primary mx-2' onClick={uppercase}> convert to uppercase</button>
                <button className='btn btn-primary mx-2' onClick={lowercase}> convert to lowercase</button>
                <button className='btn btn-primary mx-2' onClick={deleteText}>delete text</button>
            </div>
            <div className="container">
                <h1 style={{ color:props.mode==="dark"?"white":"black" }}>your text summry</h1>

                <p style={{ color:props.mode==="dark"?"white":"black" }}>{text.split(" ").length} words  and  {text.length} charachters</p>
                <p style={{ color:props.mode==="dark"?"white":"black" }}>{0.008 * (text.split(" ").length)} minute read words</p>
                <h2 style={{ color:props.mode==="dark"?"white":"black" }}>preview</h2>
                {/* <p style={{ color:props.mode==="dark"?"white":"black" }}>{text===" "?"enter something to textbox above to preview it here":{text}}</p>error inside */} 
                <p style={{ color:props.mode==="dark"?"white":"black" }}>{text.length>0?text:"write something inside textbox above to preview it here"}</p>

            </div>
        </>

    )
}
