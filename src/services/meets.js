import { api } from "./config";


export const createAppointmentUser = async (data)=>{
    try {
        const meet = await api.post(
          "/meet/create",
          data,
          {
            headers: {
              'Authorization': localStorage.getItem('Authorization')
            },
          }
        );
    
        return meet.data;
      } catch (error) {
        console.log(error);
      }
}

export const  getAllAppointmentsUser = async() =>{
    try {
        const response = await api.get('/meet/get',{
          headers: {
            'Authorization': localStorage.getItem("Authorization"),
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching families:', error);
    
      }
}
export const getAllAppointmentsAdmin = async ()=>{
    try {
        const response = await api.get('/meet/admin', {
          headers: {
            'Authorization': localStorage.getItem('Authorization')
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching families:', error);
      
      }
}

export const getMeetToday = async ()=>{
  try {
      const response = await api.get('/meet/today', {
        headers: {
          'Authorization': localStorage.getItem('Authorization')
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching families:', error);
    }
}

export const updateAppointment = async (meetId, data)=>{
    try {
        const resp = await api.put(`/meet/mod/${meetId}`, data
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
export const deleteAppointment = async (meetId)=>{
    try {
        const resp = await api.delete(`/meet/rm/${meetId}`,{
          headers: {
            'Authorization': localStorage.getItem('Authorization')
          },
        } )
        
        return resp.data
      
      } catch (error) {
        console.log(error)
      }
}

