import axios from "axios";
import { expect } from "chai";

describe("API testing Statistic", () => {
    it("Statistc customers", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/statistic/customers?from=2002-12-1T00%3A00%3A00&to=2023-1-1T23%3A59%3A59",
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
    it("Statistic orders", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/statistic/orders?from=2002-12-1T00%3A00%3A00&to=2023-1-1T23%3A59%3A59",
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