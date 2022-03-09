const BACKEND_URL = 'http://localhost:3001';

const APIRoute = {
  GetQuests: () => `${BACKEND_URL}/quests`,
  GetQuest: (id) => `${BACKEND_URL}/quests/${id}`,
  PostOrders: () => `${BACKEND_URL}/orders`,
};

const HttpCode = {
  NotFound: '404',
};

const AppRoute = {
  Home: '/',
  DetailedQuest: '/detailed-quest/:id',
  Quest: '/detailed-quest/',
  Beginners: '/beginners',
  Reviews: '/reviews',
  Sale: '/sale',
  Contacts: '/contacts',
};

const RequestStatus = {
  Unknown: 'UNKNOWN',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  NotFound: 'NOT_FOUND',
  Fail: 'FAIL',
};

const ActionType = {
  SetQuest: 'setQuest',
  SetQuestRequestStatus: 'setQuestRequestStatus',
  SetQuests: 'setQuests',
  SetQuestsRequestStatus: 'setQuestsRequestStatus',
  SetReviewRequestStatus: 'setReviewRequestStatus',
  SetQuestsGenre: 'setQuestsGenre',
};

const ErrorMessage = {
  FailToLoadQuest: 'Не удалось загрузить квест',
  FailToLoadQuests: 'Не удалось загрузить квесты',
  FailToSendOrder: 'Не удалось отправить заявку',
};

const SuccessMessage = {
  SuccessToSendOrder: 'Ваша заявка отправлена',
};

const GenresTypes = {
  All: {
    Title: 'Все квесты',
    Type: 'all-quests',
    IconSize: {
      Width: '26',
      Height: '30',
    },
  },
  Adventures: {
    Title: 'Приключения',
    Type: 'adventures',
    IconSize: {
      Width: '36',
      Height: '30',
    },
  },
  Horror: {
    Title: 'Ужасы',
    Type: 'horror',
    IconSize: {
      Width: '30',
      Height: '30',
    },
  },
  Mystic: {
    Title: 'Мистика',
    Type: 'mystic',
    IconSize: {
      Width: '30',
      Height: '30',
    },
  },
  Detective: {
    Title: 'Детектив',
    Type: 'detective',
    IconSize: {
      Width: '40',
      Height: '30',
    },
  },
  SciFi: {
    Title: 'Sci-fi',
    Type: 'sci-fi',
    IconSize: {
      Width: '28',
      Height: '30',
    },
  },
};

const LevelType = {
  Hard: 'сложный',
  Medium: 'средний',
  Easy: 'легкий',
};

export {
  APIRoute,
  HttpCode,
  AppRoute,
  RequestStatus,
  ActionType,
  ErrorMessage,
  SuccessMessage,
  GenresTypes,
  LevelType,
};
