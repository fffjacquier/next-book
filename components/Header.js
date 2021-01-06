import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from "next/router";
import NProgress from 'nprogress'

Router.onRouteChangeStart = (z) => {
  console.log("onRoutechangestart",z );
  NProgress.start();
}
Router.onRouteChangeComplete = (z) => {
  NProgress.done();
}
Router.onRouteChangeError = (z) => {
  NProgress.error();
}

const LogoStyle = styled.h1`
  font-size: 3rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1200px) {
    margin: 0;
    text-align: center;
  }
`;

const HeaderStyle = styled.div`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1200px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.ligthgrey};
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <div className="bar">
        <LogoStyle>
          <Link href="/">
            <a>Lire/&Eacute;crire</a>
          </Link>
        </LogoStyle>
        <Nav />
      </div>
      <div className="sub-bar">
        <p>Recherche</p>
      </div>
      <div>Panier</div>
    </HeaderStyle>
  );
};

export default Header;
