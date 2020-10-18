
import {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {useRouter} from "next/router";

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
	const router = useRouter();

	const { passwordResetKey } = router.query;

	const passwordStatus = useSelector(state => state.passwordResetStatus, shallowEqual)

	const [passwordResetStatus, setPasswordResetStatus] = useState(false);

    
    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validationSchema: Yup.object({
             password: Yup.string().required('Please Enter Your Password')
        }),
        onSubmit: async (values) => {

            await dispatch(Actions.practicePasswordResetWithKeySaga(passwordResetKey, values.password));
            setPasswordResetStatus(true)
            router.replace("/practice/auth/reset-password")
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

	                            <h4 className="mt-3">New Password</h4>
	                            <p className="text-muted mb-4">Reset Password With PractX</p>
	                            
	                        </div>


                            <Card>
	                            <CardBody className="p-1">
	                                <div className="p-3">

	                                        {
	                                            passwordResetStatus ? <Alert variant="success" className="text-center mb-4">Your password has been changed successfuly</Alert>
	                                            : <Alert variant="secondary" className="text-center mb-4">Enter your New password bellow!</Alert>
	                                        }
	                                    <Form onSubmit={formik.handleSubmit}>
	    
	                                        <FormGroup className="mb-4">
	                                            <Label> New Password </Label>
	                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
	                                                <InputGroupAddon addonType="prepend">
	                                                    <span className="input-group-text border-light text-muted">
	                                                        <i className="ri-lock-2-line"></i>
	                                                    </span>
	                                                </InputGroupAddon>
	                                                <Input
	                                                    type="text"
	                                                    id="password"
	                                                    name="password"
	                                                    className="form-control bg-soft-light border-light"
	                                                    placeholder="Enter your new Password"
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
	                                            <Button color="danger" block className="waves-effect waves-light" type="submit"> Change my password </Button>
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
