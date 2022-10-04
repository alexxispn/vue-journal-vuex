import getFullDate from "@/modules/daybook/helpers/getFullDate";

describe("getFullDate helper", () => {
    it("should return an object with the date, month, year and weekday", () => {
        const date = new Date("2022-10-04");
        const fullDate = getFullDate(date);
        expect(fullDate).toEqual({
            day: 4,
            month: "October",
            year: 2022,
            weekday: "Tuesday"
        })
    });
});
