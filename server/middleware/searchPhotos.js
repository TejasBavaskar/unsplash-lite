import { ifError } from "assert";
import { AxiosApiRequest } from "../services/axiosRequest.js";

export async function searchPhotos(req, res, next) {
  const fields = {
    query: req.query.query,
    page: req.query.page,
  };

  try {
    const response = await AxiosApiRequest.get("search/photos", fields);
    res.status(response.status).send(response.data);
  } catch (err) {
    console.log("Exception= ", err);
    next(err);
  }
}
