import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from  "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userRedux";



const Container = styled.div`
  height: 60px;
  margin-bottom: 10px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "16px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border: 2px dotted teal;
  border-radius: 10%;
  padding: 15px;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  &:hover{
    background-color:#AFEEEE;
    font-size: 18px;
    font-weight: 900;
  }
  `;

const StyledBadge = styled(Badge)`
  &:hover {
    font-size:20px;
    .MuiSvgIcon-root {
      font-size: 25px;
    }
  }
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity);
  const user = useSelector(state=>state.user.currentUser);

//  console.log(user);

  const dispatch = useDispatch();

    function handleLogout() {
       // console.log(localStorage.getItem("persist:root"));
        localStorage.removeItem("persist:root");
        dispatch(logout());
      }


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', cursor: 'default'}}>
            <Logo>
              A-Z Boutique
          </Logo>
          </Link>
        </Center>
        <Right>
        
        {user ? (
          <MenuItem onClick={handleLogout}>
            logout
          </MenuItem>
        
        ): (
          <>
            <MenuItem as={Link} to="/register">
              REGISTER
            </MenuItem>
            <MenuItem as={Link} to="/login">
                  LOGIN
            </MenuItem>
            </>
        )}
            
              <MenuItem as={Link} to="/cart">
                <StyledBadge overlap="rectangular" badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </StyledBadge>
              </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
