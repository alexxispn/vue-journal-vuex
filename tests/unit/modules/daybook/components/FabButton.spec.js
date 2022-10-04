import FabButton from "@/modules/daybook/components/FabButton";
import { shallowMount } from "@vue/test-utils";

describe("FabButton component", () => {
    it("should show the default icon", () => {
        const wrapper = shallowMount(FabButton);
        const icon = wrapper.find("i");
        expect(icon.classes("fa-plus")).toBeTruthy();
    });
    it("should exist the icon passed by props; fa-save", () => {
        const wrapper = shallowMount(FabButton, {
            props: {
                icon: "fa-save",
            },
        });
        const icon = wrapper.find("i");
        expect(icon.classes("fa-save")).toBeTruthy();
    });
    it("should emit the event 'on:click' when clicked", () => {
        const wrapper = shallowMount(FabButton);
        wrapper.find("button").trigger("click");
        expect(wrapper.emitted("on:click")).toBeTruthy();
    });
});
