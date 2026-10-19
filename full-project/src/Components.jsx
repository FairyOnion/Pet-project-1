export function Button({name}) {
      function handleClick () {
        console.log('Button from the secondary file has been clicked')
      }

    return ( 
    <button className='nav-button' onClick={handleClick}>Components Button {name}</button>
     )
}

export function Nav() {
    return (
        <h1>This is an element called "Nav"</h1>
    )
}