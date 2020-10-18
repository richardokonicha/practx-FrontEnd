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

import DashboardLayout from "../../layouts/DashboardLayout";
import Titlebar from "../../components/Titlebar";



export default function Appointments() {
    return (


        <DashboardLayout>
            <React.Fragment>

                <Row>
                    <Col>

                       <Alert color="info"> Appointments page </Alert>
                        
                    </Col>

                    
                </Row>

                
                

            </React.Fragment>

        </DashboardLayout>

    )
}