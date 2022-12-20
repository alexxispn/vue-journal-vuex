import authApi from "@/api/authApi";

// eslint-disable-next-line no-unused-vars
export const createAccount = async ({commit}, {email, password}) => {
    try {
        const {data} = await authApi.post(":signUp", {
            email,
            password,
            returnSecureToken: true
        });
        console.log(data);
        return {ok: true, message: "Account created"};
    } catch (error) {
        return {ok: false, message: error.response.data.error.message};
    }
}
