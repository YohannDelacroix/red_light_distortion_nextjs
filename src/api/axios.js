/**
 * @file axiosConfig.js
 * @description Configuration of Axios instances for API requests.
 * 
 * This file exports two Axios instances:
 * - The default Axios instance for general requests.
 * - A private Axios instance for authenticated requests, including custom headers and credentials.
 * 
 * @author [Your Name]
 * @date [Date]
 */

import axios from 'axios';

// Base URL for API requests , will be edited when the server will be hosted
const BASE_URL = 'http://localhost:5050';

// Default Axios instance for general API requests
// This instance is used for requests that do not require authentication or special headers.
export default axios.create({
    baseURL: BASE_URL
});

// Private Axios instance for authenticated requests
// This instance includes credentials and custom headers for requests requiring authentication.
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});