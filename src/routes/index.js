const basUrl = __DEV__ ? 'http://localhost:3000' : 'https://www.hutoki.com';

export const routes = {
  authentification: {
    create: () => `${basUrl}/api/sessions`,
  },
  currentFamily: {
    update: () => `${basUrl}/api/current_families`,
  },
  currentVenue: {
    update: () => `${basUrl}/api/current_venues`,
  },
  families: {
    index: () => `${basUrl}/api/families`,
  },
  venues: {
    index: () => `${basUrl}/api/venues`,
  },
  yearBookings: {
    index: (year) => `${basUrl}/api/bookings/range?year=${year}`,
  },
};
