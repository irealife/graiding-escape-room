import React from 'react';
import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';
import {AppRoute} from '../../../const';
import {useLocation} from 'react-router-dom';

function Header () {
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
              <S.NavLink exact to={AppRoute.Home}>Квесты</S.NavLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.NavLink to={AppRoute.Beginners}>Новичкам</S.NavLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.NavLink to={AppRoute.Reviews}>Отзывы</S.NavLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.NavLink to={AppRoute.Sale}>Акции</S.NavLink>
            </S.LinkItem>
            <S.LinkItem>
              <S.NavLink to={AppRoute.Contacts}>Контакты</S.NavLink>
            </S.LinkItem>
          </S.Links>
        </S.Navigation>
        <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
      </S.HeaderWrapper>
    </S.StyledHeader>
  );
}

export default Header;
