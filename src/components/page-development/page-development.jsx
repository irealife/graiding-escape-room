import {
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import * as S from './page-development.styled';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';

function PageDevelopment() {
  return (
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle data-text="page-development">Страница в разработке</PageTitle>
        <PageSubtext>Страница в разработке. Перейдите на <Link to={AppRoute.Home}>главную страницу</Link>.</PageSubtext>
      </PageHeading>
    </S.Main>
  );
}

export default PageDevelopment;
