import React,{useState} from 'react'
import './Links.css'
const Links = ({original,link}) => {
    const [copied,setCopied] = useState(false)
    let text;
    let className;
    if(copied){
      text = 'Copied'
      className='copied'
    }else{
      text = 'Copy'
      className = ''
    }
  return (
    <li><p className='original'>{original}</p><span className="new">{link}<button className={className}onClick={()=> {navigator.clipboard.writeText(link);setCopied(true)}}>{text}</button></span></li>
  )
}

export default Links