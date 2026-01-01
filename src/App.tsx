import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io5";
import logo from './assets/logo.svg'
const App = () => {


  const[input, setInput] = useState(8)
  const handleInput = (e:any) => {
      setInput(e.target.value)
  }
  return (
    <>
      <div className="bg-black text-white h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* NAVBAR */}
          <div className="flex justify-between items-center pt-3">
            <div className="flex items-center cursor-pointer"> 
              <img src={logo} alt="" className="w-8"/>
              {/* <button className=" text-2xl cursor-pointer">Ciphers</button> */}
            </div>
            <button className="bg-blue-600 text-xl  px-5 py-2 rounded cursor-pointer flex items-center gap-0.5">Login <IoLogoGoogle/></button>
          </div>

          {/* HERO */}
          <div className="mt-3">
            <p className=" text-7xl md:text-9xl text-center">Store your passwords safely</p>
          </div>

          {/* PASSWORD GENERATOR */}
          <div className=" mt-6 text-xl max-w-xl mx-auto border-blue-600">
            <p className="mb-2">Password Generator</p>
            <p className="text-3xl">{input}</p>
            <input type="range" name="" id="" className="appearance-none bg-white h-1 w-full rounded accent-blue" onChange={handleInput} max={24} min={8} value={input}/>
            <div className="mt-3 ">
              <div className="flex gap-1 select-none justify-between">
                <label htmlFor="uppercase" className="cursor-pointer">Uppercases</label>
                <input type="checkbox" name="" id="uppercase" className="accent-blue-600" />
                
              </div>

              <div className="flex gap-1 select-none justify-between">
                <label htmlFor="digits" className="cursor-pointer">Digits</label>
                <input type="checkbox" name="" id="digits" className="accent-blue-600"/>
              </div>

              <div className="flex gap-1 select-none justify-between">
                <label htmlFor="special" className="cursor-pointer">Special characters</label>
                <input type="checkbox" name="" id="special" className="accent-blue-600"/>
              </div>
            </div>
            <button className="bg-blue-600 mt-3 w-full py-2 rounded cursor-pointer">Generate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
