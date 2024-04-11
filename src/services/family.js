import { api } from "./config";


export const createFamily = async (familyData) => {
  try {
    console.log(familyData)
    const response = await api.post('/family/create', {name:familyData},{
      headers: {
          'Authorization': localStorage.getItem('Authorization')
      }
  })   
    return response.data;
  } catch (error) {
     console.log(error)
  }
};


export const getAllFamiliesUser = async () => {
  try {
    const response = await api.get('/family/get',{
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
 
  }
};

export const getAllFamiliesAdmin = async () => {
  try {
    const response = await api.get('/families/admin',{
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
 
  }
};
/* PENDIEENTEE DE MODIFICAR*/
export const updateFamily = async (data)=>{
  try {
    const user= await getUserByEmail()
  const res = await api.put(`/mod/${user.id}`, {name:data} ,{
    headers: {
      'Authorization': localStorage.getItem("Authorization"),
    },
  })
  return res
    
  } catch (error) {
    throw error
  }
}
export const deleteFamilyUser = async (familyId) =>{
  const res = await api.delete(`/rm/${familyId}`,{
    headers: {
      'Authorization': localStorage.getItem("Authorization"),
    },
  } )
}

export const deleteFamilyAdmin = async (familyId)=>{
  const res = await api.delete(`/admrm/${familyId}`,{
    headers: {
      'Authorization': localStorage.getItem("Authorization"),
    },
  } )
}
