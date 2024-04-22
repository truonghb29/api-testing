import axios from "axios";
import { expect } from "chai";

describe("CustomerAddress Testing API", () => {
    it("Find by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/customerAddress/6610144d34145d21f8c35e1d",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Add customer address item", async () => {
        const formData = new FormData();
        formData.append(
            "customerAddressInfo",
            JSON.stringify({
                "customerId": "6610144d34145d21f8c35e1d",
                "addressItem": {
                    "cityId": "200000",
                    "districtId": "11",
                    "city": "HCM",
                    "district": "Quận 11",
                    "location": "Ly Thuong Kiet",
                    "wardId": "1",
                    "isDefault": false,
                    "phoneNumber": "01234567890",
                    "fullName": "Nguyen Van A",
                    "ward": "Phường 1",
                }
            })
        );
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/customer-address",
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
    it("Update customer address item", async () => {
        const formData = new FormData();
        formData.append(
            "customerAddressInfo",
            JSON.stringify({
                "customerId": "string",
                "addressItem": {
                    "cityId": "string",
                    "districtId": "string",
                    "city": "string",
                    "district": "string",
                    "location": "string",
                    "wardId": "string",
                    "isDefault": false,
                    "phoneNumber": "string",
                    "fullName": "string",
                    "ward": "string"
                }
            }
            )
        );
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn//api/customers/customer-address/6610144d34145d21f8c35e1d",
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
});
it("Delete customer", async () => {
    const response = await axios({
        method: "delete",
        url: "https://dynasty-ws.vtaan.id.vn//api/customers/customer-address/6610144d34145d21f8c35e1d",
        headers: {
            accept: "application/json",
        },
    });
    try {
        expect(response.status).to.equal(200);
    } catch (error) {
        throw new Error(error);
    }
});
