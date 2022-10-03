export const setEntries = (state, entries) => {
    state.entries = entries;
    state.isLoading = false;
}

export const updateEntry = (state, entry) => {
    const index = state.entries.findIndex(item => item.id === entry.id);
    state.entries[index] = entry;
}

export const addEntry = (state, entry) => {
    state.entries.unshift(entry);
}

export const deleteEntry = (state, id) => {
    state.entries = state.entries.filter(entry => entry.id !== id);
}
