import styled from "styled-components"
import {mobile, mobileMiddle} from '../responsive'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "20vh"})}
    ${mobileMiddle({height: "20vh"})}
    
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;

`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Button = styled.button`
   border: none;
   outline: none;
   padding: 10px;
   background-color: #fff;
   color: gray;
   cursor: pointer;
   font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem