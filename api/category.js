import axios from "axios";
import { expect } from "chai";

describe("API testing Category", () => {
  it("get category", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/category/search-all",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
  it("get category by id", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/category/661e80b5706bbf6da942e4a8",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
  it("get customers by name", async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://dynasty-ws.vtaan.id.vn/api/category/search?name=%C6%AFu%20%C4%91%C3%A3i%20%C4%91%E1%BB%99c%20quy%E1%BB%81n",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
  const formData = new FormData();
  formData.append(
    "categoryInfo",
    JSON.stringify({
      name: "Electronics"
    })
  );
  const config = {
    method: "post",
    url: "https://dynasty-ws.vtaan.id.vn/api/category",
    headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };
  it("create category", async () => {
    try {
      const response = await axios(config);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });
  const formDataPatch = new FormData();
  formDataPatch.append(
    "categoryInfo",
    {
      "_id": "661e80b5706bbf6da942e4a8",
      "name": "Electric",
      "status": "ACTIVE",
      "products": [],
      "priority": 1,
      "isShowHomePage": true,
      "slug": "electronics",
      "avatar": "/public/uploads/image/category/deals@3x.png",
      "createdAt": "2024-04-16T13:44:21.796Z",
      "updatedAt": "2024-04-19T15:58:31.400Z"

    })
  ;
  const configPatch = {
    method: "patch",
    url: "https://dynasty-ws.vtaan.id.vn/api/category/661e80b5706bbf6da942e4a8",
    headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };
  it("update category", async () => {
    try {
      const response = await axios(configPatch);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });
  it("delete category by id", async () => {
    try {
      const response = await axios({
        method: "delete",
        url: "https://dynasty-ws.vtaan.id.vn/api/category/?ids=661e80b5706bbf6da942e4a8",
      });

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
});
