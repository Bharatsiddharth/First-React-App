import React,{useState} from 'react'



export default function Textform(props) {

    const handleUpClick = ()=> {
        // console.log("hey everyone");
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("converted to uppercase", "success");
    }

    const handleloClick = ()=> {
        // console.log("hey everyone");
        let newText = text.toLowerCase();
        settext(newText)
        props.showAlert("converted to lower", "success");
    }

    const handleclClick = ()=> {
        // console.log("hey everyone");
        let newText = "";
        settext(newText)
        props.showAlert("Clear text", "success");
    }

    const handleReverse = ()=> {
       let str = text.split("");
       str = str.reverse();
       let newstr = str.join("");
       settext(newstr);
       props.showAlert("Reverse Word ", "success");

    }

    const handleCopy = ()=> {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard", "success");
    }

    const handleExtraspace = () => {
        var newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showAlert("Extra space remove", "success");
    }


    const Handlechange = (event)=> {
        // console.log("On change")
        settext(event.target.value);
    }

    const [text, settext] = useState("");
    // settext("hey everyone");

  return (
   <>
        <div className='container' style={{color: props.mode === 'dark'?'white' :'black'}}>
            <h2 className='my-4'>{props.heading}</h2>
            <div className="mb-3" >
                <textarea className="form-control" value={text}  style={{backgroundColor:props.mode === 'dark'?'lightblue' :'white', color: props.mode === 'dark'?'white' :'black'}} onChange={Handlechange} id="myBox" rows="10" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Convert To Lower case</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleclClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleReverse}>Revese Word</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraspace}>Remove Extra Space</button>
        </div>

       
        <div className="container" style={{color: props.mode === 'light'?'black' :'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.trim().split(/\S+/).length - 1} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to priview"}</p>
        </div>
   </>
  )
}
