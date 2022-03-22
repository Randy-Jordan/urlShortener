import React,{useState,useRef} from 'react'
import './Form.css'
import Links from './Links'

const Form = () => {
  const listRef = useRef(null)
  const inputRef = useRef(null)
  const [url, setUrl] = useState("")
  const [links,setLinks] = useState([])
  const handleSubmit = async (ev) => {
    ev.preventDefault();
        const options = {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({url:url}),

        }
        
        const res = await fetch('http://localhost:5000/shorten',options)
       
        switch (res.status) {
          case 200:
            const data = await res.json()
            setLinks(links => [data,...links] );
            listRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
          
          case 500:
            inputRef.current.placeholder = "Enter a valid URL"
            break;
          default:
            break;
        }
        
    }

  return (
    <>
    <form onSubmit={handleSubmit} id="cta">
        <input ref={inputRef}type="text" placeholder='Shorten link...'name="url" id="url" value={url} onChange={(ev)=> setUrl(ev.target.value)}/>
        <button type='submit'>Shorten It!</button>
    </form>
    <ul id="list" ref={listRef}>
    {links && links.map(item => 
      <Links key={item.link}original={item.original}link={item.link}/>
    )}
    </ul>
    </>
  )
}

export default Form