// configuration for school bus api

const API_URL = "http://127.0.0.1:5000/api/v1/";

const GET_ADMIN_DETAILS = `${API_URL}admin/admin_details`;

const GET_ADMIN_ACTIVE_TRIPS = `${API_URL}admin/get_active_trips`;

const GET_ADMIN_SCHEDULED_TRIPS = `${API_URL}admin/get_scheduled_trip`;

const GET_TRIP = `${API_URL}admin/get_trip/`;

const REGISTER_BUS = `${API_URL}admin/register_bus`;

const REGISTER_CHILD = `${API_URL}admin/register_child`;

const REGISTER_DRIVER = `${API_URL}admin/register_driver`;

const REGISTER_PARENT = `${API_URL}admin/register_parent`;

const REGISTER_ROUTES = `${API_URL}admin/register_routes`;

const REGISTER_TRIP = `${API_URL}admin/register_trip`;

const REGISTER_SCHOOL = `${API_URL}admin_auth/register_school`;

const LOGIN_ADMIN = `${API_URL}admin_auth/login_admin`;

const LOGIN_PARENT = `${API_URL}parent/login_parent`;

const LOGIN_DRIVER = `${API_URL}driver/login_driver`;

const CHILD_DROP_ATTENDANCE = `${API_URL}driver/child_drop_attendance`;

const CHILD_PICKED_ATTENDANCE = `${API_URL}driver/child_picked_attendance`;

const DRIVER_DETAIL = `${API_URL}driver/driver_detail`;

const END_TRIP = `${API_URL}driver/end_trip`;

const GET_DRIVERS_BUS = `${API_URL}driver/get_drivers_bus`;

const GET_DRIVERS_DEVICE_LOCATION = `${API_URL}driver/get_location`;

const STREAM_DRIVERS_LOCATION = `${API_URL}driver/post_trip_location`;

const GET_DRIVER_ACTIVE_TRIPS = `${API_URL}driver/get_active_trips`;

const START_TRIP = `${API_URL}driver/start_trip`;

const GET_CHILD_TRIP = `${API_URL}parent/get_child_trip/`;

const GET_PARENT_LOG = `${API_URL}admin/parents_log`;

const GET_DRIVER_LOG = `${API_URL}admin/drivers_log`;

const GET_CHILDREN_LOG = `${API_URL}admin/children_log`;

const GET_BUS_LOG = `${API_URL}admin/bus_log`;

const GET_CHILDREN_TRIPS = `${API_URL}parent/get_children_trip`;

const GET_DRIVERS_CURRENT_TRIP_ATTENDANCE_LOG = `${API_URL}driver/get_trip_attendance`;

const GET_DRIVER_CURRENT_SCHEDULED_TRIP = `${API_URL}driver/get_scheduled_trip`;

const GET_ALL_DRIVER_SCHEDULED_TRIPS = `${API_URL}driver/get_scheduled_trips`;

export {
   API_URL,
   GET_ADMIN_DETAILS,
   GET_ADMIN_ACTIVE_TRIPS,
   GET_TRIP,
   REGISTER_BUS,
   REGISTER_CHILD,
   REGISTER_DRIVER,
   REGISTER_PARENT,
   REGISTER_ROUTES,
   REGISTER_TRIP,
   REGISTER_SCHOOL,
   LOGIN_ADMIN,
   LOGIN_DRIVER,
   LOGIN_PARENT,
   CHILD_DROP_ATTENDANCE,
   CHILD_PICKED_ATTENDANCE,
   DRIVER_DETAIL,
   END_TRIP,
   GET_DRIVERS_BUS,
   GET_DRIVERS_DEVICE_LOCATION,
   START_TRIP,
   GET_CHILD_TRIP,
   GET_PARENT_LOG,
   GET_DRIVER_LOG,
   GET_CHILDREN_LOG,
   GET_BUS_LOG,
   GET_CHILDREN_TRIPS,
   GET_DRIVER_ACTIVE_TRIPS,
   GET_DRIVERS_CURRENT_TRIP_ATTENDANCE_LOG,
   GET_DRIVER_CURRENT_SCHEDULED_TRIP,
   GET_ALL_DRIVER_SCHEDULED_TRIPS,
   GET_ADMIN_SCHEDULED_TRIPS,
   STREAM_DRIVERS_LOCATION,
};
