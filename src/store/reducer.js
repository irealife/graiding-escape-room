import {createReducer} from '@reduxjs/toolkit';
import {RequestStatus, GenresTypes} from '../const';
import {
  setQuest,
  setQuestRequestStatus,
  setQuests,
  setQuestsRequestStatus,
  setReviewRequestStatus,
  setQuestsGenre,
} from './actions';

const initialState = {
  quest: {
    data: null,
    status: RequestStatus.Unknown,
    type: GenresTypes.All.Type,
  },
  quests: {
    data: [],
    status: RequestStatus.Unknown,
  },
  order: {
    status: RequestStatus.Unknown,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setQuest, (state, action) => {
      state.quest.data = action.payload.quest;
    })
    .addCase(setQuestRequestStatus, (state, action) => {
      state.quest.status = action.payload.status;
    })
    .addCase(setQuests, (state, action) => {
      state.quests.data = action.payload.quests;
    })
    .addCase(setQuestsRequestStatus, (state, action) => {
      state.quests.status = action.payload.status;
    })
    .addCase(setQuestsGenre, (state, action) => {
      state.quests.type = action.payload.type;
    })
    .addCase(setReviewRequestStatus, (state, action) => {
      state.order.status = action.payload.status;
    });
});

export default reducer;
