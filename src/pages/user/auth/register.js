import {useEffect, useState, useRef} from 'react';
import { Container, Row, Col, Card, CardBody, CustomInput, FormGroup, Alert, Form, Input, Button, FormFeedback, FormText, Label, InputGroup, InputGroupAddon } from 'reactstrap';
import { connect } from 'react-redux';
import { useFormik, setFieldValue } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Head from 'next/head';
import Link from 'next/link';
import styles from './login.module.scss';
import utilStyles from '../../../styles/utils.module.scss';

import AuthLayout from "../../../layouts/AuthLayout";






export default function LogIn(props) {


    const [user, setUser] = useState(false);
    const [signUpError, setSignUpError] = useState(false);

    const [avatar, setAvatar] = useState("");

    const [formDatax, setFormDatax] = useState({});

    const formx = useRef(null);


    const avatarSet = (e) =>{
        setAvatar(e.target.files[0]);
    }

    const submit = e => {
        
        e.preventDefault()

        const data = new FormData(e.target)

        fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/staffs/setup", { 
            method: 'POST', body: data })
          .then(res => res.json())
          .then(json => console.log(json))
    }

    
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            mobileNo: '',
            dob: '',
            gender: '',
            address: '',
            education: '',
            verificationKey: '',
            avatar: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
            gender: Yup.string().required('Required'),
            mobileNo: Yup.number().required('Required'),
            dob: Yup.string().required('Required'),
            address: Yup.string().required('Required'),
            education: Yup.string().required('Required'),
            verificationKey: Yup.string().required('Required'),
            password: Yup.string()
                .required('Required')
        }),
        onSubmit: async (values) => {

            const fd = new FormData();

            fd.append("firstname", values.firstname);
            fd.append("lastname", values.lastname);
            fd.append("gender", values.gender);
            fd.append("mobileNo", values.mobileNo);
            fd.append("dob", values.dob);
            fd.append("address", values.address);
            fd.append("education", values.education);
            fd.append("verificationKey", values.verificationKey);
            fd.append("password", values.password);
            fd.append("avatar", avatar);

            try{
                const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/staffs/setup", {
                    method:"POST",
                    body: fd
                })

                const data = await res.json();
                console.log("----------- Data back-------------", data)

            }catch(e){

                 console.log("Could not register you man")
            }

            

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

                                <h4 className="mt-3">Sign up</h4>

                                <p className="text-muted mb-4"> Get your Practx account now </p>
                                
                            </div>


                            <Card>
                            <CardBody className="p-4">
                                        {
                                            signUpError && <Alert color="danger">{props.error}</Alert>
                                        }
                                        {
                                            user && <Alert variant="success">Thank You for registering with us!</Alert>
                                        }
                                <div className="p-3">
                                        
                                    <Form ref={formx} onSubmit={formik.handleSubmit} >

                                        <FormGroup row>
                                            <Label for="avatar" sm={3}> Avatar </Label>
                                            <Col sm={9}>

                                                <CustomInput 
                                                    type="file" 
                                                    id="avata" 
                                                    name="avatar" 
                                                    label="Select image!" 

                                                    onChange={avatarSet}

                                                    onBlur={formik.handleBlur}
                                                    value={formik.avatar}
                                                />

                                            <FormText color="muted">
                                                Jpeg or png only. Size limit of 200kb.
                                             </FormText>
                                             </Col>
                                        </FormGroup>
    
                                        <FormGroup>
                                            <Label> First Name </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                
                                                <Input
                                                    type="text"
                                                    id="email"
                                                    name="firstname"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="firstname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.firstname}
                                                    invalid={formik.touched.firstname && formik.errors.firstname ? true : false}
                                                />
                                                {formik.touched.firstname && formik.errors.firstname ? (
                                                    <FormFeedback type="invalid">{formik.errors.firstname}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Last Name </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-user-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="lastname"
                                                    name="lastname"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Enter lastname"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.lastname}
                                                    invalid={formik.touched.lastname && formik.errors.lastname ? true : false}
                                                />
                                                {formik.touched.lastname && formik.errors.lastname ? (
                                                    <FormFeedback type="invalid">{formik.errors.lastname}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Mobile Number </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-phone-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="number"
                                                    id="mobileNo"
                                                    name="mobileNo"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Mobile number"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.mobileNo}
                                                    invalid={formik.touched.mobileNo && formik.errors.mobileNo ? true : false}
                                                />
                                                {formik.touched.mobileNo && formik.errors.mobileNo ? (
                                                    <FormFeedback type="invalid">{formik.errors.mobileNo}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup className="mb-4">
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

                                        <FormGroup>
                                            <Label> Date of Birth </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-calendar-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="dob"
                                                    name="dob"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="-- / -- / --"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.dob}
                                                    invalid={formik.touched.dob && formik.errors.dob ? true : false}
                                                />
                                                {formik.touched.dob && formik.errors.dob ? (
                                                    <FormFeedback type="invalid">{formik.errors.dob}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Gender</Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                               
                                                <Input
                                                    type="select"
                                                    id="gender"
                                                    name="gender"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Gender"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.gender}
                                                    invalid={formik.touched.gender && formik.errors.gender ? true : false}
                                                >

                                                    <option > Select Gender </option>
                                                    <option> Male </option>
                                                    <option> Female </option>
                                                </Input>
                                                {formik.touched.gender && formik.errors.gender ? (
                                                    <FormFeedback type="invalid">{formik.errors.gender}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Address </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                               
                                                <Input
                                                    type="textarea"
                                                    id="address"
                                                    name="address"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Your Address please"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.address}
                                                    invalid={formik.touched.address && formik.errors.address ? true : false}
                                                />
                                                {formik.touched.address && formik.errors.address ? (
                                                    <FormFeedback type="invalid">{formik.errors.address}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Education </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                
                                                <Input
                                                    type="text"
                                                    id="education"
                                                    name="education"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Educational Qualification(s)"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.education}
                                                    invalid={formik.touched.education && formik.errors.education ? true : false}
                                                />
                                                {formik.touched.education && formik.errors.education ? (
                                                    <FormFeedback type="invalid">{formik.errors.education}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label> Verification Key </Label>
                                            <InputGroup className="mb-3 bg-soft-light input-group-lg rounded-lg">
                                                <InputGroupAddon addonType="prepend">
                                                    <span className="input-group-text border-light text-muted">
                                                        <i className="ri-lock-2-line"></i>
                                                    </span>
                                                </InputGroupAddon>
                                                <Input
                                                    type="text"
                                                    id="verificationKey"
                                                    name="verificationKey"
                                                    className="form-control bg-soft-light border-light"
                                                    placeholder="Enter Verification Key here"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.verificationKey}
                                                    invalid={formik.touched.verificationKey && formik.errors.verificationKey ? true : false}
                                                />
                                                {formik.touched.verificationKey && formik.errors.verificationKey ? (
                                                    <FormFeedback type="invalid">{formik.errors.verificationKey}</FormFeedback>
                                                ) : null}
                                            </InputGroup>
                                        </FormGroup>

                                        <div>
                                            <Button color="primary" block className=" waves-effect waves-light" type="submit">Sign up</Button>
                                        </div>

                                        <div className="mt-4 text-center">
                                            <p className="text-muted mb-0"> By registering you agree to the Practx <Link href="#" className="text-primary"> Terms of Use </Link></p>
                                        </div>

                                    </Form>
                                </div>
                            </CardBody>
                        </Card>

                        <div className="mt-5 text-center">
                            <p> Already have an account ? <Link href="/" className="font-weight-medium text-primary"> Signin </Link> </p>
                            <p>©  2020 Practx.  Crafted with <i className="mdi mdi-heart text-danger"></i> by ReverSoftwares</p>
                        </div>

                            

                        </Col>
                    </Row>
                </Container>
            </div>

        </React.Fragment>

    )
}
