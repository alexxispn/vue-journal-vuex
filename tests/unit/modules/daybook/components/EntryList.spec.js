import {shallowMount} from "@vue/test-utils";
import {createStore} from "vuex";
import journal from "@/modules/daybook/store/journal";
import EntryList from "@/modules/daybook/components/EntryList";
import {journalState} from "../../../mock-data/journal-state";

const createVuexStore = (initialState) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: {...initialState}
            }
        }
    });

describe("EntryList component", () => {
    const store = createVuexStore(journalState);
    const mockRouter = {
        push: jest.fn()
    }
    const wrapper = shallowMount(EntryList, {
        global: {
            mocks: {
                $router: mockRouter
            },
            plugins: [store]
        }
    });
    it("should match snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it("should call getEntriesByTerm without term and show 2 entries", () => {
        expect(wrapper.findAll("entry-item-stub").length).toBe(2);
    });
    it("should call getEntriesByTerm with term and show 1 entry", async () => {
        const input = wrapper.find("input");
        await input.setValue("Hola");
        expect(wrapper.findAll("entry-item-stub").length).toBe(1);
    });
    it("should redirect to new entry when click on new entry button", async () => {
        const button = wrapper.find("button");
        await button.trigger("click");
        expect(mockRouter.push).toHaveBeenCalledWith({
            name: "entry",
            params: {
                id: "new"
            }
        });
    });
});
