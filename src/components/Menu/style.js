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
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 2px;
    height: 0px;
    transition: all ease 0.25s;
    background: ${({ theme }) => theme.primaryColor};
  }
  & > span {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    display: block;
    text-align: center;
    text-decoration: none;
    transition: all ease 0.25s;
  }
  & > img {
    transition: all ease 0.25s;
    margin-bottom: 15px;
  }
  &:hover {
    opacity: 1;
  }
  &:hover > img {
    transform: translateY(-5px);
  }
  &:hover > span {
    transform: translateY(5px);
  }
  &:hover:before {
    height: 100%;
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
    color: ${({ theme }) => theme.secondaryColor};
  }
  &:before {
    background: ${({ theme }) => theme.secondaryColor};;
  }
`;

export { StyleMenu, StyleMenuItem, StyleLogo, StyleLogout };
