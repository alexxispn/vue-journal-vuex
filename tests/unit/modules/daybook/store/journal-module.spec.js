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
    describe("State", () => {
        it('should have a initial state like this', () => {
            const store = createVuexStore(journalState);
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeTruthy();
            expect(entries).toEqual(journalState.entries);
        });
    });
    describe("Getters", () => {
        describe("getEntriesByTerm", () => {
            it('should return an array of entries', () => {
                const store = createVuexStore(journalState);
                const entries = store.getters["journal/getEntriesByTerm"]("Hola");
                expect(entries).toEqual([journalState.entries[1]]);
            });
        });
        describe("getEntryById", () => {
            it('should return an entry', () => {
                const store = createVuexStore(journalState);
                const id = "-NDTTxqbPCxX382b6UBi";
                const entry = store.getters['journal/getEntryById'](id);
                expect(entry.id).toBe(id);
            });
            it('should change when the state changes', () => {
                const store = createVuexStore(journalState);
                const id = "-NDTTxqbPCxX382b6UBi";
                const entry = store.getters['journal/getEntryById'](id);
                expect(entry.id).toBe(id);
                const updatedEntry = {
                    id: "-NDTTxqbPCxX382b6UBi",
                    date: 1664811259736,
                    text: "hola mundo desde update"
                };
                store.commit('journal/updateEntry', updatedEntry);
                const newEntry = store.getters['journal/getEntryById'](id);
                expect(newEntry.text).toBe(updatedEntry.text);
            });
        });
    });
    describe("Mutations", () => {
        it('should set entries', () => {
            const store = createVuexStore(journalState);
            store.commit('journal/setEntries', journalState.entries);
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeFalsy();
            expect(entries.length).toBe(2);
            expect(entries).toEqual(journalState.entries);
        });
        it('should update an entry', () => {
            const store = createVuexStore(journalState);
            const updatedEntry = {
                id: "-NDTTxqbPCxX382b6UBi",
                date: 1664811259736,
                text: "hola mundo desde update"
            };
            store.commit('journal/updateEntry', updatedEntry);
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeTruthy();
            expect(entries.length).toBe(2);
            expect(entries.find(entry => entry.id === updatedEntry.id).text).toBe(updatedEntry.text);
        });
        it('should add an entry', async () => {
            const store = createVuexStore(journalState);
            const newEntry = {
                id: "123",
                date: 1664811259736,
                text: "hola mundo desde add"
            };
            store.commit('journal/addEntry', newEntry);
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeTruthy();
            expect(entries.length).toBe(3);
            expect(entries.find(entry => entry.id === newEntry.id)).toEqual(newEntry);
        });
        it('should delete an entry', () => {
            const store = createVuexStore(journalState);
            const id = "123";
            store.commit('journal/deleteEntry', id);
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeTruthy();
            expect(entries.length).toBe(2);
            expect(entries.find(entry => entry.id === id)).toBe(undefined);
        });
    });
    describe.skip("Actions", () => {
        it('should load entries', async () => {
            const store = createVuexStore({isLoading: false, entries: []});
            await store.dispatch('journal/loadEntries');
            const {entries, isLoading} = store.state.journal;
            expect(isLoading).toBeFalsy();
            expect(entries.length).toBe(2);
        });
        it('should update an entry', async () => {
            const store = createVuexStore(journalState);
            const updatedEntry = {
                id: "-NDXopVqgqsXIVCoN88",
                date: 1664811259736,
                text: "hola mundo desde updateAction2"
            };
            await store.dispatch('journal/updateEntry', updatedEntry);
            await store.dispatch('journal/loadEntries');
            expect(store.state.journal.entries.length).toBe(2);
            expect(store.state.journal.entries.find(entry => entry.id === updatedEntry.id).text).toBe(updatedEntry.text);
        });
        it('should add and delete an entry', async () => {
            const store = createVuexStore(journalState);
            const newEntry = {
                date: 1664811259736,
                text: "hola mundo desde addAction"
            };
            await store.dispatch('journal/addEntry', newEntry);
            await store.dispatch('journal/loadEntries');
            const id = store.state.journal.entries.find(entry => entry.text === newEntry.text).id;
            expect(store.state.journal.entries.length).toBe(3);
            expect(store.state.journal.entries.find(entry => entry.id === id)).toEqual({...newEntry, id});
            await store.dispatch('journal/deleteEntry', id);
            await store.dispatch('journal/loadEntries');
            expect(store.state.journal.entries.length).toBe(2);
        })
    });
});
