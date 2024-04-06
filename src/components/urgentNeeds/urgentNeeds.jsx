import React from 'react'

const urgentNeeds = () => {

    const handleSignUp = async () => {
        
        const res = await signup({
          name, lastname, nss, date_birth, dni, email, password, phone
    
        })
        console.log(res.data)
        localStorage.setItem('Authorization', res.data.token)
        localStorage.setItem('role', res.data.role)
        localStorage.setItem('email', res.data.email)
        navigate('/home')
      }






  return (
    <div>urgentNeeds</div>
  )
}

export default urgentNeeds