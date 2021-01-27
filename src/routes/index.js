const basUrl = __DEV__ ? 'http://localhost:3000' : 'https://www.hutoki.com';

export const routes = {
  authentification: {
    create: () => `${basUrl}/api/sessions`,
  },
  currentFamily: {
    update: () => `${basUrl}/api/current_families`,
  },
  families: {
    index: () => `${basUrl}/api/families`,
  },
  venues: {
    index: () => `${basUrl}/api/venues`,
  },
};
