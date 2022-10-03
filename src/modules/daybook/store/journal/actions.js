import journalApi from "@/api/journalApi";

export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get("/entries.json")
    if (!data) {
        commit("setEntries", []);
    } else {
        const entries = [];
        for (let id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id]
            });
        }
        commit("setEntries", entries);
        return entries;
    }
}

export const updateEntry = async ({commit}, entry) => {
    const newEntry = {
        ...entry
    }
    delete newEntry.id;
    await journalApi.put(`/entries/${entry.id}.json`, newEntry);
    commit("updateEntry", {...entry});
    return entry.id;
}

export const createEntry = async ({commit}, entry) => {
    const {date, picture, text} = entry;
    const newEntry = {date, picture, text};
    const {data} = await journalApi.post("/entries.json", newEntry);
    commit("addEntry", {...newEntry, id: data.name});
    return data.name;
}

export const deleteEntry = async ({commit}, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit("deleteEntry", id);
    return null
}
