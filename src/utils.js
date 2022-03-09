import {createSelector} from 'reselect';
import {GenresTypes} from 'const';

const getQuest = (state) => state.quest.data;
const getQuestRequestStatus = (state) => state.quest.status;
const getQuests = (state) => state.quests.data;
const getQuestsRequestStatus = (state) => state.quests.status;
const getQuestsGenre = (state) => state.quests.type;
const getReviewRequestStatus = (state) => state.order.status;

const getQuestsByGenre = createSelector(
  [getQuests, getQuestsGenre],
  (quests, currentQuestsType) => {
    if (currentQuestsType === GenresTypes.All.Type) {
      return quests;
    }

    return quests.filter(({ type }) => currentQuestsType === type);
  },
);

const camelCase = (text) => text
  .split('-')
  .map((subText) => `${subText[0].toUpperCase()}${subText.slice(1)}`)
  .join('');

const transformText = (list) => list
  .slice()
  .sort()
  .join('-');

export {
  getQuest,
  getQuestRequestStatus,
  getQuests,
  getQuestsRequestStatus,
  getQuestsGenre,
  getQuestsByGenre,
  getReviewRequestStatus,
  camelCase,
  transformText,
};
