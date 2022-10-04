import HomeView from "@/views/HomeView";
import {shallowMount} from "@vue/test-utils";

describe("HomeView.vue", () => {
    it("should match snapshot", () => {
        const wrapper = shallowMount(HomeView);
        expect(wrapper.html()).toMatchSnapshot();
    });
    it("should redirect to daybook when click on button", () => {
        const mockRouter = {
            push: jest.fn()
        }
        const wrapper = shallowMount(HomeView, {
            global: {
                mocks: {
                    $router: mockRouter
                }
            }
        });
        wrapper.find("button").trigger("click");
        expect(mockRouter.push).toHaveBeenCalledWith({name: "no-entry"});
    });

});
