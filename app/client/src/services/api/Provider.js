import Client from "./Client";

export const httpClient = {
  getPosts: () => {
    return Client.get("/getposts");
  },
};
