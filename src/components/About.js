import React from 'react'
// import { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState(
    //     {
    //         color: 'black',
    //         backgroundColor:"white"
    //     }
    // );

    let mystyle = {
        color:props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'#13135f':'white',
        // border: '1px solid',
        borderColor: props.mode === 'dark'?'white':'black',
    }

    // const [btntext, setBtnText] = useState("Enable Dark Mode");
    

    // const toogleStyle = ()=> {
    //     if(mystyle.color === 'black'){
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor:"black"
    //         }) 
    //         setBtnText("Enable Light Mode")
    //     } else{
    //         setMystyle({
                
    //                 color: 'black',
    //                 backgroundColor:"white"
                
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
    

  return (
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header" >
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum odit obcaecati cupiditate officia ex!
                </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={mystyle} aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" >
                <div className="accordion-body" >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae praesentium consequatur deleniti expedita, eum dolorem! Dolorum amet error optio dicta, quidem quo vero odit cum, rerum delectus modi est fugit!
                </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={mystyle} aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatable</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, est.
                </div>
                </div>
            </div>
      </div>
     
    </div>
  )
}
