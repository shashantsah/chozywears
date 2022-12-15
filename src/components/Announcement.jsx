import styled from "styled-components"

const Container = styled.div`
    height:30px;
    background-color: #DBA39A;
    color:white;
    display: flex;
    align-items:center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;

`
export default function Announcement() {
  return (
    <Container>
       Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}
