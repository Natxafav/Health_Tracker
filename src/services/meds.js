import { api } from "./config";

export const createNewMed = async (data) => {
  
    const med = await api.post(
      "/meds/create",
      data,
      {
        headers: {
          'Authorization': localStorage.getItem('Authorization')
        },
      }
    );

    return med.data;

};

export const getAllMedicationsUser = async () => {
 
    const response = await api.get('/meds/get',{
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });
    return response.data;

};

export const getAllMedicationsAdmin = async () => {
  
    const response = await api.get('/meds/admin', {
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    });
    return response.data;

};

export const updateMedication = async (medId, data)=>{
 
    const resp = await api.put(`/meds/mod/${medId}`, data
  , {
    headers: {
       'Authorization': localStorage.getItem('Authorization'), 
       'roleId':localStorage.getItem('roleId')
    },
  })
  return resp.data 
  
}


export const  deleteMedication  = async ( medId)=>{
 
    const resp = await api.delete(`/meds/rm/${medId}`,{
      headers: {
         'Authorization': localStorage.getItem('Authorization'),
         'roleId':localStorage.getItem('roleId')
      },
    } )
    
    return resp.data
  

}
