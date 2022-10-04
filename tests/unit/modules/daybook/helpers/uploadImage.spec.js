// import setInmediate from 'setimmediate';
// import axios from "axios";
import uploadImage from "@/modules/daybook/helpers/uploadImage";

describe("uploadImage helper", () => {
    it("should return null if no file is passed", async () => {
        const url = await uploadImage();
        expect(url).toBe(null);
    })
    // it("should return the url when the file is uploaded", async () => {
    //     const {data} = await axios.get(`https://res.cloudinary.com/alexxispn/image/upload/v1664813140/cld-sample-5.jpg`, {
    //         responseType: "arraybuffer"
    //     })
    //     const file = new File([data], "sample.jpg");
    //     const url = await uploadImage(file);
    //     expect(typeof url).toBe("string");
    //     expect(url.includes("https://res.cloudinary.com/alexxispn/image/upload/")).toBe(true);
    // })
})
