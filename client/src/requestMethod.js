import axios from "axios";

const BASE_URL = "https://shop-vivi.onrender.com/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Y2M4MzFmYTEwMGI0ZmRiZDk2Y2FlNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTU3MTM2OSwiZXhwIjoxNjkxODMwNTY5fQ.Mgb-LbOZWrjT-OOOVodH7OFFRg7c4mzVB-i-x284sLY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
