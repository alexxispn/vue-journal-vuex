import {createStore} from "vuex";
import journal from "@/modules/daybook/store/journal";
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

describe("Journal Module", () => {
    it('should have a initial state like this', () => {
        const store = createVuexStore(journalState);
        const {entries, isLoading} = store.state.journal;
        expect(isLoading).toBeTruthy();
        expect(entries).toEqual(journalState.entries);
    });
});

