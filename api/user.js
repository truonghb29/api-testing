import axios from "axios";
import { expect } from "chai";

describe("API testing User", () => {
  it("list user", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://reqres.in/api/users?page=6",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });

  it("single user", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://reqres.in/api/user/24",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error("User not found");
    }
  });
});
