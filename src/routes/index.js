const bas_url = __DEV__
  ? 'http://localhost:3000'
  : 'https://www.hutoki.com' + '/api';

export const routes = {
  authentification: {
    create: () => `${bas_url}/api/sessions`,
  },
};
