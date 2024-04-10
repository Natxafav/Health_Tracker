import { useEffect, useState } from 'react'
import { getAllMedicationsUser } from '../../services/meds'
import {OneMed} from '../OneMed/OneMed'

function MedicationList() {

  const [familyMeds, setFamilyMeds] = useState([])

  const retrieveFamilyMeds = async () => {
    const res = await getAllMedicationsUser()
    console.log(res)
    setFamilyMeds( res )  
  }

  // Esta funcion devuelve un div, la idea seria que devolviese el componente tarjeta con las medicaciones
  
  const displayUserMeds = () => {
    const display = familyMeds.map(elem => {
      return (
      <div key={elem.id} style={{width: "200px", height:"200px", backgroundColor: "white", color: "black", borderRadius: "5px", display: "flex", flexDirection:"column", alignItems: "start", padding: "8px"}}>
        <h1>{elem.name}</h1>
        {elem.medications.map(elem => {
          return (
          <div key={elem.id} style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <div style={{display: "flex", gap: "1em"}}>
             <OneMed />
            </div>
          </div>)
        })}
      </div>
      )
    }
    )
    return display
  }
  

  useEffect(() => {
    retrieveFamilyMeds()
  }, [])

  return (
    

    <div>MedicationList</div>


  )
}

export default MedicationList