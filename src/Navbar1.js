import React from "react";
import  Styled from "styled-components";

const Nav = Styled.div`
width:100%;
height:50px;
background:#1B2843;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;
`;

const Title = Styled.div`
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  text-align:center;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  margin-left: 30px;
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
            <Title>Cinema Hive</Title>
            <CartContainer>
              <CartIcon
                
                src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
              />
              
              <CartCount color="yellow" show = {cartCount > 0} >{cartCount}</CartCount> 
            </CartContainer>
          </Nav>
        </>
      );
    }
  }
  
  export default Navbar;
