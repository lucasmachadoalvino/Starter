import styled, { css } from 'styled-components';

const Btn = styled.div`
  min-width: 250px;
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  color: #FFF;
  padding: 0 50px;
  border-radius: 8px;
  background: linear-gradient(to right,#FF5A20,#FFA009);
  background-size: 120% 100%;
  font-weight: 500;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: all ease 0.15s;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -10px rgba(213,91,44,.55);
    background-position: 100% 0;
  }
  &:active {
    transform: translateY(0px);
    box-shadow: 0 5px 10px -10px rgba(213,91,44,.55);
    background-size: 120% 100%;
  }
  & > img {
    margin-right: 20px;
  }
`;

export { Btn };
