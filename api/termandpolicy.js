import axios from "axios";
import { expect } from "chai";

describe("API testing Term and Policy", () => {
    it("Search all", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/term-and-policy/search-all",
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
    it("Create", async () => {
        const fromData = new FormData();
        fromData.append(
            "termAndPolicyInfo",
            JSON.stringify({
                "deliveryPolicy": "Tao la Xuan Trong",
                "privatePolicy": "string",
                "termAndCondition": "string"
              })
        );
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/term-and-policy",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
            data: fromData,
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Update", async () => {
        const fromData = new FormData();
        fromData.append(
            "termAndPolicyInfo",
            JSON.stringify({
                "deliveryPolicy": "Truong ga cho",
                "privatePolicy": "string",
                "termAndCondition": "string"
              })
        );
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/term-and-policy/662547d1c3af62063621acd5",
            headers: {
                accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
            data: fromData,
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Get by id", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/term-and-policy/662549a3c3af62063621ace6",
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
    it("Delete", async () => {
        const config = {
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/term-and-policy/?ids=66254859c3af62063621acde&ids=66254833c3af62063621acdb",
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