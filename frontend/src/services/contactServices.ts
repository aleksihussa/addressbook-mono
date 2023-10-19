import axios from "axios";

export const getContacts = async (): Promise<any[]> => {
  try {
    const response = await axios.get("/api/contacts").then((res) => res.data);

    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching contacts: ${error.message}`);
  }
};

export const saveContactToUser = async (contactInfo: any): Promise<any> => {
  try {
    const response = await axios
      .post("/api/contacts", contactInfo)
      .then((res) => res.data);

    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching contacts: ${error.message}`);
  }
};
