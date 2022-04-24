import {
   GET_ADMIN_SCHEDULED_TRIPS,
   GET_ADMIN_ACTIVE_TRIPS,
   REGISTER_BUS,
   REGISTER_CHILD,
   REGISTER_DRIVER,
   REGISTER_PARENT,
   REGISTER_ROUTES,
   REGISTER_TRIP,
   LOGIN_ADMIN,
   LOGIN_DRIVER,
   LOGIN_PARENT,
   GET_DRIVERS_DEVICE_LOCATION,
   GET_PARENT_LOG,
   GET_DRIVER_LOG,
   GET_CHILDREN_LOG,
   GET_BUS_LOG,
   GET_CHILDREN_TRIPS,
   GET_DRIVER_ACTIVE_TRIPS,
   GET_DRIVERS_CURRENT_TRIP_ATTENDANCE_LOG,
   GET_DRIVER_CURRENT_SCHEDULED_TRIP,
   GET_ALL_DRIVER_SCHEDULED_TRIPS,
   STREAM_DRIVERS_LOCATION,
   START_TRIP,
   END_TRIP,
   CHILD_PICKED_ATTENDANCE,
   CHILD_DROPPED_ATTENDANCE,
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
         await fetch(`${GET_ADMIN_ACTIVE_TRIPS}`, {
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
   getScheduledTrips: async (bearer) => {
      const fetchScheduledTrips = await (
         await fetch(`${GET_ADMIN_SCHEDULED_TRIPS}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchScheduledTrips;
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
   getDriverActiveTrips: async (bearer) => {
      const fetchDriverTrip = await (
         await fetch(`${GET_DRIVER_ACTIVE_TRIPS}`, {
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
   getDriverScheduledTrips: async (bearer) => {
      const fetchDriverTrip = await (
         await fetch(`${GET_ALL_DRIVER_SCHEDULED_TRIPS}`, {
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
   getDriversAttendance: async (bearer, id) => {
      const fetchDriverAttendance = await (
         await fetch(`${GET_DRIVERS_CURRENT_TRIP_ATTENDANCE_LOG}/${id}`, {
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
   getDriverCurrentTrip: async (bearer, id) => {
      const fetchTrip = await (
         await fetch(`${GET_DRIVER_CURRENT_SCHEDULED_TRIP}/${id}`, {
            method: "GET",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return fetchTrip;
   },
   // location api calls
   postDriverLocation: async (body, bearer) => {
      const postLocation = await (
         await fetch(`${GET_DRIVERS_DEVICE_LOCATION}`, {
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
      return postLocation;
   },
   streamDriversLocation: async (body, bearer, id) => {
      const streamLocation = await (
         await fetch(`${STREAM_DRIVERS_LOCATION}/${id}`, {
            method: "PUT",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return streamLocation;
   },
   startCurrentTrip: async (bearer, id) => {
      const startTrip = await (
         await fetch(`${START_TRIP}/${id}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return startTrip;
   },
   endCurrentTrip: async (bearer, id) => {
      const endTrip = await (
         await fetch(`${END_TRIP}/${id}`, {
            method: "POST",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
         })
      ).json();
      return endTrip;
   },
   postChildPickedAttendance: async (body, bearer, id) => {
      const postPickedAttendance = await (
         await fetch(`${CHILD_PICKED_ATTENDANCE}/${id}`, {
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
      return postPickedAttendance;
   },
   postChildDroppedAttendance: async (body, bearer, id) => {
      const postDroppedAttendance = await (
         await fetch(`${CHILD_DROPPED_ATTENDANCE}/${id}`, {
            method: "PUT",
            withCredentials: true,
            credentials: "include",
            headers: {
               Authorization: "Bearer " + bearer,
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         })
      ).json();
      return postDroppedAttendance;
   },
};

export default apiSetting;
