import axios from "axios";
import { expect } from "chai";

describe("EmailConfig Testing API", () => {
    it("Search pagination", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/email-config/search?pageIndex=0&pageSize=10&isDefault=1",
                headers: {
                    accept: "application/json",
                },
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Create", async () => {
        const formData = new FormData();
        formData.append(
            "emailConfigInfo",
            JSON.stringify({
                "_id": "1",
                "username": "thanhtruong",
                "password": "thanhtruong",
                "mailServer": "smtp.gmail.com",
                "port": 587,
                "isDefault": true
            })
        );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/email-config",
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
    it("Update", async () => {
        const formData = new FormData();
        formData.append(
            "emailConfigInfo",
            JSON.stringify({
                "_id": "1",
                "username": "thanhtruong",
                "password": "thanhtruong",
                "mailServer": "smtp.gmail.com",
                "port": 587,
                "isDefault": true
            })
        );
    const config = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/email-config/1",
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
                url: "https://dynasty-ws.vtaan.id.vn/api/email-config/66233951706bbf6da942ed71",
                headers: {
                    accept: "application/json",
                },
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Delete", async () => {
        const config = {
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/email-config/{id}?ids=66233951706bbf6da942ed71",
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