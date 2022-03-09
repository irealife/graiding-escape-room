import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './quest-item.styled';
import {camelCase, transformText} from '../../../../utils';
import {AppRoute, LevelType} from '../../../../const';

function QuestItem({quest}) {
  const {id, previewImg, title, peopleCount, level} = quest;
  return (
    <S.QuestItem>
      <S.QuestItemLink to={`${AppRoute.Quest}${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
            alt={`Квест ${title}`}
          />

          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>

            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${transformText(peopleCount)} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
                <IconPuzzle />
                {LevelType[camelCase(level)]}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

QuestItem.propTypes = {
  quest: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    peopleCount: PropTypes.array.isRequired,
    level: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuestItem;
