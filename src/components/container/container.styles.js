import styled from "styled-components"

export const Container = styled.div`
  margin: 0 auto;

  max-width: ${(props) => `${props.width - 56}px`};
  min-width: 319px;
  padding: 0 28px;
`;