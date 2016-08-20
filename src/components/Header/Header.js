import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import css from './Header.css';

class Header extends React.Component {
	render() {
		return(
			<Navbar fixedTop={true}>
				<Navbar.Header className="page-scroll">
					<Navbar.Brand>
						<a href="#page-top">F.A.N</a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav className={css.menuitem}>
						<NavItem>Home</NavItem>
						<NavDropdown title="Board" id="basic-nav-dropdown">
							<MenuItem>Notice</MenuItem>
							<MenuItem>Free Board</MenuItem>
							<MenuItem>Library</MenuItem>
							<MenuItem>PDS</MenuItem>
							<MenuItem>Q & A</MenuItem>
						</NavDropdown>
						<NavDropdown title="Study" id="basic-nav-dropdown">
							<NavDropdown title="C" id="basic-nav-dropdown">
								<MenuItem>1조</MenuItem>
								<MenuItem>2조</MenuItem>
								<MenuItem>3조</MenuItem>
							</NavDropdown>
							<MenuItem divider />
							<NavDropdown title="C++" id="basic-nav-dropdown">
								<MenuItem>1조</MenuItem>
								<MenuItem>2조</MenuItem>
								<MenuItem>3조</MenuItem>
							</NavDropdown>
							<MenuItem divider />
							<NavDropdown title="JAVA" id="basic-nav-dropdown">
								<MenuItem>1조</MenuItem>
								<MenuItem>2조</MenuItem>
								<MenuItem>3조</MenuItem>
							</NavDropdown>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
						<NavItem>
							<FontAwesome name="sign-in"/> 로그인
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Header;
