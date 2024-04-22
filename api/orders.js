import axios from "axios";
import { expect } from "chai";

describe("API testing Orders", () => {
    it("Search pagination", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/search",
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
    it("Get by id", async () => {
        const config = {
            method: "get",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/659d4bf6eea86ddd5a737853",
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
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/659d4bf6eea86ddd5a737853",
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
    it("Checkout", async () => {
        const formData = new FormData();
        formData.append(
            "orderInfo",
            JSON.stringify({
                "orderAtStore": "string",
                "reasonOrderCancel": "string",
                "cityId": 0,
                "paymentMethod": "PAYMENT_ON_DELIVERY",
                "voucherId": "string",
                "districtId": 0,
                "totalAmountBeforeUsingDiscount": 0,
                "totalOrder": 0,
                "shipFee": 0,
                "city": "string",
                "productsFromCart": {
                  "customerId": "string",
                  "products": [
                    {
                      "product": {
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
                      },
                      "note": "string",
                      "productQuantities": 0
                    }
                  ],
                  "totalQuantity": 0,
                  "totalCart": 0
                },
                "district": "string",
                "dateTimeOrderReceive": "string",
                "typeOrder": "ORDER_DELIVERING",
                "location": "string",
                "wardId": 0,
                "phoneNumber": "string",
                "statusCheckout": "VERIFY_INFORMATION",
                "customerId": {
                  "orderIds": [
                    "string"
                  ],
                  "otp": "string",
                  "customerAddressId": "string",
                  "status": "ACTIVE",
                  "phoneNumber": "string",
                  "customerType": "NEW",
                  "avatar": "string",
                  "fullName": "string",
                  "password": "string",
                  "email": "string",
                  "birthday": "string"
                },
                "fullName": "string",
                "_id": "string",
                "ward": "string",
                "statusOrder": "WAITING_FOR_PAYMENT",
                "productsWhenTheCustomerIsNotLoggedIn": [
                  "string"
                ],
                "orderReceivingTime": "NOW"
              })
        );
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/checkout",
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
    it("Re-order", async () => {
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/re-order/659d4bf6eea86ddd5a737853",
            headers: {
                accept: "application/json",
            },
            data: "",
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Update status order", async () => {
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/update-status-order/659d4bf6eea86ddd5a737853?statusOrderRequest=1",
            headers: {
                accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
        };
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("Request", async () => {
        const config = {
            method: "patch",
            url: "https://dynasty-ws.vtaan.id.vn/api/orders/cancel-order/659d4bf6eea86ddd5a737853?reason=nothing",
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