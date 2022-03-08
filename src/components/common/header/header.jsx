import React from 'react';
import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {AppRoute} from '../../../const';
import {useLocation} from 'react-router';

const Header = () => {
  const location = useLocation();
  const handleLogoClick = (evt) => {
    if (location.pathname === AppRoute.Home) {
      evt.preventDefault();
    }
  };

  return (
    <S.StyledHeader>
      <S.HeaderWrapper>
        <S.LogoLink
          onClick={handleLogoClick}
          to={AppRoute.Home}
        >
          <S.Image
            src={logo}
            alt="Логотип Escape Room"
            width="134"
            height="50"
          />
        </S.LogoLink>
        <S.Navigation>
          <S.Links>
            <S.LinkItem>
              <S.Link exact to={AppRoute.Home}>Квесты</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link to={AppRoute.Beginners}>Новичкам</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link to={AppRoute.Reviews}>Отзывы</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link to={AppRoute.Sale}>Акции</S.Link>
            </S.LinkItem>
            <S.LinkItem>
              <S.Link to={AppRoute.Contacts}>Контакты</S.Link>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
