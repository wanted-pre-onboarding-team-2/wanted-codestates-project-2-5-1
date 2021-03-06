import React from 'react';
import { useNavigate } from 'react-router';

import * as S from './style';
import logo from '../../assets/img/logo_pxl_b.png';
import SearchBar from '../SearchBar';

type loading = {
  loading: boolean;
};

const Header = ({ loading }: loading) => {
  const navigation = useNavigate();
  return (
    <S.HeaderWrapper>
      <S.ImageBox>
        <S.HeaderImage
          src={logo}
          onClick={() => {
            navigation('/');
          }}
        />
      </S.ImageBox>
      <SearchBar loading={loading} />
    </S.HeaderWrapper>
  );
};

export default Header;
