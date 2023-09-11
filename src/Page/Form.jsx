import React, { useEffect, useState } from 'react'

const Plus = ({name})=>{
    
    return(
        <div className="">
            {
                name.map((element)=>{
                    return(
                        <div className="">
                            <ul className="">{element.name} </ul>
                            <ul className="">{element.last} </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function Form({sendData,message}) {
    const [nom,setNom] = useState('')
    const [erreur,setErreur] = useState('')
    const [vise,setVise] = useState(false);
    const [prenom,setPreom] = useState('')
    const [serie,setSerie] = useState('')
    const [ecole,setEcole] = useState('')
    const [confirm,setConfirm] = useState('')
    const [email,setEmail]= useState('')
    const [text,setText] = useState('');
    const [eleve,setEleve]= useState([])
 
function fiche(e)
{
    e.preventDefault();
    if(nom.length<=0 || prenom.length<=0 || serie.length<=0 || ecole.length<=0 )
    {
       setVise(true)
       setErreur('veuillez rempliz le formulaire');
    }
    else if(!/^[0-9a-z]+[@]+[a-z]+\.[a-z]/.test(email))
    {
        setErreur('email invalide,entre nouveaux')
    }
    else if(serie==="")
    {
        setErreur('entre votre section série bacalauréat')
    }
    else if(text.length<=32)
    {
        setErreur('veuillez entre votre commentaire plus de 42 caracteur');
    }
    else{
       sendData({name:nom,last:prenom,se:serie,eco:ecole,mail:email,value:text})
       setNom('')
       setText('')
       setPreom('')
       setSerie('')
       setEcole('')
       setEmail('')
       setErreur('')

    }

    
}  

  return (
    <div>
       <div>
        <div className="px-4 py-4 shadow-lg shadow-indigo-500 hover:shadow-orange-950 rounded-lg bg-indigo-950 space-y-3">
            <div className="text-center">
                {message}
                <p className="text-[20px] text-white font-bold comic" >DOSSIER CANDUDATURE ICI</p>
                
                {
                    (
                        <p className="text-red-600 font-bold text-sm">{erreur} </p>
                    )
                }
            </div>
            <form className="space-y-4" onSubmit={fiche}> 
                <div className="relative">
                    <input type="text" onChange={(e)=>{setNom(e.target.value)}} value={nom}   className='input' placeholder='entre votre nom'/>
                    <i className="fas fa-user absolute left-3 top-2 text-gray-700"></i>
                </div>
                <div className="relative">
                    <input type="text" onChange={(e)=>{setPreom(e.target.value)}} value={prenom}  className='input' placeholder='entre votre prenom'/>
                    <i className="fas fa-user absolute left-3 top-2 text-gray-700"></i>
                </div>
                <div className="relative">
                    <input type="text" onChange={(e)=>{setEmail(e.target.value)}} value={email}  className='input' placeholder='entre votre email unique'/>
                    <i className="fas fa-envelope absolute left-3 top-2 text-gray-700"></i>
                </div>
                <div className="relative">
                    <select name="" id="" onChange={(e)=>setSerie(e.target.value)} value={serie} className='input'>
                        <option value="">...</option>
                        <option value="A">Série A</option>
                        <option value="D">Série D</option>
                        <option value="D">Série C</option>
                        <option value="E">Série autre</option>
                    </select>
                    <i className="fas fa-graduation-cap absolute left-3 top-2 text-gray-700"></i>
                </div>
                <div className="relative">
                    <input type="text" onChange={(e)=>setEcole(e.target.value)} value={ecole}  className='input' placeholder='Ecole d orgine'/>
                    <i className="fas fa-university absolute left-3 top-2 text-gray-700"></i>
                </div>
                <div className="px-2 py-1">
                    <textarea placeholder='votre commentaire' name="" id="" className='h-20 indent-4 bg-gray-400 font-bold text-gray-600 placeholder:text-gray-600' onChange={(e)=>{setText(e.target.value)}} value={text}></textarea>
                </div>
                <div className="text-sm text-white hover:text-pink-900">
                    <label htmlFor="">
                        <input type="checkbox" onChange={(e)=>setConfirm(e.target.value)} value={confirm} name="" id="" /> <span className='underline cursor-pointer'>j'accepter tous le régle</span>
                    </label>
                </div>
                <div className="flex justify-end items-center">
                    <button type="submit" className='btn'>ajouter <i className="fas fa-plus"></i></button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

