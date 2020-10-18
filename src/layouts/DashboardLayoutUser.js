import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody,Collapse,
        FormGroup, Alert, Form, Input, Button, FormFeedback,
        Label, InputGroup, InputGroupAddon, Nav, Navbar, NavItem,
        UncontrolledDropdown,DropdownToggle, DropdownMenu, DropdownItem,
        NavLink, NavbarBrand, NavbarToggler, NavbarText, } from 'reactstrap';
import {useSelector, useDispatch} from "react-redux";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';

import styles from "./DashboardLayout.module.scss";
import TopNav from "../components/TopNav";
import SidebarUser from "../components/SidebarUser";


export default function DashboardLayoutUser({ children }) {

	const dispatch = useDispatch();
    

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Head>

                <meta charSet="utf-8" />

                <title>
                    PractX Web Application
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta content="PractX Web Platform" name="description" />
                <meta content="ReverSoftwares" name="author" />

                <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />


            </Head>

            <TopNav />

            <Container fluid className={styles.container}>
                <Row sm="2" noGutters>

                    <Col sm="2"><SidebarUser /></Col>


                    <Col sm="10" style={{paddingTop: "12vh"}}>
                    <main className={styles.maincontent} >

                        {children}

                    </main>
                    </Col>

                </Row>

            </Container>

        </>
    )
}
