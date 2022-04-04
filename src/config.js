// configuration for school bus api

const API_URL = "http://127.0.0.1:5000/api/v1/";

const GET_ADMIN_DETAILS = `${API_URL}admin/admin_details`;

const GET_ACTIVE_TRIPS = `${API_URL}admin/get_active_trips`;

const GET_NOTIFICATIONS = `${API_URL}admin/get_notifications`;

const GET_TRIP = `${API_URL}admin/get_trip/`;

const REGISTER_BUS = `${API_URL}admin/register_bus`;

const REGISTER_CHILD = `${API_URL}admin/register_child`;

const REGISTER_DRIVER = `${API_URL}admin/register_driver`;

const REGISTER_PARENT = `${API_URL}admin/register_parent`;

const REGISTER_ROUTES = `${API_URL}admin/register_routes`;

const REGISTER_TRIP = `${API_URL}admin/register_trip`;

const REGISTER_SCHOOL = `${API_URL}admin_auth/register_school`;

const SEARCH_BUS = `${API_URL}admin/search_bus`;

const SEARCH_CHILDREN = `${API_URL}admin/search_children`;

const SEARCH_DRIVER = `${API_URL}admin/search_driver`;

const SEARCH_PARENT = `${API_URL}admin/search_parent`;

const CHANGE_PASSWORD_ADMIN = `${API_URL}admin_auth/change_password`;

const CHANGE_PASSWORD_DRIVER = `${API_URL}driver/change_password`;

const CHANGE_PASSWORD_PARENT = `${API_URL}parent/change_password`;

const LOGIN_ADMIN = `${API_URL}admin_auth/login_admin`;

const LOGIN_PARENT = `${API_URL}parent/login_parent`;

const LOGIN_DRIVER = `${API_URL}driver/login_driver`;

const CHILD_DROP_ATTENDANCE = `${API_URL}driver/child_drop_attendance`;

const CHILD_PICKED_ATTENDANCE = `${API_URL}driver/child_picked_attendance`;

const DRIVER_DETAIL = `${API_URL}driver/driver_detail`;

const END_TRIP = `${API_URL}driver/end_trip`;

const GET_DRIVERS_BUS = `${API_URL}driver/get_drivers_bus`;

const GET_DRIVERS_DEVICE_LOCATION = `${API_URL}driver/get_location`;

const GET_TRIPS = `${API_URL}driver/get_trips`;

const START_TRIP = `${API_URL}driver/start_trip`;

const GET_CHILD_TRIP = `${API_URL}parent/get_child_trip/`;

const GET_PARENT_NOTIFICATION = `${API_URL}parent/get_notifications`;

const GET_PARENT_DETAILS = `${API_URL}parent/parent_detail`;

const GET_ADMIN_REFRESH_TOKEN = `${API_URL}admin/token/refresh`;

const GET_PARENT_REFRESH_TOKEN = `${API_URL}parent/token/refresh`;

const GET_DRIVER_REFRESH_TOKEN = `${API_URL}driver/token/refresh`;

const GET_PARENT_LOG = `${API_URL}admin/parents_log`;

export {
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
};
