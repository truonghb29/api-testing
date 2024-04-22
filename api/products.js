import axios from "axios";
import { expect } from "chai";

describe("API testing Products", () => {
    it("get all products", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/products/search",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get products by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/products/66233dd2706bbf6da942ed85",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "productInfo",
        JSON.stringify(
            {
                name: "Laptop",
                price: 1000,
                categoryID: "661e8115706bbf6da942e4b0"
            }
        )
    );
    formData.append(
        "productInfo",
        JSON.stringify(
            {
                name: "Smartphone",
                price: 100
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/products",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create products", async () => {
        try {
            const response = await axios(config);
            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "productsInfo",
        JSON.stringify(
            {
                name: "Iphone13",
                price: 100,
                images: [],
                status: "ACTIVE",
                types: [
                  "NORMAL"
                ],
                visible: true,
                attributeMapping: [],
                productsVariant: [],
                slug: "smartphone",
                productAttributeList: [],
                createdAt: "2024-04-20T04:00:18.684Z",
                updatedAt: "2024-04-20T04:07:44.663Z"

            }
        )
        );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/products/66233dd2706bbf6da942ed85",
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
      };
      it("update products", async () => {
        try {
          const response = await axios(configPatch);
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error.response.data.error);
        }
      });
      it("delete products by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/products/?ids=6623406b706bbf6da942ed98",
          });
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
