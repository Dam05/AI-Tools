import React from 'react' 
import { Configuration, OpenAIApi } from "openai"; 
import { useState } from "react"; 
import './Try.css'
import ScriptSuggestion from './components/ScriptSuggestion';
import FiveComp from './components/FiveComp';
 
function Try() { 
//   console.log("inside Try", import.meta.env.VITE_Open_AI_Key); 
  const [prompt, setPrompt] = useState(''); 
  const [result, setResult] = useState(''); 
  const [gramer, setGramer] = useState(''); 
  const [summery, setSummery] = useState(''); 
  const [language, setLanguages] = useState('');
  const [emoji, setEmojis] = useState('');
  const [code, setCode] = useState('');
  const [jstopy, setJstopython] = useState('');
  const [generateideas, setGenerateideas] = useState('');
  const [image, setImage] = useState('');
  const configuration = new Configuration({ 
    apiKey: import.meta.env.VITE_Open_AI_Key, 
  }); 
 
  const openai = new OpenAIApi(configuration); 
 
  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    setImage(res.data.data[0].url);
    console.log(setImage)
}
 

const question = async () => { 
    const res = await openai.createCompletion({ 
      model:  "text-davinci-003", 
  prompt:  prompt, 
  temperature: 0, 
  max_tokens: 100, 
  top_p: 1, 
  frequency_penalty: 0.0, 
  presence_penalty: 0.0 
    }); 
    console.log(res) 
    setResult(res.data.choices[0].text); 
  } 
  const grammer = async () => { 
    const res = await openai.createCompletion({ 
      model: "text-davinci-003", 
        temperature: 0, 
        max_tokens: 100, 
        top_p: 1, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setGramer(res.data.choices[0].text); 
  } 
  const summerize = async () => { 
    const res = await openai.createCompletion({ 
      model: "text-davinci-003", 
        temperature: 0.7, 
        max_tokens: 64, 
        top_p: 1.0, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setSummery(res.data.choices[0].text); 
  } 
  const translate = async () => { 
    const res = await openai.createCompletion({ 
      model: "text-davinci-003", 
        temperature: 0.3, 
        max_tokens: 100, 
        top_p: 1.0, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setLanguages(res.data.choices[0].text); 
  } 
  const convertemojis = async () => { 
    const res = await openai.createCompletion({ 
      model: "text-davinci-003", 
        temperature: 0, 
        max_tokens: 100, 
        top_p: 1, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setEmojis(res.data.choices[0].text); 
  } 
  const explainCode = async () => { 
    const res = await openai.createCompletion({ 
      model: "code-davinci-002", 
        temperature: 0, 
        max_tokens: 64, 
        top_p: 1.0, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setCode(res.data.choices[0].text); 
  } 
  const jstoPython = async () => { 
    const res = await openai.createCompletion({ 
      model: "code-davinci-002", 
        temperature: 0, 
        max_tokens: 64, 
        top_p: 1.0, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setJstopython(res.data.choices[0].text); 
  } 
  const generateIdeas = async () => { 
    const res = await openai.createCompletion({ 
        model:"text-davinci-003", 
        temperature: 0.3, 
        max_tokens: 150, 
        top_p: 1.0, 
        frequency_penalty: 0.0, 
        presence_penalty: 0.0, 
  prompt:  prompt, 
    }); 
    console.log(res) 
    setGenerateideas(res.data.choices[0].text);
}  
  return ( 
    <> 
    <hr />
   <ScriptSuggestion />

   <hr />
   <FiveComp />
   <hr />
   <div className="generateImage">
    <div className="flex-c">
        <div className="left-side">
        <h1>Generate an image using Open AI API</h1>
        <input className='app-input1' 
        placeholder='Burger dancing on the road oil painting...'
        onChange={(e) => setPrompt(e.target.value)}
        />
        
        <button onClick={generateImage}>Generate an image</button>
        </div>
        <div className="right-side">
      {result.length > 0 ? <img className="result-image" src={image} alt="result" /> : <></>}
      </div> 
    </div>
  </div>
   <hr />
    <div className="app-main"> 
      <div className='flex-c'> 
        <div className='left-side'>
      <h2>Question & Answer</h2> 
      {/* <h4>Answer questions based on existing knowledge</h4>  */}
      <textarea className='app-input'  
      cols={75} 
      rows={10}
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
      <br /> 
      <button onClick={question}>Submit</button> 
      </div>
    {/* {result.length > 0 ? <img className="q&a-output" src={result} alt="result" /> : <></>} */}
    <div className="right-side">
    <h3 className="result-text">{result.length > 0 ? result : ""}</h3> 
   </div>
    </div> 
  </div> 
  <hr /> 
  <div className='grammer-correction'> 
  <div className='flex-c'> 
        <div className='left-side'>
      <h2>Grammer Correction</h2> 
      <h4>Corrects sentences into standard English.</h4> 
      <textarea className='app-input'  
      cols={75} 
      rows={10} 
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
      <br /> 
      <button onClick={grammer}>Submit</button> 
      </div>
      <div className="right-side">
    <h3 className="result-text">{gramer.length > 0 ? gramer : ""}</h3> 
    </div> 
    </div>
    </div>
    <hr /> 
  <div className='summerize'> 
  <div className='flex-c'> 
        <div className='left-side'>
      <h1>Summarize for a 2nd grader</h1> 
      <h4>Translates difficult text into simpler concepts.</h4> 
      <textarea className='app-input'  
      cols={75} 
      rows={10} 
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
      <br /> 
      <button onClick={summerize}>Submit</button> 
      </div>
      <div className="right-side">
    <h3 className="result-text">{summery.length > 0 ? summery : ""}</h3> 
    </div> 
    </div></div>
    <hr /> 
  <div className='translate'> 
  <div className='flex-c'> 
        <div className='left-side'>
      <h1>English to Other languages</h1> 
      <h4>Translates English text into French, Spanish and Japanese.</h4> 
      <textarea className='app-input'  
      cols={75} 
      rows={10} 
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
      <br /> 
      <button onClick={translate}>Submit</button> 
      </div>
    <div className='right-side'>

    <h3 className="result-text">{language.length > 0 ? summery : ""}</h3> 
    </div> 
    </div>
</div>
    <hr /> 
  <div className='convertemojis'> 
    <div className='flex-c'> 
      <div className='left-side'>
        <h2>Movie to Emoji</h2> 
        < h4>Convert movie titles into emoji.</h4> 
        <textarea className='app-input'  
        cols={75} 
        rows={10}
        placeholder='Enter your question here' 
        onChange={(e) => setPrompt(e.target.value)} 
        /> 
        <br /> 
       <button onClick={convertemojis}>Moive To Emoji</button>
        </div>
        <div className='right-side'>
        <h3 className="result-text">{emoji.length > 0 ? summery : ""}</h3> 
      </div>
     </div>
    <hr /> 
  <div className='explainCode'> 
  <div className='flex-c'> 
        <div className='left-side'>
      <h2>Explain Code</h2> 
      <h4>Explain a complicated piece of code.</h4> 
      <textarea className='app-input'  
      cols={75} 
      rows={10} 
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
      <br /> 
      <button onClick={explainCode}>Explain Code</button> </div>
    <div className='right-side'>
    <h3 className="result-text">{code.length > 0 ? summery : ""}</h3>  
    </div>
    </div>
    <hr />
    <div className='jstoPython'> 
      <div className='flex-c'> 
        <div className='left-side'>
          <h2>JavaScript to Python</h2> 
          <h4>Convert simple JavaScript expressions into Python.</h4> 
          <textarea className='app-input'  
          cols={75} 
          rows={10} 
          placeholder='Enter your question here' 
          onChange={(e) => setPrompt(e.target.value)} 
          /> <br /> 
          <button onClick={jstoPython}>Submit</button> 
        </div>
        <div className="right-side">
          <h3 className="result-text">{jstopy.length > 0 ? summery : ""}</h3> 
        </div> 
      </div>
    </div>
    </div>
    <hr />
    <div className='generateIdeas'> 
    <div className='flex-c'> 
        <div className='left-side'>
      <h2>Generate Ideas</h2> 
      <h4>Generate an outline for a research topic.</h4> 
      <textarea className='app-input'  
      cols={75} 
      rows={10}
      placeholder='Enter your question here' 
      onChange={(e) => setPrompt(e.target.value)} 
      /> 
     
      <br /> 
     
      <button onClick={generateIdeas}>Submit</button>  </div>
       <div className='right-side'>
<h3 className="result-text">{generateideas.length > 0 ? summery : ""}</h3> 
</div>
</div>
    </div>    
    <hr />
    
    </div>

  </> 
) 
  } 
export default Try;