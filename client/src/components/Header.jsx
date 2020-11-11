import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { useHistory } from "react-router-dom";

function NavbarPage() {
  let history = useHistory();
  const onClickRedirectPathHandler = (name) => (e) => {
    history.push(name);
  };

  const state = () => {
    this.state({ isOpen: false });
  };

  const toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  const LoginRegLink = () => {
    return (
      <MDBNavLink to="/login">
        <strong>Login</strong>
      </MDBNavLink>
    );
  };
  const UserLink = () => {
    const logOut = (e) => {
      e.preventDefault();
      localStorage.removeItem("usertoken");
      history.push(`/`);
      window.location.reload();
    };
    return (
      <MDBNavLink to="/" onClick={logOut.bind(this)}>
        <strong>Logout</strong>
      </MDBNavLink>
    );
  };
  return (
    <MDBNavbar
      color="primary-color"
      dark
      expand="md"
      className="z-depth-2 mb-4"
    >
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">SSAFYgate</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/notice">
              <strong>공지사항</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/survey">
              <strong>설문 조사</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/stdmgt">
              <strong>학생 관리</strong>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem></MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            {localStorage.usertoken ? <UserLink /> : <LoginRegLink />}
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default NavbarPage;
