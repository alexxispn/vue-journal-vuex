export default {
    name: "auth",
    component: () => import(/* webpackChunkName: "Auth Layout" */ "@/modules/auth/layouts/AuthLayout.vue"),
    children: [
        {
            path: "",
            name: "auth-login",
            component: () => import(/* webpackChunkName: "Login" */ "@/modules/auth/views/LoginView.vue")
        },
        {
            path: "register",
            name: "auth-register",
            component: () => import(/* webpackChunkName: "Register" */ "@/modules/auth/views/RegisterView.vue")
        }
        ]
}
