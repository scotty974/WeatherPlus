import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000/api/",
});

export async function login(data) {
  try {
    const resp = await api.post("user/login", data, {
        headers : {
            "Content-Type": "application/json"
        }, 
    });
    if (resp.status === 200) {
      return resp.data;
    }
  } catch (error) {
   console.log(error);
   return error;
  }
}


export async function register(data) {
  try {
    const resp = await api.post("user/register", data)
    if (resp.status === 200) {
      return {
        success : true
      }
    }
  } catch (error) {
   console.log(error);
   return error;
  }
}