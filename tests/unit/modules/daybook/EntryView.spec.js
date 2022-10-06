import {shallowMount} from "@vue/test-utils";
import {createStore} from "vuex";
import journal from "@/modules/daybook/store/journal";
import {journalState} from "../../mock-data/journal-state";
import EntryView from "@/modules/daybook/views/EntryView";

const createVuexStore = (state) => createStore({
    modules: {
        journal: {
            ...journal,
            state
        }
    }
});
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('EntryView component', () => {
    const store = createVuexStore(journalState);
    store.dispatch = jest.fn();
    const mockRouter = {
        push: jest.fn()
    }
    let wrapper;
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallowMount(EntryView, {
            props: {
                id: '-NDTTxqbPCxX382b6UBi'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        });
    });
    it('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });
    it('should redirect to /daybook if entry does not exist', () => {
        wrapper = shallowMount(EntryView, {
            props: {
                id: '123'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [store]
            }
        });
        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'});
    });
});

