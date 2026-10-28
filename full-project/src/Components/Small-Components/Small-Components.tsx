import './Small-Components-Style.css'

type ButtonValues = {
  name: string,
  sec?: number
}

export function Button({name, sec}: ButtonValues) {
      function handleClick () {
        console.log('Button from the small components file has been clicked');
        setTimeout(() => {
          alert(`You clicked the button "${name}" 3 seconds ago!`)
        }, 3000)
      }

    return ( 
    <button className='test-button' onClick={handleClick}>Components Button {name} and {sec}</button>
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