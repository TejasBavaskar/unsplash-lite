import { AxiosApiRequest } from "../services/axiosRequest.js";

export async function photoStatistics(req, res, next) {
  const fields = {
    id: req.query.id,
  };

  try {
    const response = await AxiosApiRequest.get(`/photos/${fields.id}/statistics`, fields);
    res.status(response.status).send(response.data);
  } catch (err) {
    console.log("Exception= ", err);
    next(err);
  }
}