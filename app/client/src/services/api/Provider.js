import Client from "./Client";

export const httpClient = {
  getPosts: () => {
    return Client.get("/getposts");
  },
  createPost: (data) => {
    return Client.post("/createpost", data);
  },
  updatePost: (id, updatedRecord) => {
    return Client.put("/posts/" + id, updatedRecord);
  },
  deletePost: (id) => {
    return Client.delete("/posts/" + id);
  },
};
