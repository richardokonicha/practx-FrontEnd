import Head from 'next/head';
import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, CardHeader, 
    CardTitle, CardText, CardFooter,Input, Button, FormFeedback, Label, InputGroup, 
    InputGroupAddon, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem,
} from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './profile.module.scss';

import { Email, Phone, Person, Group, Accessibility, Alarm, 
        Message, ArrowRight, ArrowDropDown, Home, Repeat, Close,
} from '@styled-icons/material';

import DashboardLayoutPractice from "../../../layouts/DashboardLayoutPractice";
import Titlebar from "../../../components/Titlebar";



export default function Profile() {
    return (


        <DashboardLayoutPractice>
            <React.Fragment>

                <Row>
                    <Col>

                        <Titlebar title="Profile" crumb={["Home", "Profile"]}/>
                        
                    </Col>
                </Row>

                <Row className={"mt-3"}>

                    <Col md="4">

                            <Card 
                                style={{backgroundColor: "#353c48", justifyContent:"center", margin: "10px"}}
                                className={styles.cardTopBorder}
                                >

                                <CardBody>

                                    <CardTitle className={"mb-4", "text-center"}>

                                        <img src="/images/users/avatar-1.jpg" className={styles.profileimage}/>

                                    </CardTitle>

                                    <CardText className={"text-center"}>

                                        <h4 className={"text-primary"}>Dr Karen Patel</h4>
                                        <span> Cardiology</span>
                                        
                                        <ListGroup >
                                            <ListGroupItem className={styles.listlist}>
                                                <span>Followers</span> <span>19 milli</span>
                                            </ListGroupItem>

                                            <ListGroupItem className={styles.listlist}>
                                                <span>Following</span> <span>no one</span>
                                            </ListGroupItem>

                                            <ListGroupItem className={styles.listlist}>
                                                <span>Friends</span> <span>7 milli</span>
                                            </ListGroupItem>

                                        </ListGroup>

                                        <Button color="danger" size="sm"> Read More </Button>
                                        <Button color="success" size="sm" className={"ml-2"}> Read More </Button>

                                    </CardText>                         

                                </CardBody>

                            </Card>


                            <Card 
                                style={{backgroundColor: "#353c48", margin: "10px"}}
                                className={styles.cardTopBorder}
                                >
                                
                                <CardHeader 
                                    style={{backgroundColor: "#353c48", margin: "10px", borderBottomWidth: "1px", borderBottomColor: "rgba( 255, 255, 255, 0.1)"}}>

                                        ABOUT ME

                                </CardHeader>

                                <CardBody>
                                    <CardText>

                                    I am the best person i know in this whole world, No body is better 
                                    than me, i am the best of the best in the entire univers. Period

                                    </CardText>                         

                                </CardBody>

                            </Card>

                        
                    </Col>



                    <Col md="8" className={styles.detials}>

                        <Card style={{backgroundColor: "#353c48", justifyContent:"center", margin: "10px"}}>

                            <CardHeader className={styles.heading}> 
                                Details
                            </CardHeader>

                            <CardBody>

                                <Row>
                                    
                                    <Col>
                                        <CardTitle>
                                            Full Name
                                        </CardTitle>
                                        <CardText>
                                            Dr Karen Palma
                                        </CardText>
                                    </Col>

                                    <Col>
                                        <CardTitle>
                                            Mobile
                                        </CardTitle>
                                        <CardText>
                                            <Phone size={16} color="white"/> (123) 76572
                                        </CardText>
                                    </Col>

                                    <Col>
                                        <CardTitle>
                                            Email
                                        </CardTitle>
                                        <CardText>
                                            karn@gmail.com
                                        </CardText>
                                    </Col>

                                    <Col>
                                        <CardTitle>
                                            Location
                                        </CardTitle>
                                        <CardText>
                                            Nigeria
                                        </CardText>
                                    </Col>
                                </Row>

                                <hr/>

                                <CardText>

                                    <p> 

                                        It is also used to identify any abnormal tissue in the uterine cavity, such as uterine fibroids, 
                                        endometrial polyps, scar tissue, or retained pregnancy tissue, the presence of which may be suggested 
                                         history or previous tests such as a hysterosalpingogram (x-ray of the uterus and tubes). <br/><br/>
                                         This procedure is done in the office here at IVF New England, and is done by one of the physicians.
                                         <br/>

                                        Approximately an hour before the exam we suggest that you take Ibuprofen 600 mg (Motrin/Advil) or a similar
                                    </p><br/>

                                    <CardTitle>Education <hr/></CardTitle>

                                    <ul>
                                        <li>Option that is option and option</li>
                                        <li>Option that is option and option</li>
                                        <li>Option that is option and option</li>

                                    </ul>


                                    <CardTitle>Experience <hr/></CardTitle>

                                    <ul>
                                        <li>Option that is option and option</li>
                                        <li>Option that is option and option</li>
                                        <li>Option that is option and option</li>

                                    </ul>
                                    

                                </CardText>                         

                            </CardBody>

                        </Card>

                        
                    </Col>

                    
                </Row>

                
                

            </React.Fragment>

        </DashboardLayoutPractice>

    )
}