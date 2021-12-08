import axios from "axios";

export const getAllContacts = async () => {
  try {
    const { data } = await axios.get(
      //   `${process.env.React_App_Server}/contacts`
      `http://localhost:3001/contacts`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createContact = async (name, email) => {
  try {
    const { data } = await axios.post(
      `http://localhost:3001/contacts?name=${name}&email=${email}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateContactOnServer = async (name, email, id) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:3001/contacts?name=${name}&email=${email}&id=${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteContactOnServer = async (id) => {
  try {
    const { data } = await axios.delete(
      //   `${process.env.React_App_Server}/contacts`
      `http://localhost:3001/contacts?id=${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
