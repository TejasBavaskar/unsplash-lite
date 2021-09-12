import axios from "axios";

export class AxiosApiRequest {
  static async get(url, fields) {
    const accessKey = process.env.ACCESS_KEY;
    const baseUrl = process.env.UNSPLASH_BASE_URL;
    const method = "get";
    const apiUrl = `${baseUrl}${url}`;

    const searchWord = fields.query || "";
    const page = fields.page || 1;

    const response = await axios({
      url: apiUrl,
      method: method,
      headers: {
        authorization: accessKey,
      },
      params: {
        query: searchWord,
        page: page,
      },
    });

    return response;
  }
}
