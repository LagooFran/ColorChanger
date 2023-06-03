import { useState } from 'react'

function App() {

  const [backgrColor, setBackgrColor] = useState('#e0ebeb')
  const colors = ['#e6e6ff', '#e6f2ff', '#ffe6e6', '#e6ffe6']

  return (
    
    <div style={{width: '100vw', height: '100vh', backgroundColor: backgrColor, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection:'column'}}>
      <h1 style={{fontFamily:'sans-serif', marginBottom: '10px'}}>{`> `}Color Changer</h1>
        <button onClick={() => setBackgrColor(colors[Math.floor((0 + Math.random() * (3 - 0)))])} style={{backgroundColor:'white', color: 'black', height: '40px', width: '200px', borderRadius: '5px', border: 'none', boxShadow: '5px 5px gray'}}>
          Change background color
        </button>
      <p style={{fontFamily:'sans-serif', marginBottom: '10px'}}>Simple test by Franco Lago</p>
    </div>
  )
  

}

//setBackgrColor(colors[0 + Math.random() * (3 - 0)])
//console.log((0 + Math.random() * (4 - 0)).toFixed(0))

export default App
