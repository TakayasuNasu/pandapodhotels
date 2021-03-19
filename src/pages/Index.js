import styled from 'styled-components'

const Wrapper = styled.main`
margin-left: auto;
margin-right: auto;
max-width: 1080px;
width: 80vw;
img {
  max-width: 100%;
  max-height: 100%;
}
`

const ListStyle = styled.ul`
display: grid;
grid-gap: 72px;
grid-auto-rows: 200px;
grid-template-columns: repeat(auto-fill, 200px);
margin-top: 20px;
`

const Index = () => {
  return (
    <Wrapper>
      <ListStyle>
        <li><img src="./pandapodhotels/img/1.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20190430-_MG_0019.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20190430-_MG_0060.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20190430-_MG_0061.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20190513-_MG_0365.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20191023-_MG_4385.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20191023-_MG_4390.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20191023-_MG_4449.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20191023-_MG_4474.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/20191023-_MG_4483.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/Copy of 20190430-_MG_0060.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/Copy of 20190430_163959.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/Copy of 20191023-_MG_4441.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/Copy of IMG_20190531_183552.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/LOGO2 (1).jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/Logo.PNG" alt=""/></li>
        <li><img src="./pandapodhotels/img/Logo.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/PandaPod_IG_12.jpg" alt=""/></li>
        <li><img src="./pandapodhotels/img/PandaPod_IG_17.jpg" alt=""/></li>
      </ListStyle>
    </Wrapper>
  )
}

export default Index