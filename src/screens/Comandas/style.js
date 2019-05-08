import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
  max-width: 75%;
  margin: 0 auto;
  overflow: hidden;
  margin-bottom: -30px;
  padding-bottom: 30px;
  @media (max-width: 1360px) {
    max-width: 100%;
  }
`
export {
    Container,
}