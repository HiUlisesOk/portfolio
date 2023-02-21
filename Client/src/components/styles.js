import styled from 'styled-components';
import customPalette from '../ThemePalette'
export const FlexContainer = styled.div`
width: ${props => props.w ? props.w : "auto"};
height: ${props => props.h ? props.h : "auto"};
  display:flex;
	flex-direction:  ${props => props.direction ? props.direction : "row"};
  flex-wrap:  ${props => props.wrap ? props.wrap : "no-wrap"};
  justify-content: ${props => props.justify ? props.justify : "center"};
  gap: ${props => props.gap ? props.gap : "6px"};
  padding: ${props => props.padding ? props.padding : "1px"};
  align-items: ${props => props.items ? props.items : "center"};
  transform: rotate(${props => props.rotate ? props.rotate : "0"});
  margin-top: ${props => props.mt ? props.mt : "auto"};
`;

export const Title = styled.h1`
width: ${props => props.w ? props.w : "auto"};
height: ${props => props.h ? props.h : "auto"};
font-style: normal;
font-weight: ${props => props.fw ? props.fw : "700"};
font-size:  ${props => props.size ? props.size : "1.5rem"};
line-height:${props => props.lh ? props.lh : "1.5rem"};
letter-spacing:1.5%;
margin: ${props => props.margin ? props.margin : "12px"};
margin-left: ${props => props.ml ? props.ml : "12px"};
text-align: ${props => props.align ? props.align : "left"};
`;

export const SubTitle = styled(Title)`

font-weight: ${props => props.fw ? props.fw : "400"};
font-size:  ${props => props.size ? props.size : "1.5rem"};
line-height:${props => props.lh ? props.lh : "1.125rem"};
`;

export const Text = styled(Title)`
font-weight: ${props => props.fw ? props.fw : "400"};
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
width:${props => props.w ? props.w : "4.621rem"};
height:${props => props.h ? props.h : "4.621rem"};

position:${props => props.position ? props.position : "relative"};
bottom:${props => props.bottom ? props.bottom : "0"};
right:${props => props.right ? props.right : "0"};

background:${props => props.bg ? props.bg : "linear-gradient(90deg, #E99010 0%, #E58523 6.25%, #E27B33 12.5%, #DF743F 18.75%, #DD6E49 25%, #DB6951 31.25%, #DA6657 37.5%, #D9635C 43.75%, #D8615F 50%, #D86061 56.25%, #D75F62 62.5%, #D75E63 68.75%, #D75E64 75%, #D75E64 81.25%, #D75E64 87.5%, #D75E64 93.75%, #D75E64 100%)"} ;
border:${props => props.border ? props.border : "4px solid #E48229"};
border-radius:${props => props.radius ? props.radius : "16px"};
 transform: rotate(${props => props.rotate ? props.rotate : "0"});
margin: ${props => props.margin ? props.margin : "12px"};
margin-right: ${props => props.mr ? props.mr : "22px"}; 
cursor: pointer;
scale: ${props => props.scale ? props.scale : "0.8"};
transition: ${props => props.transition ? props.transition : "all 0.4s ease-in-out"};
&:hover {
  scale: ${props => props.scaleHov ? props.scaleHov : "1.1"};
  ${props => props.hover ? props.hover + ";" : ""}
  }
`;

export const IconDiamond = styled.img`
 transform: rotate(${props => props.rotate ? props.rotate : "45deg"}); 
position: ${props => props.position ? props.position : "relative"};
top:${props => props.top ? props.top : "0"};
left:${props => props.left ? props.left : "0"};
cursor: pointer;
`;

// bottom={evenPosition(index) ? "50px " : "0"} right={evenPosition(index) ? "34px" : "0"} margin={evenPosition(index) ? "18px" : "18px"}