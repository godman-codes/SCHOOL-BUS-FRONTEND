import {
   API_URL,
   GET_ADMIN_DETAILS,
   GET_ACTIVE_TRIPS,
   GET_NOTIFICATIONS,
   GET_TRIP,
   REGISTER_BUS,
   REGISTER_CHILD,
   REGISTER_DRIVER,
   REGISTER_PARENT,
   REGISTER_ROUTES,
   REGISTER_TRIP,
   REGISTER_SCHOOL,
   SEARCH_BUS,
   SEARCH_CHILDREN,
   SEARCH_DRIVER,
   SEARCH_PARENT,
   CHANGE_PASSWORD_ADMIN,
   CHANGE_PASSWORD_DRIVER,
   CHANGE_PASSWORD_PARENT,
   LOGIN_ADMIN,
   LOGIN_DRIVER,
   LOGIN_PARENT,
   CHILD_DROP_ATTENDANCE,
   CHILD_PICKED_ATTENDANCE,
   DRIVER_DETAIL,
   END_TRIP,
   GET_DRIVERS_BUS,
   GET_DRIVERS_DEVICE_LOCATION,
   GET_TRIPS,
   START_TRIP,
   GET_CHILD_TRIP,
   GET_PARENT_NOTIFICATION,
   GET_PARENT_DETAILS,
   GET_ADMIN_REFRESH_TOKEN,
   GET_DRIVER_REFRESH_TOKEN,
   GET_PARENT_REFRESH_TOKEN,
   GET_PARENT_LOG,
   GET_DRIVER_LOG,
   GET_CHILDREN_LOG,
   GET_BUS_LOG,
   GET_CHILDREN_TRIPS,
   GET_DRIVER_TRIPS,
   GET_DRIVERS_ATTENDANCE_LOG,
} from "./config";

const apiSetting = {
   loginAdmin: async (body) => {
      const fetchLogin = await (
         await fetch(`${LOGIN_ADMIN}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchLogin;
   },
   loginDriver: async (body) => {
      const fetchLogin = await (
         await fetch(`${LOGIN_DRIVER}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchLogin;
   },
   loginParent: async (body) => {
      const fetchLogin = await (
         await fetch(`${LOGIN_PARENT}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchLogin;
   },
   registerParent: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_PARENT}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   registerDriver: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_DRIVER}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   registerBus: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_BUS}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   registerRoute: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_ROUTES}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   registerChild: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_CHILD}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   registerTrip: async (body, bearer) => {
      const fetchRegister = await (
         await fetch(`${REGISTER_TRIP}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return fetchRegister;
   },
   getActiveTrips: async (bearer) => {
      const fetchActiveTrips = await (
         await fetch(`${GET_ACTIVE_TRIPS}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchActiveTrips;
   },
   getParentLog: async (bearer) => {
      const fetchParentLog = await (
         await fetch(`${GET_PARENT_LOG}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchParentLog;
   },
   getDriverLog: async (bearer) => {
      const fetchDriverLog = await (
         await fetch(`${GET_DRIVER_LOG}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchDriverLog;
   },
   getChildrenLog: async (bearer) => {
      const fetchChildrenLog = await (
         await fetch(`${GET_CHILDREN_LOG}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchChildrenLog;
   },
   getBusLog: async (bearer) => {
      const fetchBusLog = await (
         await fetch(`${GET_BUS_LOG}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchBusLog;
   },
   getChildrenTripsLog: async (bearer) => {
      const fetchChildrenTripsLog = await (
         await fetch(`${GET_CHILDREN_TRIPS}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      console.log("no error");
      return fetchChildrenTripsLog;
   },
   getDriverTrips: async (bearer) => {
      const fetchDriverTrip = await (
         await fetch(`${GET_DRIVER_TRIPS}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchDriverTrip;
   },
   getDriversAttendance: async (bearer) => {
      const fetchDriverAttendance = await (
         await fetch(`${GET_DRIVERS_ATTENDANCE_LOG}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchDriverAttendance;
   },
};

export default apiSetting;
