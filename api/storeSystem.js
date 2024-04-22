import axios from "axios";
import { expect } from "chai";

describe("API testing Store System", () => {
    // it("get all store system", async () => {
    //     try {
    //         const response = await axios({
    //             method: "get",
    //             url: "https://dynasty-ws.vtaan.id.vn/api/store-system/search",
    //         });

    //         expect(response.status).to.equal(200);
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // });
    // it("get store system by id", async () => {
    //     try {
    //         const response = await axios({
    //             method: "get",
    //             url: "https://dynasty-ws.vtaan.id.vn/api/store-system/661ea12f706bbf6da942e5dc",
    //         });

    //         expect(response.status).to.equal(200);
    //     } catch (error) {
    //         throw new Error(error);
    //     }
    // });
    const formData = new FormData();
    formData.append(
        "storeSystemInfo",
        JSON.stringify(
            {
                cityID: 550,
                districtID: 10,
                city: "Thành phố Hồ Chí Minh",
                name: "Dirty Coins - Bac Hai Q10",
                latitude: "10.7890123456789",
                phone: "1800 824 741",
                district: "Quận 10",
                longitude: "106.6789012345678",
                location: "35 Bac Hai",
                wardID: 1,
                ward: "Phường 03"
            }
        )
    );
        const config = {
            method: "post",
            url: "https://dynasty-ws.vtaan.id.vn/api/store-system",
            headers: {
                accept: "application/json",
                "Content-Type": "multipart/form-data",
            },
            data: formData,
        };
        it("create store system", async () => {
            try {
                const response = await axios(config);
                expect(response.status).to.equal(200);
            } catch (error) {
                throw new Error(error.response.data.error);
            }
        });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "materialInfo",
        JSON.stringify(
            {

            }
        )
        );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/materials/6623440c706bbf6da942ee16",
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        data: formDataPatch,
      };
      it("update store system", async () => {
        try {
          const response = await axios(configPatch);
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error.response.data.error);
        }
      });
      it("delete store system by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/store-system/",
          });
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
