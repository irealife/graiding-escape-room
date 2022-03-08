import {
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import * as S from './loading.styled';
import React from 'react';

function Loading() {
  return (
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle data-text="loading">Loading...</PageTitle>
        <PageSubtext>Загрузка...</PageSubtext>
      </PageHeading>
    </S.Main>
  );
}

export default Loading;
