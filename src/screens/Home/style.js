import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  ${props => props.center && css`
      background: #EFF2F8;
    `}
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${props => props.center && css`
      background: #EFF2F8;
    `}
`;

export { Container, Content }
