import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../styles/utils.module.scss';

import AuthLayout from "../../layouts/AuthLayout";
//i18n
import { useTranslation } from 'react-i18next';

//redux store
//import { loginUser, apiError } from '../../redux/actions';

//Import Images






export default function LogIn(props) {
    
    const formik = useFormik({
        initialValues: {
            password: 'test'
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Please Enter Your Password')
        }),
        onSubmit: values => {
            console.log(values)
        },
    });
  
    return (

        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
                                <Link href="/" passHref className="auth-logo d-block">
                                    <img src="/images/practxLogo-dark.png" alt="Practx logo dark" height="100" className="logo logo-dark"/>
                                </Link>

                                <h4 className="mt-3">Sign in</h4>
                                <p className="text-muted mb-4">Enter your password to unlock the screen!</p>
                                
                            </div>


                            <Card>
                                <CardBody className="p-4">
                                    <div className="p-3">
                                        <div className="user-thumb text-center mb-4">
                                            <img src="/images/users/avatar-1.jpg" className="rounded-circle img-thumbnail avatar-lg" alt="thumbnail" />
                                            <h5 className="font-size-15 mt-3"> Patricia Smith </h5>
                                        </div>
                                        <Form onSubmit={formik.handleSubmit}>

                                            <FormGroup className="mb-4">
                                                <label> Password </label>
                                                <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                    <InputGroupAddon addonType="prepend">
                                                        <span className="input-group-text border-light text-muted">
                                                            <i className="ri-lock-2-line"></i>
                                                        </span>
                                                    </InputGroupAddon>
                                                    <Input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="form-control bg-soft-light border-light"
                                                        placeholder="Enter Password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                                        invalid={formik.touched.password && formik.errors.password ? true : false}
                                                    />
                                                    {formik.touched.password && formik.errors.password ? (
                                                        <FormFeedback type="invalid">{formik.errors.password}</FormFeedback>
                                                    ) : null}
                                                    
                                                </InputGroup>
                                            </FormGroup>

                                            <div>
                                                <Button color="primary" block className=" waves-effect waves-light" type="submit">Sign in</Button>
                                            </div>

                                        </Form>
                                    </div>
                                </CardBody>
                            </Card>

                        <div className="mt-5 text-center">
                            <p>Not you ? return <Link href="login" className="font-weight-medium text-primary"> Signin </Link> </p>
                            <p>© 2020 Practx. Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares </p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
