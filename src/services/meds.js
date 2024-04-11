import { api } from "./config";

export const createNewMed = async (data) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const getAllMedicationsUser = async () => {
  try {
    const response = await api.get('/meds/get', {
      headers: {
        'Authorization': localStorage.getItem("Authorization"),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);

  }
};

export const getAllMedicationsAdmin = async () => {
  try {
    const response = await api.get('/meds/admin', {
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
  }
};

export const updateMedication = async (medId, data)=>{
  try {
    const resp = await api.put(`/meds/mod/${medId}`, data
  , {
    headers: {
      'Authorization': localStorage.getItem('Authorization')
    },
  })
  return resp.data
  } catch (error) {
    console.log(error)
  }
  
}


export const  deleteMedication  = async ( medId)=>{
  try {
    const resp = await api.delete(`/meds/rm/${medId}`,{
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    } )
    
    return resp.data
  
  } catch (error) {
    console.log(error)
  }
}

export const getMedsToday = async () => {
  try {
      const reminders = await api.get(
          "/meds/today",
          {
              headers: {
                  Authorization: localStorage.getItem("Authorization"),
              },
          }
      );
      return reminders.data;
  } catch (error) {
      console.log(error);
  }
};
