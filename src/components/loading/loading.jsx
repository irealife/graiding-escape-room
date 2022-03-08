import {
  PageTitle,
  PageHeading,
  PageSubtext,
} from 'components/common/common';
import * as S from './loading.styled';

const Loading = () => (
  <S.Main forwardedAs="main">
    <PageHeading>
      <PageTitle data-text="loading">Loading...</PageTitle>
      <PageSubtext>Загрузка...</PageSubtext>
    </PageHeading>
  </S.Main>
);

export default Loading;
