import axios from "axios";
import { expect } from "chai";

describe("API testing Carts", () => {
    it("Get cart by customerId", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/carts/66100f5434145d21f8c35dfb",
            headers: {
                accept: "application/json",
            },
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Add cart", async () => {
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/carts/66100f5434145d21f8c35dfb",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                "product": "Dilldo",
                "note": "string",
                "productQuantities": 0
              }
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Update cart", async () => {
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/carts/66100f5434145d21f8c35dfb",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            data: {
                "product": "Cak3",
                "note": "string",
                "productQuantities": 0
            },
            timeout: 5000
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Delete cart", async () => {
        const config = {
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/carts/66100f5434145d21f8c35dfb?productId=66100f5434145d21f8c35dfd",
            headers: {
                accept: "application/json",
            },
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
});