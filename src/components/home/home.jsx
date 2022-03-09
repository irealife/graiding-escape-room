import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import {QuestsCatalog} from './components/components';
import * as S from './home.styled';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestsAction} from '../../store/api-actions';
import Loading from '../loading/loading';
import {getQuestsRequestStatus} from '../../utils';
import {RequestStatus} from '../../const';

function HomePage() {
  const questsRequestStatus = useSelector(getQuestsRequestStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (questsRequestStatus === RequestStatus.Unknown) {
      dispatch(getQuestsAction());
    }
  }, [dispatch, questsRequestStatus]);

  if (questsRequestStatus === RequestStatus.Unknown
    || questsRequestStatus === RequestStatus.Loading) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <S.Main forwardedAs="main">
        <PageHeading>
          <PageTitle>Выберите тематику</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </PageHeading>
        <QuestsCatalog />
      </S.Main>
    </MainLayout>
  );
}

export default HomePage;
