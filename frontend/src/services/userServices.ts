import axios from "axios";

interface User {
  email: string;
  password: string;
}

export function signIn(email: string, passwordHash: string): Promise<User> {
  return axios
    .post("/api/user/signIn", { email, passwordHash })
    .then((res) => res.data)
    .catch((err) => "error");
}

export function signOut(): void {
  axios.get("/api/user/signOut");
}
