import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useRouter} from "next/router";
import {useSelector, useDispatch} from "react-redux";

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
import * as Actions from "../redux/auth/actions"; 

const SidebarUser = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const userdata = useSelector(store=>store.auth.user);
    const [user, setUser] = useState({});
    const [token, setToken] = useState();

	const logout = () => {
        dispatch(Actions.logoutPracticeSaga(router));
    };

    const [messages, setMessages] = useState(0);
    const [appointments, setAppointments] = useState(0);


    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const toggleMessage = () => setIsOpenMessage(!isOpenMessage);

    const [isOpenAppointment, setIsOpenAppointment] = useState(false);
    const toggleAppointment = () => setIsOpenAppointment(!isOpenAppointment);

    const [isPractice, setisPractice] = useState(false);
    const toggleGroup = () => setisPractice(!isPractice);

    const [isOpenUser, setIsOpenUser] = useState(false);
    const toggleUser = () => setIsOpenUser(!isOpenUser);

    const [isOpenNotif, setIsOpenNotif] = useState(false);
    const toggleNotif = () => setIsOpenNotif(!isOpenNotif);


    useEffect(()=>{

    },[user])

    return (

        <div className={styles.sidebar} style={{scrollbarWidth:"none"}} >

            <div className={styles.profile}>
                <img src="/images/users/avatar-1.jpg" className={styles.profilepic} />

                <div className={styles.profilestatus}>
                    <p className={styles.username}> {user ? `${user.practiceName}`: "" } </p>
                    <span color="success" className={styles.badgestatus} > </span> <span>Online</span>
                </div>

            </div>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}
            <Link href="/practice/dashboard/dashboard" passHref>

                <Button className={styles.sidebarbutton} >

                    <Dashboard size={19} className={styles.sidebarIcon} />

                    Dashboard

                    <ArrowRight size={20} className={styles.sidebarIcon2} />


                </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}
            <Link href="/practice/dashboard/chat" passHref>

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
            <Link href="/practice/dashboard/profile" passHref>

                <Button id="toggler" className={styles.sidebarbutton}>
                    <Email size={19} className={styles.sidebarIcon} />

                    Profile

                    <div  className={styles.sidebarIcon2}>


                    <ArrowRight size={20} className={styles.sidebarIcon2} />

                    </div>
                </Button>
            </Link>


{/* ----------------------------------------------- NEXT ITEM ----------------------- */}

            <Link href="/practice/dashboard/notification" passHref>
                <Button className={styles.sidebarbutton} >
                    <Alarm size={19} className={styles.sidebarIcon} />
                    Notifications

                    <div  className={styles.sidebarIcon2}>

                    <ArrowRight size={20} className={styles.sidebarIcon2} />


                    </div>
                </Button>
            </Link>


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
                <Link href="/practice/dashboard/appointments" passHref>
                        <ListGroupItem className={styles.listlist}>

                                Pending Appointments

                        </ListGroupItem>
                    </Link>
                    <Link href="/practice/dashboard/appointments-all" passHref>
                        <ListGroupItem className={styles.listlist}>

                                All Appointments

                        </ListGroupItem>
                    </Link>
                    <Link href="/practice/dashboard/appointments-history" passHref>
                        <ListGroupItem className={styles.listlist}>

                                Appointments history

                        </ListGroupItem>
                    </Link>
                </ListGroup>
            </Collapse>

			{/* ----------------------------------------------- NEXT ITEM ----------------------- */}


			                <Button className={styles.sidebarbutton} onClick={logout}>

			                    <Person size={19} className={styles.sidebarIcon} />

			                    	Logout

			                </Button>





        </div>

    );

}

export default SidebarUser;
