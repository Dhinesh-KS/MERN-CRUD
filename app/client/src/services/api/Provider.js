import Client from "./AxiosClient";

export const httpClient = {
  getPosts: () => {
    return Client.get("/getposts");
  },
};
