import styled, { css } from 'styled-components';
import IconInput from '../../assets/img/input-ic-search.png';
import PageDown from '../../assets/img/pagination-ic-down.png';
import PageUp from '../../assets/img/pagination-ic-up.png';

const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ListQtde = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.palette.background.light};
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 16px;
  font-weight: 700;
  margin-right: 12px;
  transition: all ease 0.35s;
  position: relative;
  & > span {
    font-size: 11px;
    color: ${({ theme }) => theme.palette.secondary.light};
    position: absolute;
    width: 80px;
    height: 35px;
    background: ${({ theme }) => theme.palette.background.graylight};
    line-height: 35px;
    right: 0;
    border-radius: 20px;
    transition: all ease 0.35s;
    opacity: 0;
    visibility: hidden;
    font-weight: 600;
  }
  &:hover > span {
    transform: translateX(-40px);
    opacity: 1;
    visibility: visible;
  }
`;

const ListComanda = styled.div`
  color: ${({ theme }) => theme.palette.primary.dark};
  font-size: 18px;
  font-weight: 700;
  flex: 1;
`;

const LisSecondary = styled.div`
  color: ${({ theme }) => theme.palette.secondary.light};
  font-size: 16px;
  font-weight: 400;
  max-width: 240px;
  flex: 1;
`;

const ListValue = styled(ListComanda)`
  text-align: right;
  max-width: 240px;
  margin-right: 10px;
`;

const ListDelet = styled(ListQtde)`
  background: ${({ theme }) => theme.palette.background.graylight};
  margin-left: 12px;
  cursor: pointer;
`;

const Search = styled.input`
  width: 100%;
  height: 62px;
  margin-bottom: 20px;
  background: url(${IconInput}) right 25px center no-repeat;
`;

const Pagination = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

const PaginationContent = styled.div`
  margin-right: auto;
`;

const PaginationButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  border: solid 1px ${({ theme }) => theme.palette.border.main};
  margin-left: 10px;
  cursor: pointer;
  transition: all ease 0.15s;
  background: url(${PageUp}) center no-repeat;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -10px rgba(0,0,0,0.05);
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px -10px rgba(0,0,0,0.05);
  }
  ${props => props.down && css`
      background: url(${PageDown}) center no-repeat;
    `};
`;

const ListItem = styled.div`
  border-bottom: solid 1px ${({ theme }) => theme.palette.border.main};
  width: 100%;
  min-height: 75px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  transition: all ease 0.15s;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -10px rgba(0,0,0,0.10);
    border-bottom: solid 1px ${({ theme }) => theme.palette.primary.main};
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px -10px rgba(0,0,0,0.05);
  }
`;

const ListContent = styled(ListContainer)`
  overflow: auto;
  max-height: 100%;
  scroll-behavior: smooth;
  ${props => props.grid && css`
      flex-direction: row;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      & ${ListItem} {
        border: solid 1px ${({ theme }) => theme.palette.border.main};
        border-radius: 8px;
        padding: 0 10px 0 15px;
        max-width: calc(33.3333% - 10px);
        margin: 5px;
        &:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -10px rgba(0,0,0,0.05);
        }
        &:active {
          transform: translateY(0px);
          box-shadow: 0 5px 10px -10px rgba(0,0,0,0.05);
        }
      }
      & ${LisSecondary} {
        display: none;
      }
      & ${ListComanda} {
        color: ${({ theme }) => theme.palette.primary.main};
      }
      & ${ListValue} {
        color: ${({ theme }) => theme.palette.primary.dark};
        font-size: 15px;
        margin-right: 0px;
      }
    `};
`;

export {
  ListContainer,
  ListContent,
  ListItem,
  ListQtde,
  ListComanda,
  LisSecondary,
  ListValue,
  ListDelet,
  Search,
  Pagination,
  PaginationButton,
  PaginationContent,
};
