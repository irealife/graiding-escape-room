import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getQuestsGenre} from '../../../../utils';
import {setQuestsGenre} from '../../../../store/actions';
import TabsIcon from '../tabs-icons/tabs-icons';
import * as S from './tabs.styled';

function Tabs({tabType}) {
  const {Title, Type, IconSize: {Width, Height}} = tabType;
  const questsType = useSelector(getQuestsGenre);
  const dispatch = useDispatch();

  const handleTabBtnClick = () => {
    if (Type !== questsType) {
      dispatch(setQuestsGenre(Type));
    }
  };

  return (
    <S.TabItem>
      <S.TabBtn
        onClick={handleTabBtnClick}
        isActive={Type === questsType}
      >
        <TabsIcon
          name={Type}
          width={Width}
          height={Height}
        />
        <S.TabTitle>{Title}</S.TabTitle>
      </S.TabBtn>
    </S.TabItem>
  );
}

Tabs.propTypes = {
  tabType: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    IconSize: PropTypes.shape({
      Width: PropTypes.string.isRequired,
      Height: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Tabs;
