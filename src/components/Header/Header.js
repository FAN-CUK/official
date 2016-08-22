import React from 'react';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import css from './Header.css';

class Header extends React.Component {
	render() {
		return(
			<header>
				<div className="container-fluid" id="header">

					{/* Navigation */}
					<nav className={classNames(css.menu, "navbar", "navbar-fixed-top")} role="navigation">
						<div className="container">
							<div className={classNames("navbar-header", "page-scroll")}>
								<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
								<a className={classNames(css.logo, "page-scroll")} href="#page-top">F.A.N</a>
							</div>

							{/* Collect the nav links, forms, and other content for toggling */}
							<div className={classNames("collapse", "navbar-collapse", "navbar-ex1-collapse")}>
								<ul className={classNames("nav", "navbar-nav", css.menuitem)}>
									<li><a href="#">Home</a></li>
									<li className="dropdown">
										<a className="dropdown-toggle" data-toggle="dropdown" href="#">Board<span className="caret"></span></a>
										<ul className={classNames("dropdown-menu", css.mdd, css.boarddrop)}>
											<li><a href="#">Notice</a></li>
											<li><a href="#">Question</a></li>
											<li><a href="#">Free Board</a></li>
											<li><a href="#">Library</a></li>
										</ul>
									</li>
									<li className="dropdown">
										<a className="dropdown-toggle" data-toggle="dropdown" href="#">Study<span className="caret"></span></a>
										<ul className={classNames("dropdown-menu", "multi-level", css.mdd, css.studydrop)}>
											<li className={css.st}>
												<p className="text-center">C</p>
												<ul className={classNames("text-center", css.studydbdrop)}>
													<li><a href="#">1조</a></li>
													<li><a href="#">2조</a></li>
													<li><a href="#">3조</a></li>
													<li><a href="#">4조</a></li>
												</ul>
											</li>
											<li className={css.st}>
												<p className="text-center">C++</p>
												<ul className={classNames("text-center", css.studydbdrop)}>
													<li><a href="#">1조</a></li>
													<li><a href="#">2조</a></li>
													<li><a href="#">3조</a></li>
													<li><a href="#">4조</a></li>
												</ul>
											</li>
											<li className={css.st}>
												<p className="text-center">Web</p>
												<ul className={classNames("text-center", css.studydbdrop)}>
													<li><a href="#">1조</a></li>
													<li><a href="#">2조</a></li>
													<li><a href="#">3조</a></li>
												</ul>
											</li>
											<li className={css.st}>
												<p className="text-center">Java</p>
												<ul className={classNames("text-center", css.studydbdrop)}>
													<li><a href="#">1조</a></li>
													<li><a href="#">2조</a></li>
													<li><a href="#">3조</a></li>
													<li><a href="#">4조</a></li>
												</ul>
											</li>
											<li className={css.st}>
												<p className="text-center">자료구조</p>
												<ul className={classNames("text-center", css.studydbdrop)}>
													<li><a href="#">1조</a></li>
													<li><a href="#">2조</a></li>
												</ul>
											</li>
										</ul>
									</li>
									<li><a href="#">Gallery</a></li>
								</ul>
								<ul className={classNames("nav", "navbar-nav", "navbar-right", css.loginInfo)}>
									<li className="dropdown">
										<a className="dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span>My Info</a>
										<div id="info_viewer" className={classNames("panel", "panel-info", "dropdown-menu")}>
											<div className="panel-heading">
												<h3 className="panel-title"><span id = "v_title_kr">정보</span> <span id = "v_title_en">My Info</span></h3>
											</div>
											<div className="panel-body">
												<div id = "user_level" className="alert alert-info" role="alert">회원등급</div>
												<ul className="list-group">
													<li className="list-group-item">이름 : ㅇㅁㅇ</li>
													<li className="list-group-item">전공 : 컴공</li>
													<li className="list-group-item">학번 : 123456789</li>
													<li className="list-group-item">상태 : 휴학</li>
													<li className="list-group-item"><a href="#"> 소속스터디 : C언어 </a></li>
												</ul>
											</div>
										</div>
									</li>
									<li><a href="#">Logout</a></li>
								</ul>

							</div>
							{/* /.navbar-collapse */}
						</div>
						{/* /.container */}
					</nav>


				</div>

			</header>
		);
	}
}

export default Header;
