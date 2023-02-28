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
  z-index:${props => props.zindx ? props.zindx : "0"};
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

export const CardContainer = styled(FlexContainer)`
padding:3%;
 min-height: 350px;
 box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
 @media (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`;
export const MenuContainer = styled(FlexContainer)`
 @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const HeaderContainer = styled(FlexContainer)`
 @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const LinksContainer = styled(FlexContainer)`
 @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom:6px;
  }
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
@media (max-width: 768px) {
    width: 100%;
    text-align:center;
  }
`;

export const SubTitle = styled(Title)`

font-weight: ${props => props.fw ? props.fw : "400"};
font-size:  ${props => props.size ? props.size : "1.5rem"};
line-height:${props => props.lh ? props.lh : "1.5rem"};
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
    width: 100%;
`;

export const DiamondContainer = styled(FlexContainer)`
 @media (max-width: 768px) {
  transform: rotate(0deg) !important;
   -webkit-transform: rotate(0deg);
    flex-direction: column;
  }
`;

export const Diamond = styled.div`
width:${props => props.w ? props.w : "4.621rem"};
height:${props => props.h ? props.h : "4.621rem"};

position:${props => props.position ? props.position : "relative"};
bottom:${props => props.bottom ? props.bottom : "0"};
right:${props => props.right ? props.right : "0"};

background:${props => props.bg ? props.bg : "linear-gradient(90deg," + customPalette.primary.main + " 0%, " + customPalette.secondary.main + " 100%)"} ;
border:${props => props.border ? props.border : "4px solid" + customPalette.primary.main};
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
  @media (max-width: 768px) {
  transform: rotate(0deg) !important;
   -webkit-transform: rotate(0deg);
    flex-direction: column;
    margin: ${props => props.margin ? props.margin : "0"};
margin-right: ${props => props.mr ? props.mr : "0"}; 
  }
`;

export const IconDiamond = styled.img`
 transform: rotate(${props => props.rotate ? props.rotate : "45deg"}); 
position: ${props => props.position ? props.position : "relative"};
top:${props => props.top ? props.top : "0"};
left:${props => props.left ? props.left : "0"};
cursor: pointer;
@media (max-width: 768px) {
  transform: rotate(0deg) !important;
   -webkit-transform: rotate(0deg);
    flex-direction: column;
  }
`;

