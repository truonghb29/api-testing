import axios from "axios";
import { expect } from "chai";

describe("API testing Materials", () => {
    it("get all materials", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/materials/search",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get materials by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/materials/65958fd91ea3d75d47614e30",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "materialInfo",
        JSON.stringify(
            {
                materialInfo: [
                    {
                      name: "Bột bắp",
                      price: 100000,
                      quantity: 100,
                      unit: "kg",
                      _id: "65958fd91ea3d75d47614e31"
                    },
                    {
                      name: "Bột lọc",
                      price: 635465,
                      quantity: 66,
                      unit: "kg",
                      _id: "659d4bf6eea86ddd5a73784f"
                    }
                  ],
                  totalPrice: 65566230
            }
        )
    );
    formData.append(
        "materialInfo",
        JSON.stringify(
            {
                materialInfo: [
                    {
                      name: "Muối",
                      price: 35425,
                      quantity: 10,
                      unit: "kg",
                      _id: "659d4bf6eea86ddd5a737850"
                    },
                    {
                      name: "Đường",
                      price: 5452,
                      quantity: 454,
                      unit: "túi",
                      _id: "659d4bf6eea86ddd5a737851"
                    }
                  ],
                  totalPrice: 1000000
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/materials",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create materials", async () => {
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
                materialInfo: [
                    {
                      name: "Bột mỳ",
                      price: 10000,
                      quantity: 100,
                      unit: "kg",
                    },
                    {
                      name: "Bột gạo",
                      price: 635465,
                      quantity: 66,
                      unit: "kg",
                    }
                  ],
                  totalPrice: 65566230
            }
        )
        );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/materials/6623440c706bbf6da942ee16",
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
      };
      it("update materials", async () => {
        try {
          const response = await axios(configPatch);
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error.response.data.error);
        }
      });
      it("delete materials by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/materials/662351c6706bbf6da942eeae",
          });
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
