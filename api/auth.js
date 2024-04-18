import axios from "axios";
import { expect } from "chai";

describe("API testing Auth", () => {
  const formData = new FormData();
  formData.append(
    "customerSignupInfo",
    JSON.stringify({
      email: "thanhtruong",
      password: "thanhtruong",
    })
  );

  const config = {
    method: "post",
    url: "https://dynasty-ws.vtaan.id.vn/api/auth/user/register",
    headers: {
      accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
    data: formData,
  };
  it("register", async () => {
    try {
      const response = await axios(config);

      expect(response.status).to.equal(200);
      expect(response.data).to.have.property("token");
    } catch (error) {
      throw new Error(error.response.data.error);
    }
  });

  it("login", async () => {
    const formData = new FormData();
    formData.append(
      "userLoginInfo",
      JSON.stringify({
        username: "admin",
        password: "13112002",
      })
    );

    const config = {
      method: "post",
      url: "https://dynasty-ws.vtaan.id.vn/api/auth/user/login",
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    try {
      const response = await axios(config);

      expect(response.status).to.equal(200);
    } catch (error) {
      throw new Error(error);
    }
  });
});
