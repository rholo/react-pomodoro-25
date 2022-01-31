import styled from 'styled-components';

const RoundButton = styled.button`
background: white;
border:0;
border-radius:50%;
width: 45px;
height: 45px;
color: grey;
`;
const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Number = styled.span`
  font-weight: 100;
  font-size: ${(props) => (props.size ? `${props.size}rem` : '2rem')}
`;
export { RoundButton, FlexWrapper, Number };
