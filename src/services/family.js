import { api } from "./config";


export const createFamily = async (familyData) => {
  try {
    console.log(familyData)
    const response = await api.post('/family/create', {name:familyData},{
      headers: {
          'Authorization': localStorage.getItem('Authorization')
      }
  });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error creating family:', error);
    throw error;
  }
};


export const getAllFamiliesUser = async () => {
  try {
    const response = await api.get('/families/user', {headers:{ 'Authorization': localStorage.getItem('Authorization')}});
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

export const getAllFamiliesAdmin = async () => {
  try {
    const response = await api.get('/families/admin',{headers:{ 'Authorization': localStorage.getItem('Authorization')}});
    return response.data;
  } catch (error) {
    console.error('Error fetching families:', error);
    throw error;
  }
};

