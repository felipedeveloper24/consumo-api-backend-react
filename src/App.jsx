import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardSaludo from './components/CardSaludo'
import { Grid } from '@mui/material'
import axios from 'axios'

function App() {
  
  const [usuarios,setUsuarios] = useState([]);
  const base_url = "http://localhost:3000/api";
  
  const getAllUsers = async()=>{

      const response = await axios.get(`${base_url}/usuario/getall`);
      if(response.status==200){
          setUsuarios(response.data.usuarios);
          console.log(response.data.usuarios);
      }
  }

  useEffect(()=>{
      getAllUsers();
  },[]);

  return (
    <>
        {
          usuarios.map((usuario,index)=>{
              return(
                 <li key={index}>{usuario.nombre} {index} - {usuario.apellido}</li>
              )
          })
        }

    </>
  )
}

export default App
