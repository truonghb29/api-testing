import axios from "axios";
import { expect } from "chai";

describe("EmailTemplate Testing API", () => {
    it("Search pagination", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/materials/search",
                headers: {
                    accept: "application/json",
                },
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Create the material", async () => {
        const formData = new FormData();
        formData.append(
            "materialInfo",
            JSON.stringify({
                "importDate": "string",
                "materialInfo": [
                    {
                        "name": "string",
                        "price": 0,
                        "quantity": 0,
                        "unit": "string"
                    }
                ],
                "totalPrice": 0
            })
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
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    it("Update the material", async () => {
        const formData = new FormData();
        formData.append(
            "materialInfo",
            JSON.stringify({
                "importDate": "string",
                "materialInfo": [
                    {
                        "name": "string",
                        "price": 0,
                        "quantity": 0,
                        "unit": "string"
                    }
                ],
                "totalPrice": 0
            })
        );
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/materials/65958fd91ea3d75d47614e30",
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
            throw new Error(error.response.data.error);
        }
    });
    it("Find by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/materials/65958fd91ea3d75d47614e30",
                headers: {
                    accept: "application/json",
                },
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Delete the material", async () => {
        const config = {
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/materials/6623440c706bbf6da942ee16",
            headers: {
                accept: "application/json",
            },
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
});