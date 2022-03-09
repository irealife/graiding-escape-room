import * as S from './quests-catalog.styled';
import React from 'react';
import {useSelector} from 'react-redux';
import {getQuestsByGenre} from '../../../../utils';
import TabsItem from '../tabs/tabs';
import QuestItem from '../quest-item/quest-item';
import {GenresTypes} from '../../../../const';

function QuestsCatalog() {
  const quests = useSelector(getQuestsByGenre);

  return (
    <>
      <S.Tabs>
        {Object.values(GenresTypes).map((TabType) => (
          <TabsItem
            key={TabType.Type}
            tabType={TabType}
          />
        ))}
      </S.Tabs>

      <S.QuestsList>
        {quests.map((quest) => (
          <QuestItem
            key={quest.id}
            quest={quest}
          />
        ))}
      </S.QuestsList>
    </>
  );
}

export default QuestsCatalog;
