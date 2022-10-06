import EntryList from "@/modules/daybook/components/EntryList";
import {shallowMount} from "@vue/test-utils";


describe("EntryList component", () => {
    it("should match snapshot", () => {
        const wrapper = shallowMount(EntryList);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
