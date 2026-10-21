import './Small-Components-Style.css'

export function Button({name}) {
      function handleClick () {
        console.log('Button from the small components file has been clicked')
      }

    return ( 
    <button className='test-button' onClick={handleClick}>Components Button {name}</button>
     )
}

export function Gav() {
    return (
        <h1 id='gav'>This is an element called "Gav"</h1>
    )
}

export function ThickDivider() {
  return <div className='thick-divider'></div>
}

export function ThinDivider() {
  return <div className='thin-divider'></div>
}