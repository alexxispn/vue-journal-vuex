export const getEntriesByTerm = (state) => (term) => {
    return state.entries.filter((entry) => {
        return entry.text.toLowerCase().includes(term.toLowerCase());
    });
}

export const getEntryById = (state) => (id) => {
    return state.entries.find((entry) => entry.id === id);
}
