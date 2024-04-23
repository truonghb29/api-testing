import axios from "axios";
import { expect } from "chai";

describe("API testing Banners", () => {
    it("get all banners", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/banners/search",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    it("get banners by id", async () => {
        try {
            const response = await axios({
                method: "get",
                url: "https://dynasty-ws.vtaan.id.vn/api/banners/6616a64b24c39be73d3abb06",
            });

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error);
        }
    });
    const formData = new FormData();
    formData.append(
        "bannerInfo",
        JSON.stringify(
            {
                name: "Banner 7",
                priority: "7"
            }
        )
    );
    formData.append(
        "bannerInfo",
        JSON.stringify(
            {
                name: "Banner 8",
                priority: "10"
            }
        )
    );
    const config = {
        method: "post",
        url: "https://dynasty-ws.vtaan.id.vn/api/banners",
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
        data: formData,
    };
    it("create banners", async () => {
        try {
            const response = await axios(config);

            expect(response.status).to.equal(200);
        } catch (error) {
            throw new Error(error.response.data.error);
        }
    });
    const formDataPatch = new FormData();
    formDataPatch.append(
        "bannerInfo",
        JSON.stringify(
            {
                name: "Banner 8",
            }
        )
    );
    const configPatch = {
        method: "patch",
        url: "https://dynasty-ws.vtaan.id.vn/api/banners/6622a50b706bbf6da942ed46",
        headers: {
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        data: formData,
      };
      it("update banners", async () => {
        try {
          const response = await axios(configPatch);
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error.response.data.error);
        }
      });
      it("delete banners by id", async () => {
        try {
          const response = await axios({
            method: "delete",
            url: "https://dynasty-ws.vtaan.id.vn/api/banners/?ids=66229fe7706bbf6da942ed41",
          });
    
          expect(response.status).to.equal(200);
        } catch (error) {
          throw new Error(error);
        }
      });
});
