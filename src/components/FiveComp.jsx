import React from 'react' 
import { useState } from "react"; 

function FiveComp() {
    const [input, setInput] = useState(''); 
return(
    <>
        <div className="app-main"> 
            <div className='flex-c'> 
                <div className='left-side'>
                    <h1>Content Ideas</h1> 
                    <textarea className='app-input'  
                        cols={75} 
                             rows={10}
                            placeholder='Enter your question here' 
                            onChange={(e) => setInput(e.target.value)} 
                     /> 
                    <br /> 
                    <button >Submit</button> 
                </div>
                <div className="right-side">
                     {/* <h3 className="result-text">{result.length > 0 ? result : ""}</h3>  */}
                </div>
            </div> 
            <hr /> 
            <div className='flex-c'> 
                <div className='left-side'>
                    <h1>Screenplay suggestions</h1> 
                    <textarea className='app-input'  
                        cols={75} 
                             rows={10}
                            placeholder='Enter your question here' 
                            onChange={(e) => setInput(e.target.value)} 
                     /> 
                    <br /> 
                    <button >Submit</button> 
                </div>
                <div className="right-side">
                     {/* <h3 className="result-text">{result.length > 0 ? result : ""}</h3>  */}
                </div>
            </div> 
            <hr /> 
            <div className='flex-c'> 
                <div className='left-side'>
                    <h1>Key keywords</h1> 
                    <textarea className='app-input'  
                        cols={75} 
                             rows={10}
                            placeholder='Enter your question here' 
                            onChange={(e) => setInput(e.target.value)} 
                     /> 
                    <br /> 
                    <button >Submit</button> 
                </div>
                <div className="right-side">
                     {/* <h3 className="result-text">{result.length > 0 ? result : ""}</h3>  */}
                </div>
            </div> 
        </div> 
         
    </>
)
}
export default FiveComp;