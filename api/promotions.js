import axios from "axios";
import { expect } from "chai";

describe("API testing Promotions", () => {
    it("get all promotions", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/promotions/search",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get promotions by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/promotions/",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();

    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/promotions/create",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json",
        },
        data:
        {
            "name": "30/4",
            "description": "abc",
            "banner": "xyz",
            "promotionsList": []
        }

    };
    it("create promotions", async () => {
        try {
            const response = await axios(config);
            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "productAttributeInfo",
        JSON.stringify(
            {
                name: "Kích thước",
                attributeList: [
                    {
                        name: "Nhỏ",
                        value: "8inch",
                    },
                    {
                        name: "Trung bình",
                        value: "15inch",
                    }
                ],
            }
        )
    );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/product-attributes/662354df706bbf6da942eeee",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
    };
    it("update promotions", async () => {
        try {
            const response = await axios(configPatch);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
      it("delete promotions by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/promotions/?ids=662354df706bbf6da942eeee",
          });

          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
