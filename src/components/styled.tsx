import styled from 'styled-components';
import { color } from 'styled-system';

const RoundButton = styled.button`
  ${color}
  background: transparent;
  border:1px solid white;
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
type iFlexCenter = {
  direction?: String
}
const FlexCenter = styled.div`
  display: flex;
  flex-direction: ${(props: iFlexCenter) =>
    props.direction ? `${props.direction}` : 'row'};
  align-items: center;
  justify-content: center;
`;
type INumber = {size?: Number}
const Number = styled.span`
  font-weight: 100;
  margin:1rem;
  padding:0;
  line-height:0;
  font-size: ${(props: INumber) => (props.size ? `${props.size}rem` : '2rem')}
`;
export { RoundButton, Button, FlexCenter, Number };
