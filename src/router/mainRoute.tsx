import { createBrowserRouter } from "react-router-dom"
import Register from "../pages/auth/Register"
import HomeScreen from "../pages/screen/home/HomeScreen"
import ErrorScreen from "../error/error2/Error"
import SignInScreen from "../pages/auth/SigninScreen"
import PrivateRoute from "./privateRoute"
import Layout from "../components/common/Layout"

import ResponseScreen from "../pages/auth/ResponseScreen"
import ProfileScreen from "../pages/screen/profile/ProfileScreen"
import SettingScreen from "../pages/screen/settings/SettingScreen"
import InsideTrack from "../pages/screen/home/InsideTrack"
import MainCourse from "../pages/screen/mainCourses/MainCourse"
import CourseBreakDown from "../pages/screen/mainCourses/package/CourseBreakDown"
import DetailCoursePage from "../pages/screen/mainCourses/package/DetailCoursePage"

export const mainRoute = createBrowserRouter([
    {
        path: "register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignInScreen />
    },
    {
        path: "/",
        element: <PrivateRoute>
            <Layout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },

            {
                index: true,
                path: "inside",
                element: <InsideTrack />
            },
            {
                index: true,
                path: "main-course",
                element: <MainCourse />
            },
            {
                index: true,
                path: "course-detail",
                element: <DetailCoursePage />
            },
            {
                index: true,
                path: "setting",
                element: <SettingScreen />
            },
            {
                index: true,
                path: "course-broke-down",
                element: <CourseBreakDown />
            },

            {
                index: true,
                path: "profile",
                element: <ProfileScreen />
            },

        ]


    },
    {
        path: "/response",
        element: <ResponseScreen />
    },
    {
        path: "*",
        element: <ErrorScreen />
    },
])