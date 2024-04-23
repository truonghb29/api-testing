import axios from "axios";
import { expect } from "chai";

describe("API testing Store Information", () => {
    it("get all store information", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/store-information/search-all",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get store information by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/store-information/66235e4f706bbf6da942ef3c",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "storeInformationInfo",
        JSON.stringify(
            {
                brandStore: "Dom dom",
                introduce: "Jackal",
                representativeOffice: {
                    name: "K-atm",
                    address: "Hoc Mon, TP.HCM",
                    email: "theanh28@gmail.com",
                    phoneNumber: "+9876543210",
                    taxCode: "0987654321"
                },
                recruitment: "Welcome to Dom Dom"
            }
        )
    );
    formData.append(
        "storeInformationInfo",
        JSON.stringify(
            {
                brandStore: "Hahaa",
                introduce: "Miss Fortune",
                representativeOffice: {
                    name: "KPop",
                    address: "Q12, TP.HCM",
                    email: "thanhminh28@gmail.com",
                    phoneNumber: "+987541378",
                    taxCode: "0987657890"
                },
                recruitment: "Ni hao"
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/store-information",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create store information", async () => {
        try {
            const response = await axios(config);
            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "storeInformationInfo",
        JSON.stringify(
            {
                brandStore: "Hahaahuhuhuhu",
                introduce: "Veigar",
                representativeOffice: {
                    name: "KPop",
                    address: "Q12, TP.HCM",
                    email: "thanhminh28@gmail.com",
                    phoneNumber: "+987541378",
                    taxCode: "0987657890"
                },
                recruitment: "Ni hao"
            }
        )
    );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/store-information/66235f1d706bbf6da942ef44",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
    };
    it("update store information", async () => {
        try {
            const response = await axios(configPatch);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
      it("delete store information by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/store-information/?ids=66235efa706bbf6da942ef40",
          });

          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
