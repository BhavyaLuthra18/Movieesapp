import React from "react";
import  Styled from "styled-components";

const Nav = Styled.div`
width:100%;
height:70px;
background:linear-gradient(170deg,#1bc059,#0d47a1);
display:flex;
justify-content:space-between;
`;

const Title = Styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: red;
  }
`;

const CartContainer = Styled.div`
  position: relative;
  cursor: pointer;
`;

const CartIcon = Styled.img`
  height: 48px;
  margin-right: 30px;
  top: 20px;
`;

const CartCount = Styled.span`
  background: ${(props) => props.color };
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 20px;
  top: 2px;
  font-size: 12px;
  visibility :${(props)=>props.show?"visible":"hidden"};
`;

class Navbar extends React.Component {
    render() {
    const{cartCount} = this.props;
      
      return (
        <>
          <Nav>
            <Title>Movie-App.</Title>
            <CartContainer>
              <CartIcon
                
                src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              />
              
              <CartCount color="yellow" show = {true} >{cartCount}</CartCount> 
            </CartContainer>
          </Nav>
        </>
      );
    }
  }
  
  export default Navbar;