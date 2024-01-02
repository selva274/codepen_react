import { useEffect, useState } from "react"
import "./App.css"
import useLocalStorage from "./Storage";
export default function App() {
  const [html,setHtml]=useLocalStorage('html','');
  const [css,setCss]=useLocalStorage('css','');
  const [js,setJs]=useLocalStorage('js','');
  const [codepen,setCodepen]=useState('');

  useEffect(()=>{
    const TimeOut=setTimeout(()=>{
      setCodepen(
        `<html>
        <style>${css}</style>        
        <script>${js}</script>
        <body>${html}</body>
        </html>`
      )
    },200)
    return ()=>clearTimeout(TimeOut)
  },[html,css,js])

  return (
    <div className="wrapper">
    <div className="nav">
      <h1>CodePen</h1>      
    </div>
    <div className="content">
    <div className="area">
    <span>index.html</span>
        <textarea value={html} placeholder="HTML" onChange={(e)=>{setHtml(e.target.value)}}/>
        <span>style.css</span>

        <textarea value={css} placeholder="CSS" onChange={(e)=>{setCss(e.target.value)}}/>
        <span>script.js</span>
        <textarea value={js} placeholder="JavaScript" onChange={(e)=>{setJs(e.target.value)}}/>        
        </div>
        <div className="output">
        <span>Output</span>
          <iframe
            srcDoc={codepen}
            title="Output"
            sandbox="allow.scripts"
            width="100%"
            height="100%"
          />
        </div>
    </div>
        
    </div>
  )
}
