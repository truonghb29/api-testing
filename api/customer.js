import axios from "axios";
import { expect } from "chai";

describe("API testing Customer", () => {
  it("get all customers", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/customers/search",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
  it("get customers by id", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/customers/66100fa534145d21f8c35e05",
      });

      expect(response.status).to.equal(200);
    } catch (error) {s
      throw new Error(error);
    }
  });
});
