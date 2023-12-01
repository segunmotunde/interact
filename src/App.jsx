import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rating from './components/Rating'
import ThankYou from './components/ThankYou'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const DataRate = createContext()
function App() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const rate = [1,2,3,4,5]
  const[value, setValue] =useState(0)
 
   
  return (
  
    <div className='h-screen w-screen'>
      <DataRate.Provider value={{
        activeIndex,
        setActiveIndex,
        rate,
        value,
        setValue
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Rating  />}/>
            <Route path='/thankyou' element={<ThankYou />}/>
          </Routes>
        </BrowserRouter>
      </DataRate.Provider>
      
    </div>
   
  )
}

export default App
