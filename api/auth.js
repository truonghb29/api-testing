import axios from "axios";
import { expect } from "chai";

describe("API testing Auth", () => {
  it("register", async () => {
    try {
      const response = await axios({
        method: "post",
        url: "https://reqres.in/api/register",
        data: {
          email: "eve.holt@reqres.in",
          password: "pistol",
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
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/users/65a2d4d1ae68e6dcc7ac0ce0",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
});
