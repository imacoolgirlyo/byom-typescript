import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import min from '../../static/images/min.png';
import max from '../../static/images/max.png';
import byom from '../../static/images/byom.png';
interface Props {}

const getTitle = ({ pathname }: any) => {
  const title = pathname.substring(1);
  const titleRef: any = {
    '': 'BYOM',
    about: 'About',
    archive: 'Archive',
  };
  return `${titleRef[title]}.exe`;
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 29px;
  background: linear-gradient(to right, #000080, #1084d0);
  border-left: 1px solid white;
  border-top: 1px solid white;
  border-right: 1px solid black;
  box-shadow: 3px 2px 0px -2px rgba(0, 0, 1, 0.75);
  color: white;

  .column {
    display: flex;
    align-items: center;
  }

  .logo {
    margin-left: 5px;
    margin-right: 5px;
    width: 20px;
  }
  span {
    font-size: 16px;
    font-weight: bold;
  }

  .icon {
    background-color: #bdbebd;
    width: 18px;
    height: 18px;
    border-top: 1px solid white;
    border-left: 1px solid white;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    margin-right: 5px;
    img {
      width: 16px;
    }
  }
`;

const Header: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <HeaderBlock>
      <div className="column">
        <img className="logo" src={byom} alt="byom-icon" />
        <span>{getTitle(location)}</span>
      </div>

      <div className="column">
        <div className="icon">
          <img src={min} alt="min" />
        </div>
        <div className="icon">
          <img src={max} alt="max" />
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
