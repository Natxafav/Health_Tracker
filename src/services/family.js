import { api } from "./config";


export const createFamily = async (familyData) => {
  try {
    const response = await api.post('/family/create', familyData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.error('Error creating family:', error);
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
