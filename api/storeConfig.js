import axios from "axios";
import { expect } from "chai";

describe("API testing Store Config", () => {
    it("get all store config", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/store-config/search-all",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get store config by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/store-config/659829b1bd687e5d728fc65c",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "storeConfigInfo",
        JSON.stringify(
            {
                feeShip: "2000"
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/store-config",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create store config", async () => {
        try {
            const response = await axios(config);
            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "materialInfo",
        JSON.stringify(
            {
                feeShip: 7000,
                purchasingGuide: "string",
                reasonOrderCancel: [
                  "string"
                ],
                hotlineSupport: {
                  order: "string",
                  customerCareHotline: "string"
                }
            }
        )
    );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/store-config/66235a2e706bbf6da942ef21",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
    };
    it("update store config", async () => {
        try {
            const response = await axios(configPatch);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
      it("delete store config by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/store-config/?ids=6623596e706bbf6da942ef17&ids=66235983706bbf6da942ef19",
          });

          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
