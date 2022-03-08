const BACKEND_URL = 'http://localhost:3001';

console.log(BACKEND_URL);

const Backend = {
  GetQuests: () => `${BACKEND_URL}/quests`,
  GetQuest: (id) => `${BACKEND_URL}/quests/$id`,
  PostOrders: () => `${BACKEND_URL}/orders`,
};

const HttpCode = {
  NotFound: '404',
};

const AppRoute = {
  Home: '/',
  Quests: '/quests',
  QuestId: '/quests/:id',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Sale: '/sale',
  Contacts: '/contacts',
};

const RequestStatus = {

};

export {
  AppRoute,
};
