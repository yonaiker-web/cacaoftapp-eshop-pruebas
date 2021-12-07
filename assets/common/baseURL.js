//archivo que conecta la app con la base de datos en la ruta espesificada
import { Platform } from "react-native";

let baseURL = 'url';

/* {Platform.OS == 'android'
? baseURL = 'http://192.168.8.101:3010/api/v1/'
: baseURL = 'http://localhost:3010/api/v1/'
} */

export default baseURL
