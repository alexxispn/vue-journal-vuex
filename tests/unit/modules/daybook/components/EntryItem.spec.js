import EntryItem from "@/modules/daybook/components/EntryItem";
import {shallowMount} from "@vue/test-utils";
import {journalState} from "../../../mock-data/journal-state";

describe("EntryItem component", () => {
    const mockRouter = {
        push: jest.fn()
    }
    const wrapper = shallowMount(EntryItem, {
        props: {
            entry: journalState.entries[1]
        },
        global: {
            mocks: {
                $router: mockRouter
            }
        }
    });

    it("should match snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it("should redirect to entryView page when entry is clicked", () => {
        wrapper.find(".entry-container").trigger("click");
        expect(mockRouter.push).toHaveBeenCalledWith({
            name: "entry",
            params: {
                id: journalState.entries[1].id
            }
        });
    });
    it ("should show the correct date", () => {
        expect(wrapper.vm.day).toBe(4);
        expect(wrapper.vm.month).toBe("October");
        expect(wrapper.vm.year).toBe(2022);
        expect(wrapper.vm.weekday).toBe("Tuesday");
    });
});
