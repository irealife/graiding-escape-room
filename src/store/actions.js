import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../const';

const setQuest = createAction(
  ActionType.SetQuest,
  (quest) => ({
    payload: {
      quest,
    },
  }),
);

const setQuestRequestStatus = createAction(
  ActionType.SetQuestRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

const setQuests = createAction(
  ActionType.SetQuests,
  (quests) => ({
    payload: {
      quests,
    },
  }),
);

const setQuestsRequestStatus = createAction(
  ActionType.SetQuestsRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

const setQuestsGenre = createAction(
  ActionType.SetQuestsGenre,
  (type) => ({
    payload: {
      type,
    },
  }),
);

const setReviewRequestStatus = createAction(
  ActionType.SetReviewRequestStatus,
  (status) => ({
    payload: {
      status,
    },
  }),
);

export {
  setQuest,
  setQuestRequestStatus,
  setQuests,
  setQuestsRequestStatus,
  setQuestsGenre,
  setReviewRequestStatus,
};
