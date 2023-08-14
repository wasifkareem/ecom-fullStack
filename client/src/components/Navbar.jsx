import { styled } from "styled-components";
import Search from "@mui/icons-material/Search";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { cartReset } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  font-family: Urbanist;
  background-color: #ffffff;
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
  display: flex;
  align-items: center;
  flex: 1;
  ${mobile({ flex: 0 })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-content: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display: "none" })}
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
  ${mobile({ fontSize: "24px", marginLeft: 15 })}
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "center" })}
  ${mobile({ flex: 2, justifyContent: "end", paddingRight: 18 })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
    dispatch(cartReset());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>

          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 22 }} />
          </SearchContainer>
        </Left>

        <Center>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
            <Logo> FABINA.</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
              <Avatar
                style={{
                  backgroundColor: "teal",
                  borderRadius: 4,
                  maxHeight: 37,
                }}
                src="/broken-image.jpg"
              />
              <hr />

              <button
                onClick={handleClick}
                style={{
                  minHeight: 37,
                  backgroundColor: "#c91616",
                  Align: "center",
                  borderRadius: 4,
                  borderStyle: "none",
                  marginRight: 3,
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <b>Logout</b>
              </button>
            </>
          ) : (
            <>
              <Link
                to={`/register`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link
                to={`/login`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>SIGN IN</MenuItem>
              </Link>
            </>
          )}
          <MenuItem>
            <Link to={`/cart`}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
