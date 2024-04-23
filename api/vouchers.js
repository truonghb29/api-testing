import axios from "axios";
import { expect } from "chai";

describe("API testing Vouchers", () => {
    it("Search pagination", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/vouchers/search",
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
    it("Create voucher", async () => {
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/vouchers/create",
            headers: {
                accept: "application/json",
            },
            data: {
                "name": "string",
                "description": "string",
                "code": "string",
                "startDate": "string",
                "endDate": "string",
                "saleScope": "ALL",
                "promotionType": "DISCOUNT_BY_MONEY",
                "discount": 0,
                "discountPercent": 0,
                "maximumReducedAmountMoney": 0,
                "totalQuantityVoucher": "string",
                "maxQuantityUseInUser": 0,
                "minimumOrderValue": "string",
                "customerIdsUsedVoucher": [
                    "string"
                ],
                "listProductUsedVoucher": [
                    {
                        "name": "string",
                        "categoryId": "string",
                        "description": "string",
                        "information": "string",
                        "image": "string",
                        "price": 0,
                        "oldPrice": 0,
                        "orderQuantity": 0,
                        "status": "ACTIVE",
                        "types": [
                            "NORMAL"
                        ],
                        "attributeMapping": [
                            "string"
                        ],
                        "productAttributeList": [
                            {
                                "extendedName": "string",
                                "extendedValue": "string",
                                "productAttributeItem": [
                                    {
                                        "attributeId": "string",
                                        "priceAdjustmentValue": 0
                                    }
                                ]
                            }
                        ],
                        "productsVariant": [
                            "string"
                        ],
                        "visible": true
                    }
                ]
            }
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Get voucher by id", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/vouchers/659c1814eea86ddd5a736a66",
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
    it("Delete voucher", async () => {
        const config = {
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/vouchers?ids=https%3A%2F%2Fdynasty-ws.vtaan.id.vn%2Fapi%2Fvouchers%2F659c1814eea86ddd5a736a66",
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