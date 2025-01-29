import sendRequest from "./sendRequest";

const BASE_URL = '/api/destinations';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function create(destination) {
  return sendRequest(BASE_URL, 'POST', destination);
}

export async function details(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }