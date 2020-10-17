
import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {useSelector, shallowEqual, useDispatch} from "react-redux";

import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import AuthLayout from "../../../layouts/AuthLayout";


import * as Actions from "../../../redux/auth/actions";






export default function ForgotPassword(props) {

	const dispatch = useDispatch()

	const passwordStatus = useSelector(state => state.passwordResetStatus, shallowEqual)

	const [passwordResetStatus, setPasswordResetStatus] = useState(false);

    
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Required')
        }),
        onSubmit: async (values) => {

            await dispatch(Actions.forgetPasswordRequestSaga(values.email));
            setPasswordResetStatus(true)
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

	                            <h4 className="mt-3">Reset Password</h4>
	                            <p className="text-muted mb-4">Reset Password With PractX</p>
	                            
	                        </div>


                            <Card>
	                            <CardBody className="p-1">
	                                <div className="p-3">

	                                        {
	                                            passwordResetStatus ? <Alert variant="success" className="text-center mb-4">Check your email for reset directions</Alert>
	                                            : <Alert variant="info" className="text-center mb-4">Enter your Email and instructions will be sent to you!</Alert>
	                                        }
	                                    <Form onSubmit={formik.handleSubmit}>
	    
	                                        <FormGroup className="mb-4">
	                                            <Label> Email </Label>
	                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
	                                                <InputGroupAddon addonType="prepend">
	                                                    <span className="input-group-text border-light text-muted">
	                                                        <i className="ri-mail-line"></i>
	                                                    </span>
	                                                </InputGroupAddon>
	                                                <Input
	                                                    type="text"
	                                                    id="email"
	                                                    name="email"
	                                                    className="form-control bg-soft-light border-light"
	                                                    placeholder="Enter email"
	                                                    onChange={formik.handleChange}
	                                                    onBlur={formik.handleBlur}
	                                                    value={formik.values.email}
	                                                    invalid={formik.touched.email && formik.errors.email ? true : false}
	                                                />
	                                                {formik.touched.email && formik.errors.email ? (
	                                                    <FormFeedback type="invalid">{formik.errors.email}</FormFeedback>
	                                                ) : null}
	                                            </InputGroup>
	                                        </FormGroup>

	                                        <div>
	                                            <Button color="primary" block className="waves-effect waves-light" type="submit"> Reset </Button>
	                                        </div>

	                                    </Form>
	                                </div>
	                            </CardBody>
	                        </Card>

                        <div className="mt-5 text-center">
                            <p> Remember It ? <Link href="/" className="font-weight-medium text-primary"> Signin </Link> </p>
                            <p>© 2020 PractX Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares </p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
