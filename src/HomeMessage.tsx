import styled from 'styled-components';

const StyledDiv = styled.div`
  color: #282c34;
  font-size: 2.4rem;
  font-weight: 600;
  text-align: center;
`;

const HomeMessage = () => {
  return (
    <StyledDiv>Welcome Home.</StyledDiv>
  );
};

export default HomeMessage;
