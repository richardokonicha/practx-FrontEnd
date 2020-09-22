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

            
            <Button className={styles.sidebarbutton} >

                <Dashboard size={19} className={styles.sidebarIcon} /> 

                Dashboard 

                <ArrowRight size={20} className={styles.sidebarIcon2} />
                    

            </Button>
            


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}


            <Button id="toggler" className={styles.sidebarbutton} onClick={toggleMessage}>
                <Email size={19} className={styles.sidebarIcon} /> 

                Messages

                <div  className={styles.sidebarIcon2}>
                {messages >= 0 && <Badge color="success"  className={styles.sidebadge} pill>2</Badge>}

                {!isOpenMessage ? <ArrowRight size={20} className={styles.sidebarIcon2} />
                    : <ArrowDropDown size={20} className={styles.sidebarIcon2} />}

                </div>
            </Button>
            <Collapse isOpen={isOpenMessage}>
                <ListGroup >
                    <ListGroupItem className={styles.listlist}>Chat Groups</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>Chat History</ListGroupItem>
                </ListGroup>
            </Collapse>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Button className={styles.sidebarbutton} >
                <Alarm size={19} className={styles.sidebarIcon} /> 
                Notifications
                
                <div  className={styles.sidebarIcon2}>

                <ArrowRight size={20} className={styles.sidebarIcon2} />
                    

                </div>
            </Button>


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
                    <ListGroupItem className={styles.listlist}>Add User</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>Edit User</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>Users List</ListGroupItem>
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
                    <ListGroupItem className={styles.listlist}>Pending Appointments</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>All Appointments</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>Appointment History</ListGroupItem>
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
                    <ListGroupItem className={styles.listlist}> Add Group</ListGroupItem>
                    <ListGroupItem className={styles.listlist}>View all Groups</ListGroupItem>
                </ListGroup>
            </Collapse>




        </div>

    );
  
}

export default Sidebar;



