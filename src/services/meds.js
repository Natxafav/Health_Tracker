import { api } from "./config";

export const createNewMed = async (data) => {
  try {
    const med = await api.post(
      "/meds/create",
      data,
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
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
    const response = await api.get('/meds/user');
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

export const getAllMedicationsAdmin = async () => {
  try {
    const response = await api.get('/meds/admin');
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

/* PENDIENTE DE TERMINAR 


export const  getOneMedicationUser = async() =>{
  try {
    const response = await api.get(`/meds/one/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }

}
export const getOneMedicationAdmin = async ()=>{
  try {
    const response = await api.get(`/meds/admone/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
}
export const createMedicationAdmin = async ()=>{
  try {
    const med = await api.post(
      "/meds/admcreate",
      data,
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );

    return med.data;
  } catch (error) {
    console.log(error);
  }
}

export const updateMedication = async ()=>{
  try {
    const response = await api.put(`/meds/mod/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
}
export const deleteMedication = async ()=>{
  try {
    const response = await api.deelete(`/meds/rm/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
}
export const addUserMedication = async ()=>{
  try {
    const response = await api.get(`/meds/${}/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
}
export const removeUserMedication = async ()=>{
  try {
    const response = await api.get(`/meds/rm/${}/${}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
}
 */