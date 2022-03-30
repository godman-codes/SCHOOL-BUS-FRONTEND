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
} from "./config";

const apiSetting = {
   LoginAdmin: async (body) =>
      fetch(`${LOGIN_ADMIN}`, {
         method: "Post",
         body: body,
         header: { "Content-Type": "application/x-www-form-urlencoded" },
      })
         .then(function (res) {
            return res.json;
         })
         .then(function (body) {
            console.log(body);
            return body;
         }),
};

export default apiSetting;
