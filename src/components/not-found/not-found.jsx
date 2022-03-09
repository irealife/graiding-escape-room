import {
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import * as S from './not-found.styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';

function NotFound() {
  return (
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle data-text="404">404</PageTitle>
        <PageSubtext>Страница не найдена. Перейдите на <Link to={AppRoute.Home}>главную страницу</Link>.</PageSubtext>
      </PageHeading>
    </S.Main>
  );
}

export default NotFound;
