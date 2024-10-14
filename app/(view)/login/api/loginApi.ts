import axios from "axios"

export type LoginRequest = {
  userId: string;
  password: string;
}


export const login = async (loginRequest: LoginRequest) => {
  const url = "****"
  const data = {}

  try {
    // const response = await axios.post(url,data);
    // console.log('SUCCESS: ', response.data);
    return true;
  } catch (error) {
    // console.error("ERROR: ", error.response)
    return false;
  }

}