import axios from "axios";
import { expect } from "chai";

describe("API testing Product Attributes", () => {
    it("get all product attributes", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/product-attributes/search-all",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get product attributes by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/product-attributes/658c4190ac8dbf382a94e8c9",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "productAttributeInfo",
        JSON.stringify(
            {
                name: "Size",
                attributeList: [
                    {
                        name: "Small",
                        value: "8inch",
                    },
                    {
                        name: "Medium",
                        value: "15inch",
                    }
                ],
            }
        )
    );
    formData.append(
        "productAttributeInfo",
        JSON.stringify(
            {
                name: "Viền",
                attributeList: [
                    {
                        name: "Cháy cạnh",
                        value: "chay_canh",
                    },
                    {
                        name: "Nhân phô mai",
                        value: "nhan_pho_mai",
                    }
                ],
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/product-attributes",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create product attributes", async () => {
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
    it("update product attributes", async () => {
        try {
            const response = await axios(configPatch);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
      it("delete product attributes by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/product-attributes/?ids=662354df706bbf6da942eeee",
          });

          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
