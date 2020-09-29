import React, {useState} from 'react';
import styled from 'styled-components';
import { Dashboard, Email, Assignment, Person, Group, Accessibility, Alarm, 
    Message, ArrowRight, ArrowDropDown,
} from '@styled-icons/material';


import {Nav, Navbar, NavItem, Button,
        UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem,
        NavLink, NavbarBrand, NavbarToggler, NavbarText, Badge,
        Collapse, ListGroup, ListGroupItem,
    } from 'reactstrap';

import Link from 'next/link';
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    const [messages, setMessages] = useState(0);
    const [appointments, setAppointments] = useState(0);


    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const toggleMessage = () => setIsOpenMessage(!isOpenMessage);

    const [isOpenAppointment, setIsOpenAppointment] = useState(false);
    const toggleAppointment = () => setIsOpenAppointment(!isOpenAppointment);

    const [isOpenGroup, setIsOpenGroup] = useState(false);
    const toggleGroup = () => setIsOpenGroup(!isOpenGroup);

    const [isOpenUser, setIsOpenUser] = useState(false);
    const toggleUser = () => setIsOpenUser(!isOpenUser);

    const [isOpenNotif, setIsOpenNotif] = useState(false);
    const toggleNotif = () => setIsOpenNotif(!isOpenNotif);
  
    return (
        
        <div className={styles.sidebar} style={{scrollbarWidth:"none"}} >

            <div className={styles.profile}>
                <img src="/images/users/avatar-1.jpg" className={styles.profilepic} />

                <div className={styles.profilestatus}>
                    <p className={styles.username}> Dr Kirican Palma</p>
                    <span color="success" className={styles.badgestatus} > </span> <span>Online</span>
                </div>
                
            </div>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}
            <Link href="/">
            
                <Button className={styles.sidebarbutton} >

                    <Dashboard size={19} className={styles.sidebarIcon} /> 

                    Dashboard 

                    <ArrowRight size={20} className={styles.sidebarIcon2} />
                        

                </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}
            <Link href="/dashboard/chat">

            <Button id="toggler" className={styles.sidebarbutton}>
                <Email size={19} className={styles.sidebarIcon} /> 

                Chat

                <div  className={styles.sidebarIcon2}>
                {messages >= 0 && <Badge color="success"  className={styles.sidebadge} pill>2</Badge>}

                <ArrowRight size={20} className={styles.sidebarIcon2} />

                </div>
            </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}
            <Link href="/dashboard/profile">

                <Button id="toggler" className={styles.sidebarbutton}>
                    <Email size={19} className={styles.sidebarIcon} /> 

                    Profile

                    <div  className={styles.sidebarIcon2}>
                    

                    <ArrowRight size={20} className={styles.sidebarIcon2} />

                    </div>
                </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Link href="/dashboard/notification">
                <Button className={styles.sidebarbutton} >
                    <Alarm size={19} className={styles.sidebarIcon} /> 
                    Notifications
                    
                    <div  className={styles.sidebarIcon2}>

                    <ArrowRight size={20} className={styles.sidebarIcon2} />
                        

                    </div>
                </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Button id="toggler" className={styles.sidebarbutton} onClick={toggleUser}>
                <Person size={19} className={styles.sidebarIcon} /> 
                Users
                
                <div  className={styles.sidebarIcon2}>

                {!isOpenUser ? <ArrowRight size={20} className={styles.sidebarIcon2} />
                    : <ArrowDropDown size={20} className={styles.sidebarIcon2} />}

                </div>
            </Button>
            <Collapse isOpen={isOpenUser}>

                <ListGroup >

                    <Link href="/dashboard/adduser">
                        <ListGroupItem className={styles.listlist}>
                            
                                Add User
                                
                        </ListGroupItem>
                    </Link>
                    
                    
                    <Link href="/dashboard/userslist">
                        <ListGroupItem className={styles.listlist}>
                            
                                Users List
                                
                        </ListGroupItem>
                    </Link>
                </ListGroup>
            </Collapse>

{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Button id="toggler" className={styles.sidebarbutton} onClick={toggleAppointment}>
                <Assignment size={19} className={styles.sidebarIcon} /> 
                Appointments
                
                <div  className={styles.sidebarIcon2}>
                {appointments >= 0 && <Badge color="danger"  className={styles.sidebadge} pill>2</Badge>}

                {!isOpenAppointment ? <ArrowRight size={20} className={styles.sidebarIcon2} />
                    : <ArrowDropDown size={20} className={styles.sidebarIcon2} />}

                </div>
            </Button>
            <Collapse isOpen={isOpenAppointment}>
                <ListGroup >
                <Link href="/dashboard/appointments">
                        <ListGroupItem className={styles.listlist}>
                            
                                Pending Appointments
                                
                        </ListGroupItem>
                    </Link>
                    <Link href="/dashboard/appointments-all">
                        <ListGroupItem className={styles.listlist}>
                            
                                All Appointments
                                
                        </ListGroupItem>
                    </Link>
                    <Link href="/dashboard/appointments-history">
                        <ListGroupItem className={styles.listlist}>
                            
                                Appointments history
                                
                        </ListGroupItem>
                    </Link>
                </ListGroup>
            </Collapse>



{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Button id="toggler" className={styles.sidebarbutton} onClick={toggleGroup}>
                <Group size={19} className={styles.sidebarIcon} /> 
                Groups 
                
                <div  className={styles.sidebarIcon2}>

                {!isOpenGroup ? <ArrowRight size={20} className={styles.sidebarIcon2} />
                    : <ArrowDropDown size={20} className={styles.sidebarIcon2} />}

                </div>
            </Button>
            <Collapse isOpen={isOpenGroup}>
                <ListGroup >

                    <Link href="/dashboard/addgroup">
                        <ListGroupItem className={styles.listlist}>
                            
                                Add Group
                                
                        </ListGroupItem>
                    </Link>
                    
                    
                    <Link href="/dashboard/grouplist">
                        <ListGroupItem className={styles.listlist}>
                            
                                All Groups List
                                
                        </ListGroupItem>
                    </Link>
                </ListGroup>
            </Collapse>




        </div>

    );
  
}

export default Sidebar;



