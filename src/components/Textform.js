import React,{useState} from 'react'



export default function Textform(props) {

    const handleUpClick = ()=> {
        console.log("hey everyone");
        let newText = text.toUpperCase();
        settext(newText)
    }

    const handleloClick = ()=> {
        console.log("hey everyone");
        let newText = text.toLowerCase();
        settext(newText)
    }

    const handleclClick = ()=> {
        console.log("hey everyone");
        let newText = "";
        settext(newText)
    }

    const handleReverse = ()=> {
        console.log("hey everyone");
        let str = text.split("");
        str = str.reverse();
        let newtext = str.join(""); 
        settext(newtext)
    }
    

    const Handlechange = (event)=> {
        console.log("On change")
        settext(event.target.value);
    }

    const [text, settext] = useState("");
    // settext("hey everyone");

  return (
   <>
        <div className='container'>
            <h2 className='my-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={Handlechange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lower case</button>
            <button className="btn btn-primary mx-2" onClick={handleclClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverse}>Bold</button>
        </div>

        <div className="container">
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
   </>
  )
}
