import React, { Component } from 'react';
import {Link} from 'react-router';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,Container,Row,Col } from 'reactstrap';
	import 'bootstrap/dist/css/bootstrap.css';
	import './index.css'



class App extends Component {
    constructor(props) 
    {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
		isOpen: false
		};
	}
	
	toggle() {
		this.setState({
		  isOpen: !this.state.isOpen
		});
	  }
  render() {
    return (
		<div>
        <Navbar color="" light expand="md" className="site-menu">
          <NavbarBrand  href="/" className="menu-title" >Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							<NavItem>
									<NavLink href="/periodicls" className="menu-title">Periodicals</NavLink>
							</NavItem>
								<NavItem>
													<NavLink href="/accurence" className="menu-title">Accurence</NavLink>
											</NavItem>
								<NavItem>
                <NavLink href="#" className="menu-title">Logout</NavLink>
            </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
		<div>
		  {this.props.children}
		</div>
		<div className="footer">2018-19 All right reserved by majestic group. </div>
      </div>
    );
  }
}


export default App;
