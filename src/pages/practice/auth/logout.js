
import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import AuthLayout from "../../../layouts/AuthLayout";

//redux store
//import { loginUser, apiError } from '../../redux/actions';

//Import Images






export default function ForgotPassword(props) {

	const [passwordResetStatus, setPasswordResetStatus] = useState(false);
	const [loginerror, setLoginError] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
        }),
        onSubmit: values => {
            props.forgetPassword(values.email);
        },
    });
  
    return (

        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
	                            <Link href="/" passHref className="auth-logo mb-5 d-block">
	                                <img src="/images/practxLogo-dark.png" alt="PractX logo dark" height="100" className="logo logo-dark"/>
	                            </Link>
	                        </div>


                            <Card>
	                            <CardBody className="p-1">
	                                <div className="p-3">

                                       	<Alert variant="success" className="text-center mb-4"> You have logged out successfully </Alert>
                                        
                                    
    
                                        
                                        <div>
                                            <Button color="danger" block className="waves-effect waves-light" type="submit"> Go To Home </Button>
                                        </div>

	                                    
	                                </div>
	                            </CardBody>
	                        </Card>

                        <div className="mt-5 text-center">
                            <p>© 2020 PractX Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares </p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
