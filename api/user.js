import axios from "axios";
import { expect } from "chai";

describe("API testing User", () => {
  it("get user by id", async () => {
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
