import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge';

import styled from 'styled-components'


const Container = styled.div`
   height: 60px;
   /* background-color: #F4EAD5; */

`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    

`

const Left = styled.div`

    flex:1;
    display: flex;
    align-items: center;
   

`
const Language =styled.span`

    font-size:14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    /* border: 0.5px solid lightgray; */
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;

`
const Input =styled.input`
    border: none;
`
const Center = styled.div`

text-align: center;
flex:1;

`
const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`

display:flex;
align-items: center;
flex:1;
justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
   

    
`

export default function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/> 
                <Search style={{color:"gray",fontsize:16 }}/>
            </SearchContainer>
        </Left>
        <Center>
            <Logo>
                MultiPlexes
            </Logo>
        </Center>
        <Right>
            <MenuItem>Register</MenuItem>
            <MenuItem>Sign In</MenuItem>
            <MenuItem>
               <Badge badgeContent={4} color="primary">
               <ShoppingCartOutlined />
                </Badge>
            </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}
