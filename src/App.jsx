import './App.css'
import Card from './Components/Card'
import { useState, useEffect} from 'react';


function App() {

  const [data, setData]= useState([]);

  const api = "https://xcountries-backend.azurewebsites.net/all"

  useEffect(() => {
    fetch(api)
      .then(response =>response.json())
      .then(data => {
        setData(data)
      })
      .catch(error => {
        console.error("Error fetching data: " + error)
      });
  }, []);


 
  return(
    <> 
    <div style={{
      display:'flex',
      flexWrap:'wrap',
      gap:'15px',
    }}>

    {data.map((country) => <Card key={country.name} country ={country.name} flag = {country.flag} /> )}
    
    </div>
    </>
  )


 }

export default App
