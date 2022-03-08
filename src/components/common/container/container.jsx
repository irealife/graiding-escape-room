import * as S from './container.styled';
import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
