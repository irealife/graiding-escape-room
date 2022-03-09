import React from 'react';
import PropTypes from 'prop-types';
import * as S from './button.styled';

function Button({ children, ...props }) {
  return <S.Button {...props}>{children}</S.Button>;
}

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
