import axios from "axios";
import { expect } from "chai";

describe("Testing API Product Variant", async () => {
    it("Search pagination", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/product-variants/search",
            headers: {
                accept: "application/json"
            }
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200)
        } catch {
            throw new Error(error);
        }
    });
    it("Create", async () => {
        const formData = new FormData();
        formData.append(
            "productVariantInfo",
            JSON.stringify({
                "parentId": "string",
                "productItem": {
                    "productsVariant": [
                        "string"
                    ],
                    "oldPrice": 0,
                    "price": 0,
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
                    "name": "string",
                    "information": "string",
                    "visible": true,
                    "attributeMapping": [
                        "string"
                    ],
                    "status": "ACTIVE",
                    "types": [
                        "NORMAL"
                    ],
                    "orderQuantity": 0,
                    "categoryId": "string",
                    "image": "string",
                    "description": "string"
                }
            }),
        );
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/product-variants",
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
            throw new Error(error);
        }
    });
    it("Update", async () => {
        const formData = new FormData();
        formData.append(
            "productVariantInfo",
            JSON.stringify({

                "parentId": "string",
                "productItem": {
                    "productsVariant": [
                        "string"
                    ],
                    "oldPrice": 0,
                    "price": 0,
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
                    "name": "string",
                    "information": "string",
                    "visible": true,
                    "attributeMapping": [
                        "string"
                    ],
                    "status": "ACTIVE",
                    "types": [
                        "NORMAL"
                    ],
                    "orderQuantity": 0,
                    "categoryId": "string",
                    "image": "string",
                    "description": "string"
                }
            }),
        );
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/product-variants/659c1814eea86ddd5a736a66",
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
            throw new Error(error);
        }   
    });
    it("Find by id", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/product-variants/659c1814eea86ddd5a736a66",
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
            url: "https://dynasty-ws.vtaan.id.vn/api/product-variants/?ids=659c1814eea86ddd5a736a66",
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