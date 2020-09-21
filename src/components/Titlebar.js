import React, {useState} from 'react';
import styled from 'styled-components';
import { Home, Email, Assignment, Person, Group, Accessibility, Alarm, 
    Message, ArrowRight, ArrowDropDown,
} from '@styled-icons/material';


import {Nav, Navbar, NavItem, Button, Row, Col, Breadcrumb, BreadcrumbItem,
        UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem,
        NavLink, NavbarBrand, NavbarToggler, NavbarText, Badge,
        Collapse, ListGroup, ListGroupItem,
    } from 'reactstrap';

import Link from 'next/link';
import styles from "./Titlebar.module.scss";

const Titlebar = ({title, crumb}) => {
  
    return (
        
        <Row>

			<Col sm="12" className={ styles.heading } >

				<span > {title}  </span>

				<div className={styles.breadcrumb}>

					{crumb.map((page) => {
						return (
							<div className={styles.breadcrumbitem}>
								{page === "Home" ? <Home size={14} style={{marginBottom: "3px"}}/> : <ArrowRight size={16} />}
								<Link href="/">
									<a>{page}</a>
								</Link>
							</div>
						)
					})}

				</div>

			</Col>
		</Row>

    );
  
}

export default Titlebar;



				




