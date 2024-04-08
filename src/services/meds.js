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

export const getAllMeds = async () => {
  try {
    const meds = await api.get(
      "/meds/getAll",
      {
        headers: {
          Authorization: localStorage.getItem("Authorization"),
        },
      }
    );

    return meds.data;
  } catch (error) {
    console.log(error);
  }
};
