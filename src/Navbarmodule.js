import React from "react";
import styles from "./Navbar.module.css";
//import  Styled  from "styled-components";

/*const Nav = Styled.div`
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
`;*/

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className={styles.nav}>
          <div className= {styles.title} >Movie-App.</div>
          <div className= {styles.cartIconContainer}>
            <img
                className= {styles.cartIcon} alt="Cart Icon"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            
            <span  className= {styles.cartCount}>3</span> 
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
//props in styled components color="yellow" show = {false}
//internal or inline css in react  
/*const styles ={
    nav:{
    
        height : 70,
         background :'#4267b2',
        display:"flex",
        justifyContent:"space-between" ,
        alignItems:"center" ,
        position:"relative"
    },

    title:{
   fontSize:30,
   color:'#fff',
  fontWeight:600,
  fontFamily:'"Montserrat",sans=serif',
  textTransform:"uppercase",
  marginLeft:20
    },

    cartContainer:{
        position:"relative",
        cursor:"pointer"
    },
 
    cartIcon:{
        height:48,
        marginRight:30,
        top: 15
    },
    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        positon:"absolute",
        right:30,
        top:8,
        fontSize:"12"
    }
}
// styled Components - css in js styling
//use props to dymaically change the color or styled components
//
//Styled components use the ampersand (&) to refer to the currently styled element. So we can use it to target pseudo-classes to that element.
//Styled components export an object with default exports that can be imported and used to target styles using CSS selectors.
*/