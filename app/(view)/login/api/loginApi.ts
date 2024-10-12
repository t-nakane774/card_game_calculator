import axios from "axios"

type LoginRequest = {
  userId: string;
  password: string;
}


const login = async (loginRequest: LoginRequest) => {
  const url = "https://nextjs-api-beige.vercel.app/api/login"
  const data = {}

  try {
    const response = await axios.post(url,data);
    console.log('SUCCESS: ', response.data);
    return true;
  } catch (error) {
    console.error("ERROR: ", error.response)
    return false;
  }

}