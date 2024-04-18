import axios from "axios";
import { expect } from "chai";

describe("API testing Auth", () => {
  it("register", async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/auth/user/register",
        data: {
          email: "thanhtruong",
          password: "thanhtruong",
        },
      });

      expect(response.status).to.equal(200);
      expect(response.data).to.have.property("token");
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });

  it("login", async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/auth/user/login",
        data: {
          username: "admin",
          password: "13112002",
        },
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
});
