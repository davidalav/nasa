const BASE_URL = 'https://api.nasa.gov';
const API_KEY = 'Iz74hpIHknk7VBpkIC6XL4smxwZO2Q3frHmhyJOb';

export class ClientError {
  constructor(status, statusText, data) {
    this.data = data;
    this.status = status;
    this.statusText = statusText;
  }
}

const client = () => {
  const get = async (path, params) => {
    let url = `${BASE_URL}${path}?api_key=${API_KEY}`;

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url += `&${key}=${value}`
        });
    }

    console.log(`[GET]: ${url}`);

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
      throw new ClientError(response.status, data.http_error, data.error_message);
    }

    return { data };
  };

  return { get };
};

export const apiClient = client();