export const setEntries = (state, entries) => {
    state.entries = entries;
}

export const updateEntry = (state, entry) => {
    state.entries = state.entries.map(e => e.id === entry.id ? entry : e);
}
