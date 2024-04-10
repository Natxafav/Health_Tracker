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
        throw error;
  }
};


export const getAllFamiliesUser = async () => {
  try {
    const response = await api.get('/families/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

export const getAllFamiliesAdmin = async () => {
  try {
    const response = await api.get('/families/admin');
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};
/* PENDIEENTEE DE MODIFICAR
export const updateFamily = async (data)=>{
  try {
    const user= await getUserByEmail()
  const res = await api.put(`/mod/${user.id}`, {name:data} )
  return res
    
  } catch (error) {
    throw error
  }
}
export const deleteFamilyUser = async () =>{
  const res = await api.delete(`/rm`, {} )
}

export const deleteFamilyAdmin = async ()=>{
  const res = await api.delete(`/admrm`, {} )
}
*/