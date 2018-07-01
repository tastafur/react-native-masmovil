import apiFetch from './apiFetch'
export const login = (data) =>
  apiFetch({
    baseUrl: data.baseUrl,
    endPoint: encodeURI('/login'),
    method: 'POST',
    body: data.credentials,
  });
