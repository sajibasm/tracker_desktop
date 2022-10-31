import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

type ButtonPropsType = {
  icon: string;
  label: string;
  link: string;
  newTab: boolean;
};

const AppButton = ({
  icon = '🙏',
  label = 'Click',
  link = '#',
  newTab,
}: ButtonPropsType) => {
  return (
    <Link to={link} rel="noreferrer" target={newTab ? '_blank' : '_self'}>
      <Button>{label}</Button>
    </Link>
  );
};

export default AppButton;
