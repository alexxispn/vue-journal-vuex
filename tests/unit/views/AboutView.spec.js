import {shallowMount} from "@vue/test-utils";
import AboutView from "@/views/AboutView.vue";

describe("AboutView.vue", () => {
    it("should match snapshot", () => {
        const wrapper = shallowMount(AboutView);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
