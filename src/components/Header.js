import styled from 'styled-components'

const Wrapper = styled.header`
display: flex;
justify-content: center;
position: fixed;
margin-right: auto;
margin-left: auto;
padding: 10px 32px 10px 32px;
width: 100%;
background-color: rgba(0,0,0,.7);
figure {
  margin-right: 30px;
  width: 75px;
}
img {
  max-width: 100%;
}
`

const Nav = styled.nav`
ul {
  display: flex;
  align-items: center;
}
li {
  padding: 15px;
  font-size: 13px;
  color: #ffffff;
	font-weight: 400;
  line-height: 1.8em;
  letter-spacing: 0.4px;
  text-decoration: none;
}
`


const Header = () => {
  return (
    <Wrapper>
      <figure>
        <img src="./img/logo.jpg" alt=""/>
      </figure>
      <Nav>
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>PODS</li>
          <li>EXPLORE</li>
          <li>PODS</li>
        </ul>
      </Nav>
    </Wrapper>
  )
}

export default Header