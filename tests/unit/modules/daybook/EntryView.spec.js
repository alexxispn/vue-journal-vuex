import {shallowMount} from "@vue/test-utils";
import {createStore} from "vuex";
import Swal from "sweetalert2";
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
    fire: jest.fn()
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
    it('should redirect to /no-entry if entry does not exist', () => {
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
    it('should delete entry and redirect to /no-entry', (done) => {
        Swal.fire.mockResolvedValueOnce({isConfirmed: true});
        wrapper.find('.btn-outline-danger').trigger('click');
        setTimeout(() => {
            expect(store.dispatch).toHaveBeenCalledWith('journal/deleteEntry', '-NDTTxqbPCxX382b6UBi');
            expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'});
            done();
        }, 1000);
    });
});

