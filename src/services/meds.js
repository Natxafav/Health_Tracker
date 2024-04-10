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


