import styled, { css } from 'styled-components';

const HeaderBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 60px;
  margin-top: 65px;
  margin-bottom: 40px
  ${props => props.center && css`
        text-align: center;
      `};
`;

const HeaderTitle = styled.h1`
  font-size: 34px;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin: 0;
  padding: 0;
  line-height: 34px;
`;

const HeaderSubtitle = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.palette.secondary.light};
`;

const HeaderBack = styled.div`
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: ${({ theme }) => theme.palette.background.light};
  margin-right: 15px;
  cursor: pointer;
  transition: all ease 0.15s;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

export { HeaderBar, HeaderTitle, HeaderSubtitle, HeaderBack, HeaderContent };
