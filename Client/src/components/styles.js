import styled from 'styled-components';
import customPalette from '../ThemePalette'
export const FlexContainer = styled.div`
  display:flex;
	flex-direction:  ${props => props.direction ? props.direction : "row"};
  justify-content: ${props => props.justify ? props.justify : "center"};
  gap: ${props => props.gap ? props.gap : "6px"};
  padding: ${props => props.padding ? props.padding : "1px"};
  align-items: ${props => props.items ? props.items : "center"};

`;

export const Title = styled.h1`
font-style: normal;
font-weight: 700;
font-size:  ${props => props.size ? props.size : "1.5rem"};
line-height:${props => props.lh ? props.lh : "1.5rem"};
letter-spacing:1.5%;
margin: ${props => props.margin ? props.margin : "12px"};
text-align: ${props => props.align ? props.align : "left"};
`;

export const SubTitle = styled(Title)`
font-weight: 400;
font-size:  ${props => props.size ? props.size : "1.5rem"};
line-height:${props => props.lh ? props.lh : "1.125rem"};
`;

export const Text = styled(Title)`
font-weight: 400;
font-size:  ${props => props.size ? props.size : "0.5rem"};
line-height:${props => props.lh ? props.lh : "0.8rem"};
`;

export const TextPrimary = styled.span`
color: ${customPalette.primary.main};
`;

export const TextSecondary = styled.span`
color: ${customPalette.secondary.main};
`;

export const ImageStyles = styled.img`
position:absolute;
bottom:${props => props.bottom ? props.bottom : "0"};
right:${props => props.right ? props.right : "0"};
z-index:1;
`;