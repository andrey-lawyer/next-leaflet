import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_API;

export async function postAdvert(newAdverts: object) {
  try {
    return await axios.post("accommodations", newAdverts);
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}

export async function getAdverts(accommodationType = "", cost = "") {
  try {
    console.log(`cost -${cost}, type accommodation -  ${accommodationType}`);
    const queryParams = new URLSearchParams({
      accommodationType,
      cost,
    });
    const { data } = await axios.get(
      `accommodations?${queryParams.toString()}`
    );
    return data;
  } catch (error) {
    if (error instanceof Error) {
      toast.error(error.message);
    }
  }
}
