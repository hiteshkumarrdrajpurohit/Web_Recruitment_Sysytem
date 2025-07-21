import axios from "axios";
import { config } from "../config.jsx";
export async function signUpUser(
  firstName,
  lastName,
  email,
  password,
  dateOfBirth,
  phoneNumber,
) 
{
  try {
    //create the url for the server endpoint
    const url = `${config.serverURL}/user/signup`;
    //create the request body
    const requestBody = {
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      phoneNumber,
    };
    //send the request to server and get the response
    const response = await axios.post(url, requestBody);
    if (response.status === 200) {
      // read the json body from the resonse
      return response.data;
    } else {
      //response is not success
      return null;
    }
  } catch (ex) {
    console.log(`exception: `, ex);
  }

}

