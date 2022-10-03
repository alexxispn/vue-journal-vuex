export const getEntriesByTerm = (state) => (term) => {
    return state.entries.filter((entry) => {
        return entry.text.toLowerCase().includes(term.toLowerCase()) || entry.date.includes(term)
    })
}

export const getEntryById = (state) => (id) => {
    const entry = state.entries.find((entry) => entry.id === id)
    if (entry) {
        return entry
    }
    return null
}
