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
    commit("updateEntry", newEntry);
    return entry.id;
}

export const addEntry = async ({commit}, entry) => {
    const {data} = await journalApi.post("/entries.json", entry);
    commit("addEntry", {...entry, id: data.name});
    return data.name;
}


export const deleteEntry = async ({commit}, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit("deleteEntry", id);
    return null
}
