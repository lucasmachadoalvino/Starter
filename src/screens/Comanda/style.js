import styled, { css } from 'styled-components';

const FooterList = styled.div`
  display: flex;
  width: 100%;
  margin-top: auto;
  align-items: center;
`;

const ListValue = styled.div`
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 34px;
  font-weight: 700;
  margin-right: auto;
  margin-left: 20px;
  line-height: 34px;
  margin-top: -6px;
  & > span {
    font-weight: 500;
    display: block;
    color: ${({ theme }) => theme.palette.secondary.light};
    font-size: 13px;
    line-height: 25px;
  }
`;

const FooterValue = styled.div`
  margin-left: auto;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  align-items: center;
  & > span {
    font-size: 12px;
    max-width: 150px;
    text-align: right;
    font-weight: 500;
    opacity: 0.5;
    display: block;
  }
  & > hr {
    width: 38px;
    margin: 0 30px;
    border: solid 1px #FFF;
    opacity: 0.5;
  }
`;

export {
    FooterList,
    ListValue,
    FooterValue,
}
