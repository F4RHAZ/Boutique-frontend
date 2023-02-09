import React from 'react';
import styled from 'styled-components';
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

import { mobile, tablet } from "../responsive";
import cityLogo from "../Logo/cityLogo.jpg";



const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display : flex;
  flex-direction: column;
  padding : 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: center;
  font-size: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
`;

const SocialIcon = styled.div`
  width : 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items : center;
  justify-content: center;
  margin-right 20px;

`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}



`;

const Title = styled.h3 `
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin : 0;
  padding : 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;


`;

const ListItem = styled.li `
  width: 50%;
  margin-bottom: 10px;
`;



const Right = styled.div`
  flex: 1;
  padding 20px;
  ${mobile({ backgroundColor : "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Payment = styled.img`
    width: 50%;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;


const Footer = () => {
  return(
    <Container>
      <Left>
        <Logo> 
        <Img src={cityLogo} alt="My App Logo" />
        </Logo>

        <Desc>
        "Empowering customers with stylish, affordable clothing while promoting sustainable practices and ethical production."
        </Desc>

        <SocialContainer>

          <SocialIcon color = "3B5999 " >
           <Facebook/>
          </SocialIcon>

          <SocialIcon color = "E4405F " >
           <Instagram/>
          </SocialIcon>

          <SocialIcon color = "55ACEE " >
           <Twitter/>
          </SocialIcon>

          <SocialIcon color = "E60023 " >
           <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
      <Title>Useful Links</Title>
     <List>
       <ListItem>Home</ListItem>
       <ListItem>Cart</ListItem>
       <ListItem>Man Fashion</ListItem>
       <ListItem>Woman Fashion</ListItem>
       <ListItem>Accessories</ListItem>
       <ListItem>My Account</ListItem>
       <ListItem>Order Tracking</ListItem>
       <ListItem>Wishlist</ListItem>
       <ListItem>Wishlist</ListItem>
       <ListItem>Terms</ListItem>
     </List>


      </Center>


      <Right>
      <Title>Contact</Title>
      <ContactItem onClick={() => window.open("https://www.google.com/maps/place/Airport+Road,+Juba,+South+Sudan/")}> 
        <Room style={{marginRight:"10px"}}/> Airport road opposit Alpha Bank Juba, South Sudan
      </ContactItem>
      <ContactItem onClick={() => window.open("tel:+211923612222")}>
        <Phone style={{marginRight:"10px"}}/> +211 923 612 222
      </ContactItem>
      <ContactItem onClick={() => window.open("tel:+211913612222")}>
        <Phone style={{marginRight:"10px"}}/> +211 913 612 222
      </ContactItem>
      <ContactItem onClick={() => window.open("tel:+211983612222")}>
        <Phone style={{marginRight:"10px"}}/> +211 983 612 222
      </ContactItem>
      <ContactItem onClick={() => window.open("mailto:gochgoch@yahoo.com")}>
        <MailOutline style={{marginRight:"10px"}} /> gochgoch@yahoo.com
      </ContactItem >
      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />


      </Right>

    </Container>
  )
}

export default Footer
