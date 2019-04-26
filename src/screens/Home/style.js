import styled, { css } from 'styled-components';

const Title = styled.h1`
  font-size: 38px;
  text-align: center;
  ${'' /* color: ${({ theme }) => theme.color}; */}
  color: #000;
  margin: 5px 0;
  padding: 0;
  
  ${props => props.secondary && css`
    font-size: 18px;
    color: #ACACAC;
    font-weight: 500;
  `}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  & > img {
    max-height: 50vh;
  }
`

const Btn = styled.button`
  height: 65px;
  line-height: 65px;
  width: 255px;
  color: #FFF;
  background: linear-gradient(to right,#FF4263,#FE8703);
  background-size: 120% 100%;
  text-align: center;
  border: none;
  border-radius: 8px;
  font-size: 19px;
  margin-top: 80px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  transition: all ease .15s;
  box-shadow: 0 15px 18px -10px rgba(213,91,44,.55);
  font-family: 'Poppins', sans-serif;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -10px rgba(213,91,44,.55);
    background-position: 100% 0;
  }
`

export {
    Title,
    Btn,
    Container,
}