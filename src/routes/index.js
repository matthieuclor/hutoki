const bas_url = __DEV__
  ? 'http://localhost:3000' + '/api'
  : 'https://www.hutoki.com' + '/api';

export const routes = {
  authentification: {
    create: () => `${bas_url}/sessions`,
  },
  families: {
    index: () => `${bas_url}/families`,
  },
};
