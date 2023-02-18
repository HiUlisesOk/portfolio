import styled from 'styled-components';

export const FlexContainer = styled.div`
  display:flex;
	flex-direction:  ${props => props.direction ? props.direction : "row"};
  justify-content: ${props => props.justify ? props.justify : "center"};
  gap: ${props => props.gap ? props.gap : "6px"};
  padding: ${props => props.padding ? props.padding : "1px"};
`;