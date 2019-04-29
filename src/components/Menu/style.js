import styled, { css } from 'styled-components';

const StyleMenu = styled.div`
  border-right: solid 1px ${({ theme }) => theme.borderColor};
  width: 128px;
  display: flex;
  flex-direction: column;
`;

const StyleMenuItem = styled.div`
  height: 118px;
  border-bottom: solid 1px ${({ theme }) => theme.borderColor};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  transition: all ease 0.25s;
  & > span {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
  }
  & > img {
    margin-bottom: 15px;
  }
  &:hover {
    opacity: 0.55;
  }
`;

const StyleLogo = styled(StyleMenuItem)`
  background: linear-gradient(to right,#6A4783, #421F5B);
  border-bottom: none;
  & > img {
    margin-bottom: 0;
  }
`;

const StyleLogout = styled(StyleMenuItem)`
  margin-top: auto;
  & > span {
    color: #F05D28;
  }
`;

export { StyleMenu, StyleMenuItem, StyleLogo, StyleLogout };
