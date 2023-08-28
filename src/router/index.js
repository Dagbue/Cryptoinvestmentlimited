import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loan',
    name: 'Loan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Loan'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact')
  },
  {
    path: "/faq",
    name: "FAQ",
    component: () => import(/* webpackChunkName: "FAQ" */ "../views/FAQ"),
  },
  {
    path: "/testimonial",
    name: "Testimonial",
    component: () => import(/* webpackChunkName: "FAQ" */ "../views/Testimonial"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
        import(/* webpackChunkName: "Register" */ "../views/Auth/REGISTER/Register"),

  },
  {
    path: "/login",
    name: "Login",
    component: () =>
        import(/* webpackChunkName: "Login" */ "../views/Auth/LOGIN/Login"),
  },
  {
    path: "/confirmOTP",
    name: "ConfirmOTP",
    component: () =>
        import(/* webpackChunkName: "Login" */ "../views/Auth/REGISTER/ConfirmOTP"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () =>
        import(/* webpackChunkName: "ForgotPassword" */ "../views/Auth/LOGIN/ForgotPassword"),
  },
  {
    path: "/forgot-passwordOTP",
    name: "ForgotPasswordOTP",
    component: () =>
        import(/* webpackChunkName: "ForgotPasswordOTP" */ "../views/Auth/LOGIN/ForgotPasswordOTP"),
  },
  {
    path: "/new-password",
    name: "NewPassword",
    component: () =>
        import(/* webpackChunkName: "NewPassword" */ "../views/Auth/LOGIN/NewPassword"),
  },

  {
    path: "/dash-home",
    name: "DashHome",
    component: () =>
        import(/* webpackChunkName: "DashHome" */ "../views/Dashboard/DashHome"),
    redirect: { name: 'DashBoard' },
    children: [
      {
        path: "/dash-board",
        name: "DashBoard",
        component: () =>
            import(/* webpackChunkName: "DashBoard" */ "../views/Dashboard/DashBoard"),
        meta: { hideNavigation: true }
      },
      {
        path: "/account",
        name: "Account",
        component: () =>
            import(/* webpackChunkName: "Account" */ "../views/Dashboard/Account"),
        meta: { hideNavigation: true }
      },
      {
        path: "/support",
        name: "Support",
        component: () =>
            import(/* webpackChunkName: "Support" */ "../views/Dashboard/Support"),
        meta: { hideNavigation: true }
      },
      {
        path: "/loan-service",
        name: "ROIHistory",
        component: () =>
            import(/* webpackChunkName: "ROIHistory" */ "../views/Dashboard/ROIHistory"),
        meta: { hideNavigation: true },
        // children: [
        //   {
        //     path: "",
        //     name: "",
        //     component: () =>
        //         import(/* webpackChunkName: "Bitcoin" */ "../views/Dashboard/"),
        //     meta: { hideNavigation: true },
        //   },
        // ]
      },
      {
        path: "/loan-dash-board",
        name: "LoanDashBoard",
        component: () =>
            import(/* webpackChunkName: "ROIHistory" */ "../views/Dashboard/LoanDashBoard"),
        meta: { hideNavigation: true }
      },
      {
        path: "/transactionhistory",
        name: "TransactionHistory",
        component: () =>
            import(/* webpackChunkName: "TransactionHistory" */ "../views/Dashboard/TransactionHistory"),
        meta: { hideNavigation: true },
        redirect: { name: 'Deposit2' },
        children: [
          {
            path: "/deposit2",
            name: "Deposit2",
            component: () =>
                import(/* webpackChunkName: "Deposit2" */ "../views/Dashboard/Deposit2"),
            meta: { hideNavigation: true },
          },
          {
            path: "/withdrawal2",
            name: "Withdrawal2",
            component: () =>
                import(/* webpackChunkName: "Withdrawal2" */ "../views/Dashboard/Withdrawal2"),
            meta: { hideNavigation: true },
          },
          {
            path: "/roihistory2",
            name: "ROIHistory2",
            component: () =>
                import(/* webpackChunkName: "ROIHistory2" */ "../views/Dashboard/ROIHistory2"),
            meta: { hideNavigation: true },
          },
        ]
      },
      {
        path: "/deposit",
        name: "Deposit",
        component: () =>
            import(/* webpackChunkName: "Deposit" */ "../views/Dashboard/Deposit"),
        meta: { hideNavigation: true },
        children: [
          {
            path: "/bitcoin",
            name: "Bitcoin",
            component: () =>
                import(/* webpackChunkName: "Bitcoin" */ "../views/Dashboard/Bitcoin"),
            meta: { hideNavigation: true },
          },
        ]
      },
      {
        path: "/withdrawal",
        name: "Withdrawal",
        component: () =>
            import(/* webpackChunkName: "Withdrawal" */ "../views/Dashboard/Withdrawal"),
        meta: { hideNavigation: true }
      },
      {
        path: "/subscription-trade",
        name: "SubscriptionTrade",
        component: () =>
            import(/* webpackChunkName: "SubscriptionTrade" */ "../views/Dashboard/SubscriptionTrade"),
        meta: { hideNavigation: true }
      },
      {
        path: "/refer-users",
        name: "ReferUsers",
        component: () =>
            import(/* webpackChunkName: "ReferUsers" */ "../views/Dashboard/ReferUsers"),
        meta: { hideNavigation: true }
      },
      {
        path: "/pacakages",
        name: "Pacakages",
        component: () =>
            import(/* webpackChunkName: "Pacakages" */ "../views/Dashboard/Pacakages"),
        meta: { hideNavigation: true }
      },
      {
        path: "/account-settings",
        name: "AccountSettings",
        component: () =>
            import(/* webpackChunkName: "AccountSettings" */ "../views/Dashboard/AccountSetting"),
        meta: { hideNavigation: true },
        redirect: { name: 'ChangePassword' },
        children: [
          {
            path: "/change-password",
            name: "ChangePassword",
            component: () =>
                import(/* webpackChunkName: "ChangePassword" */ "../views/Dashboard/ChangePassword"),
            meta: { hideNavigation: true },
          },
          {
            path: "/update-account",
            name: "UpdateAccount",
            component: () =>
                import(/* webpackChunkName: "UpdateAccount" */ "../views/Dashboard/UpdateAccount"),
            meta: { hideNavigation: true },
          },
        ]
      },
    ]
  },


  {
    path: "/admin",
    name: "Admin",
    component: () =>
        import(/* webpackChunkName: "Admin" */ "../views/admin/AdminLogin"),
  },
  {
    path: "/admin-home",
    name: "Admin-Home",
    component: () =>
        import(/* webpackChunkName: "Admin-Home" */ "../views/admin/Admin"),
    meta: { hideNavigation: true },
    children: [
      {
        path: "/admin-dashboard",
        name: "adminDashboard",
        component: () =>
            import(/* webpackChunkName: "adminDashboard" */ "../views/admin/adminDashboard"),
        meta: { hideNavigation: true }
      },
      {
        path: "/list-of-users",
        name: "listOfUsers",
        component: () =>
            import(/* webpackChunkName: "listOfUsers" */ "../views/admin/listOfUsers"),
        meta: { hideNavigation: true }
      },
      {
        path: "/user-list",
        name: "UsersList",
        component: () =>
            import(/* webpackChunkName: "UsersList" */ "../views/admin/usersList"),
        meta: { hideNavigation: true }
      },
      {
        path: "/investments",
        name: "Investments",
        component: () =>
            import(/* webpackChunkName: "Investments" */ "../views/admin/Investments"),
        meta: { hideNavigation: true }
      },
      {
        path: "/deposit-request",
        name: "depositRequest",
        component: () =>
            import(/* webpackChunkName: "depositRequest" */ "../views/admin/depositRequest"),
        meta: { hideNavigation: true }
      },
      {
        path: "/withdrawal-request",
        name: "withdrawalRequest",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequest" */ "../views/admin/withdrawalRequest"),
        meta: { hideNavigation: true }
      },

      {
        path: "/loan-request",
        name: "LoanRequest",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequest" */ "../views/admin/LoanRequest"),
        meta: { hideNavigation: true }
      },

      {
        path: "/edit-loan",
        name: "EditLoan",
        component: () =>
            import(/* webpackChunkName: "withdrawalRequest" */ "../views/admin/EditLoan"),
        meta: { hideNavigation: true }
      },

      {
        path: "/referral-bonus",
        name: "referralBonus",
        component: () =>
            import(/* webpackChunkName: "referralBonus" */ "../views/admin/referralBonus"),
        meta: { hideNavigation: true }
      },
      {
        path: "/change-password-2",
        name: "changePassword2",
        component: () =>
            import(/* webpackChunkName: "changePassword2" */ "../views/admin/changePassword2"),
        meta: { hideNavigation: true }
      },
      {
        path: "/portfolio",
        name: "Portfolio",
        component: () =>
            import(/* webpackChunkName: "Portfolio" */ "../views/admin/Portfolio"),
        meta: { hideNavigation: true }
      },
      {
        path: "/add-new-user",
        name: "addNewUser",
        component: () =>
            import(/* webpackChunkName: "addNewUser" */ "../views/admin/addNewUser"),
        meta: { hideNavigation: true }
      },
      {
        path: "/edit-investments",
        name: "editInvestments",
        component: () =>
            import(/* webpackChunkName: "addNewUser" */ "../views/admin/editInvestments"),
        meta: { hideNavigation: true }
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
