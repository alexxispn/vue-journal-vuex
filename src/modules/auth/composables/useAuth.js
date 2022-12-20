import {useStore} from "vuex";

const useAuth = () => {
    const store = useStore();
    const createAccount = async ({name, email, password}) => {
        return await store.dispatch("auth/createAccount", {name, email, password});
    }
    return {
        createAccount
    }
}

export default useAuth;
