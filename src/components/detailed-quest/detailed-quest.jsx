import React, { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getQuestAction} from '../../store/api-actions';
import {setQuestRequestStatus} from '../../store/actions';
import {getQuest, getQuestRequestStatus} from '../../utils';
import { MainLayout } from 'components/common/common';
import { BookingModal } from './components/components';
import Loading from '../loading/loading';
import NotFound from '../not-found/not-found';
import {AppRoute, LevelType, RequestStatus, GenresTypes} from '../../const';
import {camelCase, transformText} from '../../utils';
import { ReactComponent as IconClock } from 'assets/img/icon-clock.svg';
import { ReactComponent as IconPerson } from 'assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from 'assets/img/icon-puzzle.svg';
import * as S from './detailed-quest.styled';


function DetailedQuest() {
  const {id} = useParams();
  const quest = useSelector(getQuest);
  const questRequestStatus = useSelector(getQuestRequestStatus);
  const dispatch = useDispatch();
  const [isBookingModalOpened, setIsBookingModalOpened] = useState(false);

  const onBookingBtnClick = () => {
    setIsBookingModalOpened(true);
  };

  useEffect(() => {
    dispatch(getQuestAction(id));

    return () => {
      dispatch(setQuestRequestStatus(RequestStatus.Unknown));
    };
  }, [dispatch, id]);

  if (questRequestStatus === RequestStatus.Fail) {
    return <Redirect to={AppRoute.Home} />;
  }

  if (questRequestStatus === RequestStatus.NotFound) {
    return <NotFound />;
  }

  if (quest === null
    || questRequestStatus === RequestStatus.Unknown
    || questRequestStatus === RequestStatus.Loading) {
    return <Loading />;
  }

  const {coverImg, title, type, duration, peopleCount, level, description} = quest;

  return (
    <MainLayout>
      <S.Main>
        <S.PageImage
          src={`/${coverImg}`}
          alt={`Квест ${title}`}
          width="1366"
          height="768"
        />
        <S.PageContentWrapper>
          <S.PageHeading>
            <S.PageTitle>{title}</S.PageTitle>
            <S.PageSubtitle>{GenresTypes[camelCase(type)].Title.toLowerCase()}</S.PageSubtitle>
          </S.PageHeading>

          <S.PageDescription>
            <S.Features>
              <S.FeaturesItem>
                <IconClock width="20" height="20" />
                <S.FeatureTitle>{`${duration} мин`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPerson width="19" height="24" />
                <S.FeatureTitle>{`${transformText(peopleCount)} чел`}</S.FeatureTitle>
              </S.FeaturesItem>
              <S.FeaturesItem>
                <IconPuzzle width="24" height="24" />
                <S.FeatureTitle>{LevelType[camelCase(level)]}</S.FeatureTitle>
              </S.FeaturesItem>
            </S.Features>

            <S.QuestDescription>{description}</S.QuestDescription>

            <S.QuestBookingBtn onClick={onBookingBtnClick}>
              Забронировать
            </S.QuestBookingBtn>
          </S.PageDescription>
        </S.PageContentWrapper>

        {isBookingModalOpened && <BookingModal onCloseBtnClick={setIsBookingModalOpened} />}
      </S.Main>
    </MainLayout>
  );
}

export default DetailedQuest;
