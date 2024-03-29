import { useState, useCallback, useEffect } from "react"


function App() {


  let [counter , setcounter] = useState(0)
  let [color , setcolor] = useState("white")

//  addfunc
  function counterAdd(){

  if(counter >=0 && counter < 20){
    
    let cancel = document.getElementById("cancel")
    cancel.style.display = "block"
     setcounter(counter+1)
  }else{
   window.alert("you rich high lavel of number please drecress" )
   let add = document.getElementById("add")
   add.style.display = "none"
  }

  }
// cancelfunc
  function counterCancel(){

  if(counter > 0 && counter <= 20){
    let add = document.getElementById("add")
    add.style.display = "block"
    setcounter(counter-= 1)
  }else{
   window.alert("you rich low lavel of number please incress" )
   let cancel = document.getElementById("cancel")
   cancel.style.display = "none"
  }
      
  }

  // passwordgenaretor 
  const [length , setlength]=useState(8)
  const [allowedNumber , setAllowedNumber]=useState(false)
  const [allowedCarecter , setallowedCarecter]=useState(false)
  const [password , setpassword]=useState("")

  const passwordgenaretor = useCallback(()=>{
    let pass = ""
    let star = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(allowedCarecter) star+= ".,:;*&%$#@/}{[+-_&`~]}"
    if(allowedNumber) star+="0123456789"
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * star.length + 1)
      pass += star.charAt(char)
    }

    setpassword(pass)

  },[length,allowedNumber, allowedCarecter, setpassword])

  useEffect(()=>{
    passwordgenaretor()
  },[length,allowedNumber, allowedCarecter, setpassword])


  return (
  
     <>
     
    <div className=" h-auto m-5 shadow-2xl p-5 w-12/12 text-white flex flex-wrap justify-center "style={{background:color}} > 

    <div onClick={()=> setcolor("red")}  className="shadow-2xl border-2 hover:bg-red-800 colorbtn1 m-2 px-4 py-2 bg-red-600 rounded-lg      transition ease-in-out ">red</div>
    <div onClick={()=> setcolor("#0891b2")} className="shadow-2xl border-2 hover:bg-cyan-800 colorbtn2 m-2 px-4 py-2 bg-cyan-600 rounded-lg     transition ease-in-out ">cyan</div>
    <div onClick={()=> setcolor("#ca8a04")} className="shadow-2xl border-2 hover:bg-yellow-800 colorbtn3 m-2 px-4 py-2 bg-yellow-600 rounded-lg transition ease-in-out ">yellow</div>
    <div onClick={()=> setcolor("#4f46e5")} className=" shadow-2xl border-2 hover:bg-indigo-800 colorbtn3 m-2 px-4 py-2 bg-indigo-600 rounded-lg transition ease-in-out ">indigo</div>

     </div>

      <div className =" flex justify-between h-auto w-11/12 md:w-12/12 mx-auto bg-indigo-500 rounded-md   shadow-xl text-center m-3 p-5 text-xl font-semibold text-white ">
       <h1 className="font-semibold ">counter : {counter}</h1>
     <button className=" bg-green-500 m-2 p-4 rounded-md" id="add" onClick={ counterAdd}> add</button>
       <br />
     <button className=" ease-out duration-300 bg-red-500  m-2 p-4 rounded-md"  id="cancel" onClick={counterCancel}> cancel </button>
     </div>
{/* /* password genaretor  */}

      <div className="main rounded-lg   h-auto w-11/12 mx-auto bg-gray-300  p-4">
        <div className=" w-full relative  text-center p-2 flex" >
          <input type="text" className="bg-white  text-black rounded-lg w-11/12 py-3 px-2 mx-2"
            value={password}
            placeholder="passdword"
            readOnly
          />
          <button className=" absolute right-0  w-2/12 py-3  bg-indigo-500 text-white p-2 rounded-r-lg " >copy </button>
        </div>

        <div className="  flex justify-between mx-5  ">
          <div>
             <input type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e)=>{setlength(e.target.value)}}
          
          />
          <label >legenth: {length}</label>
          </div>

          <div>
            <input type="checkbox"
              defaultChecked={allowedNumber}
              id="numberid"
              onChange={()=>{
                setAllowedNumber((prev)=> !prev)
              }}
          />
          <label >number</label>
          </div>

          <div>
            <input type="checkbox"
              defaultChecked={allowedCarecter}
              id="caracterid"
              onChange={()=>{
                setallowedCarecter((prev)=> !prev)
              }}
          />
          <label >Carecter</label>
          </div>
         
          
        </div>
      </div>


     </>
  )
}

export default App
