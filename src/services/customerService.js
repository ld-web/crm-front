import Axios from "axios";
import { CUSTOMER_ENDPOINT } from "../utils/constants";

export const getCustomers = () => {
  return Axios.get(CUSTOMER_ENDPOINT);
};
