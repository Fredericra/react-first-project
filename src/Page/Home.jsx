import React, { useEffect, useState } from 'react'
export default function Home() {
    const [menu,setMenu] = useState([]);
    const [name,setName] = useState('')
    const [ecole,setEcole] = useState('')
    const ajouter = (event)=>{
        event.preventDefault();
       console.log(name);
    }
  return (
    <div>
     {
        menu.map((item,index)=>{
            (
                <div className="">
                    <ul className="">
                        <li>{item} </li>
                    </ul>
                </div>
            )
        })
     }
     <div className="px-4 bg-blue-400">
        <form action="" className='space-y-10' onSubmit={ajouter}>
            <div className="py-4">
            <input type="text" className="outline-blue-600 h-8 w-32 bg-gray-600"   value={name} onChange={(e)=>{setName(e.target.value)}}  />
            </div>
            <div className="">
            <input type="text"  className='outline outline-2 outline-offset-2 outline-blue-600 rounded-l-2xl'/>
            </div>
            <button type='submit' className='btn'>ajouter</button>
        </form>
     </div>
    </div>
  )
}
