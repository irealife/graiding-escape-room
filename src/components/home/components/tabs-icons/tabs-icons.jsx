import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'assets/img/icons-tabs-sprite.svg';

function TabsIcon({ name, width, height }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  );
}

TabsIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default TabsIcon;
