import styled, { css } from 'styled-components';
import IconInput from '../../assets/img/keyboard-input-cart.png';

const KeyboardContainer = styled.div`
  width: 328px;
  display: flex;
  flex-direction: column;
`;

const KeyboardInput = styled.input`
  margin: 5px 5px 10px 5px;
  background: url(${IconInput}) right 25px center no-repeat;
`;

const KeyboardContent = styled.div`
  width: 100%;
  display: flex;
`;

const KeyboardNum = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const KeyboardActions = styled.div`
  display: flex;
  flex-direction: column;
`;

const KeyboarButton = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  margin: 5px;
  border: solid 1px ${({ theme }) => theme.palette.border.main};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  transition: all ease 0.15s;
  cursor: pointer;
  background: #FFFFFF;
  box-shadow: 0px 2px 10px -5px rgba(0,0,0,0.0);
  &[data-value]:before {
    content: attr(data-value);
  }
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 2px 10px -5px rgba(0,0,0,0.2);
  }
  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 10px -5px rgba(0,0,0,0.0);
    opacity: 0.5;
  }
  ${props => props.actions && css`
      background: #EFF2F8;
    `}
  ${props => props.enter && css`
      flex: 1;
      align-items: flex-end;
      padding-bottom: 25px;
    `}
`;

export {
  KeyboardContainer,
  KeyboardInput,
  KeyboardContent,
  KeyboardNum,
  KeyboardActions,
  KeyboarButton,
};
