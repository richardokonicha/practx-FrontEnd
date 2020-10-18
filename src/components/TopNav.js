import React from 'react';
import Link from 'next/link';
import { Stethoscope, Bars, Search, Bell} from '@styled-icons/fa-solid';
import { Email, Alarm, ArrowDropDown, Settings } from '@styled-icons/material';

import {Nav, Navbar, NavItem,
        UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem,
        NavLink, NavbarBrand, NavbarToggler, NavbarText, 
        FormGroup, Input, Badge, Button, 
    } from 'reactstrap';

import styles from "./TopNav.module.scss";


const TopNav = () => {
  
    return (
        
        <Navbar className={styles.topnav}>
                <NavbarBrand className={styles.brand}>
                    <Stethoscope size={23} className={styles.topicons}/>
                    PRACTX
                </NavbarBrand>
                <Button className={styles.menubutton}>
                    <Bars size={16} className={styles.menuicon} />
                </Button>

                <FormGroup className={styles.formGroupTop}>
                    
                    <Input
                    type="search"
                    name="search"
                    className={styles.input}
                    id="exampleSearch"
                    placeholder="search..."
                    />
                    <Search size={16} className={styles.searchicon} />
                </FormGroup>

                <Nav className="ml-auto">
                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink className={styles.linkclass}>
                            
                                <Bell size={20} className={styles.menuicon} />
                                <Badge color="danger" pill className={styles.notificationbadge}>4</Badge>
                                
                            </NavLink>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink className={styles.linkclass}>
                            
                                <Email size={20} className={styles.menuicon} />
                                <Badge color="success" pill className={styles.notificationbadge}>3</Badge>
                                
                            </NavLink>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink className={styles.linkclass}>
                            
                                <div>
                                    <img src="/images/users/avatar-1.jpg" alt="Profile pic" className={styles.topprofilepic} /> 
                                    <span style={{fontSize: "11px"}}>Dr Karen</span>
                                    <ArrowDropDown size={20} />
                                </div>
                                
                            </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link href="/" passHref>
                            <NavLink className={styles.linkclass} >
                            
                                <Settings size={20} className={styles.menuicon}/>
                                
                            </NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
    );
  
}

export default TopNav;



