import axios from "axios";

interface LoginRequest {
  userId: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
}

export const login = async (loginRequest: LoginRequest) => {
  const data = {
    userId: loginRequest.userId,
    password: loginRequest.password,
  };

  try {
    const url = 'https://nextjs-api-beige.vercel.app/api/login';
    const response = await axios.post<LoginResponse>(url, data, {
      timeout: 50000 // 5000ms = 5s
    });

    return response.data;
  } catch (error) {
    const err = error as Error;
    console.error("ERROR: ", err.message)
    return {
      success: false,
      message: 'Login failed.'
    }
  }

}