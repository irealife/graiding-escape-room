import * as S from './page-title.styled';
import React from 'react';
import PropTypes from 'prop-types';

function PageTitle({children, ...props}) {
  return <S.PageTitle {...props}>{children}</S.PageTitle>;
}

PageTitle.propTypes = {
  children: PropTypes.node,
};

export default PageTitle;
