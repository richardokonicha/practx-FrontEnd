import {useEffect, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import AuthLayout from "../../../layouts/AuthLayout";
import * as Actions from "../../../redux/auth/actions";


//redux store
//import { loginUser, apiError } from '../../redux/actions';

export default function LogIn(props) {

	const dispatch = useDispatch();
    
	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();


    const formik = useFormik({

        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({

            email: Yup.string().required('Please Enter Your Username'),
            password: Yup.string().required('Please Enter Your Password')

        }),

        onSubmit:async values => {

            await dispatch(Actions.loginPractice(values.email, values.password, router));

        },
    });


    useEffect(() => {
        // Prefetch the dashboard page
        router.prefetch('/dashboard/dashboard');
    }, [])



    // bootstrap tab settings 
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }




    return isLoading?
	(
		<React.Fragment>

			<div className="account-pages my-5 pt-sm-5">
				<Container>
					<Row className="justify-content-center">
						<Col md={8} lg={6} xl={5} >
							<div className="text-center mb-4">


								Loading...

							</div>



						</Col>
					</Row>
				</Container>
			</div>

		</React.Fragment>
	)
	:(

        <React.Fragment>

            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8} lg={6} xl={5} >
                            <div className="text-center mb-4">
                                <Link href="/" passHref className="auth-logo d-block">
                                    <img src="/images/practxLogo-dark.png" alt="Practx logo dark" height="100" className="logo logo-dark"/>
                                </Link>

                                <h4 className="mt-3">Practice Sign in</h4>

                                <p className="text-muted mb-4"> Sign in to continue to Practx. </p>

                            </div>


                            <Card>
                            <CardBody className="p-4">
                                        {
                                            props.error && <Alert color="danger">{props.error}</Alert>
                                        }
                                <div className="p-3">
                                    

                                            <Form onSubmit={formik.handleSubmit}>

                                                <FormGroup>
                                                    <Label> Email </Label>
                                                    <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                        <InputGroupAddon addonType="prepend">
                                                            <span className="input-group-text border-light text-muted">
                                                                <i className="ri-user-2-line"></i>
                                                            </span>
                                                        </InputGroupAddon>
                                                        <Input
                                                            type="email"
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

                                                <FormGroup className="mb-4">
                                                    <div className="float-right">
                                                        <Link href="/auth/forgot-password" passHref className="text-danger font-size-13"> Forgot password? </Link>
                                                    </div>
                                                    <Label> Password </Label>
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

                                                <div className="custom-control custom-checkbox mb-4">
                                                    <Input type="checkbox" className="custom-control-input" id="remember-check" />
                                                    <Label className="custom-control-label" htmlFor="remember-check"> Remember me </Label>
                                                </div>

                                                <div>
                                                    <Button color="danger" block className=" waves-effect waves-light" type="submit"> Sign in </Button>
                                                </div>

                                            </Form>
                                       


                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p> Don't have an account? <Link href="/auth/register" className="font-weight-medium text-primary" passHref> Signup now </Link> </p>
                            <p>© 2020 PRACTX. Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoft </p>
                        </div>



                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
