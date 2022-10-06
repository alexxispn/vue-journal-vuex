import getFullDate from "@/modules/daybook/helpers/getFullDate";

export const getEntriesByTerm = (state) => (term) => {
    return state.entries.filter((entry) => {
        const {fullDate} = getFullDate(entry.date);
        return entry.text.toLowerCase().includes(term.toLowerCase()) || fullDate.toLowerCase().includes(term.toLowerCase());
    })
}

export const getEntryById = (state) => (id) => {
    const entry = state.entries.find((entry) => entry.id === id)
    return entry;
}
