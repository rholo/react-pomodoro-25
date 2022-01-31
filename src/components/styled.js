import styled from 'styled-components';

const RoundButton = styled.button`
  background: transparent;
  border:1px solid white;
  color: white;
  font-size: 1.2rem;
  font-weight:100;
  border-radius:50%;
  width: 45px;
  height: 45px;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 1px solid white;
  padding: 1rem;
  color: white;
`;
const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction ? `${props.direction}` : 'row'};
  align-items: center;
  justify-content: center;
`;
const Number = styled.span`
  font-weight: 100;
  margin:1rem;
  padding:0;
  line-height:0;
  font-size: ${(props) => (props.size ? `${props.size}rem` : '2rem')}
`;
export { RoundButton, Button, FlexCenter, Number };
