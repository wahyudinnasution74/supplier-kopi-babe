import axios from "axios";
import appConfig from "../../app.config";

export function getProducts(supplierId) {
  return axios
    .get(appConfig.extra.apiUrl + "/product/list?=supplierId=" + supplierId)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error.response.data;
    });
}
