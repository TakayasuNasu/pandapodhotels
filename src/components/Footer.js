import styled from 'styled-components'

const InFooter = styled.section`
margin-top: 80px;
padding: 30px 0;
background-color: #000000;
div {
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
  width: 80vw;
}
`

const UL = styled.ul`
width: 25%;
li {
  font-size: 13px;
  color: #ffffff;
	font-weight: 400;
  line-height: 1.8em;
  letter-spacing: 0.4px;
  text-decoration: none;
}
`

const Footer = () => {
  return (
    <footer>
      <InFooter>
        <div>
          <UL>
            <li>1-604-300-5551</li>
            <li>anda@pandapod.ca</li>
          </UL>
          <UL>
            <li>OUR STORY</li>
            <li>OUR PODS</li>
          </UL>
          <UL>
            <li>COVID-19</li>
            <li>DIRECTIONS</li>
          </UL>
        </div>
      </InFooter>
    </footer>
  )
}

export default Footer