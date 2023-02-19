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

export const Diamond = styled.div`
width: 4.621rem;
height: 4.621rem;
Position:relative;
background:${props => props.bg ? props.bg : "linear-gradient(90deg, #E99010 0%, #E58523 6.25%, #E27B33 12.5%, #DF743F 18.75%, #DD6E49 25%, #DB6951 31.25%, #DA6657 37.5%, #D9635C 43.75%, #D8615F 50%, #D86061 56.25%, #D75F62 62.5%, #D75E63 68.75%, #D75E64 75%, #D75E64 81.25%, #D75E64 87.5%, #D75E64 93.75%, #D75E64 100%)"} ;
border:${props => props.border ? props.border : "4px solid #E48229"};
border-radius:${props => props.radius ? props.radius : "16px"};
transform: rotate(${props => props.rotate ? props.rotate : "-45deg"});
margin: ${props => props.margin ? props.margin : "12px"};
margin-right: ${props => props.mr ? props.mr : "22px"};
cursor: pointer;
scale: 0.8;
transition: scale 0.4s ease-in-out;
&:hover {
    scale: 1.1;
  }
`;