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
        <>
            <div>
                <img src="/images/users/user1/jpg" className="rounded img-responsive" />

                <div>
                    <p> Dr Kirican Palma</p><br/>
                    <span></span> <p>Online</p>
                </div>

            </div>
        </>
    );

}

export default Sidebar;
