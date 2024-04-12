import {api} from './config'
export const  getAllReminderUser = async() =>{
    try {
        const response = await api.get('/reminder/get',{
          headers: {
            'Authorization': localStorage.getItem("Authorization"),
          },
        });
     
        return response.data;
      } catch (error) {
        console.error('Error fetching families:', error);
    
      }
}
export const getAllReminderAdmin = async ()=>{
    try {
        const response = await api.get('/reminder/admin', {
          headers: {
            'Authorization': localStorage.getItem('Authorization')
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error fetching families:', error);
      }
    };



export const getOneReminderUser = async ()=>{
   
}

export const getOneReminderAdmin = async ()=>{

}


export const createReminderUser = async (data)=>{
    try {
        const med = await api.post(
          "/reminder/create",
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
}
export const createReminderAdmin = async (reminderID, data)=>{

}
export const updateReminder = async (reminderID, data)=>{
    try {
        const resp = await api.put(`/reminder/mod/${reminderID}`, data
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
export const deleteReminder = async (reminderID)=>{
    try {
        const resp = await api.delete(`/reminder/rm/${reminderID}`,{
          headers: {
             'Authorization': localStorage.getItem('Authorization')
          },
        } )
        
        return resp.data
      
      } catch (error) {
        console.log(error)
      }
}