const bas_url = __DEV__ ? 'http://localhost:3000' : 'https://www.hutoki.com';

export const routes = {
  authentification: {
    create: () => `${bas_url}/api/sessions`,
  },
  families: {
    index: () => `${bas_url}/api/families`,
  },
};
