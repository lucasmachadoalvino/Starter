import styled, { css, keyframes } from 'styled-components';
import { HeaderTitle } from '../../components/Header/style';
import { KeyboardContainer } from '../../components/Keyboard/style';
import { Btn } from '../../components/Button/style';

const Section = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 40px 30px 40px;
  align-items: flex-start;
`;

const Aside = styled.div`
  display: flex;
  flex: 1;
  max-width: 385px;
  border-left: solid 1px ${({ theme }) => theme.palette.border.main};
  box-sizing: border-box;
  padding: 0 30px 30px 30px;
  flex-direction: column;
  & ${HeaderTitle} {
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 26px;
    font-weight: 700;
  }
  & ${KeyboardContainer} {
    margin-top: auto;
  }
`;

const footeranimation = keyframes`
  from { transform: translateY(85px); }
  to { transform: translateY(0px); }
`;

const Footer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  max-height: 85px;
  background: ${({ theme }) => theme.palette.background.main};
  animation: ${footeranimation} 0.25s ease forwards;
  color: #FFF;
  box-sizing: border-box;
  padding: 0 30px;
  align-items: center;
  & ${Btn} {
    height: 50px;
    line-height: 50px;
    background: rgba(0,0,0,0.2);
    font-size: 14px;
    font-weight: 600;
    margin-right: 15px;
    margin-left: 0px;
    min-width: 100px;
    padding: 0 20px;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -10px rgba(0,0,0,.15);
      background: rgba(0,0,0,0.3);
    }
    &:active {
      transform: translateY(0px);
      box-shadow: 0 20px 25px -10px rgba(0,0,0,.15);
    }
  }
`;

export { Section, Container, Content, Aside, Footer };
