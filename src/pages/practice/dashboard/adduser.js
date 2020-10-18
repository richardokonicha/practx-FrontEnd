import Head from 'next/head';
import Link from 'next/link';
import React, {useState, useEffect} from 'react';

import styles from './adduser.module.scss';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";

import { 	Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, InputGroup, Alert,
			Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CustomInput
} from 'reactstrap';


import { Phone } from '@styled-icons/material';

import DashboardLayoutPractice from "../../../layouts/DashboardLayoutPractice";
import Titlebar from "../../../components/Titlebar";
import UserComponent from "../../../components/UserComponent";
import * as Actions from "../../../redux/auth/actions";



export default function AddUser() {

	const router = useRouter();
    const dispatch = useDispatch();

    const practiceData = useSelector(store=>store.auth.user);
    const practiceAddStaff = useSelector(store=>store.auth.addStaff);

    const [practice, setPractice] = useState({});
    const [token, setToken] = useState();
    const [errorAddStaff, setErrorAddStaff] = useState(true);


	const formik = useFormik({

        initialValues: {
            email: '',
            designation: ''
        },

        validationSchema: Yup.object({

            email: Yup.string().required('Please Enter Your Username'),
            designation: Yup.string().required('Select designation')

        }),

        onSubmit: values => {

            dispatch(Actions.practiceAddStaffSaga({email:values.email, designation:values.designation, token: token}));
            

        },
    });

    const errorReset = () =>{

    	setErrorAddStaff(!errorAddStaff)
    	dispatch(Actions.apiErrorReset())
    }



    useEffect(()=>{

        setPractice(practiceData.practice);
        setToken(practiceData.token);

        console.log("UseEffect called------------")
        setErrorAddStaff(practiceData.error)

    },[practiceAddStaff, errorAddStaff])

	return (


		<DashboardLayoutPractice>
			<React.Fragment>

				<Row>
					<Col>

						<Titlebar title="Add User" crumb={["Home", "Users", "Add User"]}/>
						
					</Col>
				</Row>

				
				<Row className={"mt-3"} >

					<Card className={styles.card} >

						<CardHeader style={{backgroundColor: "#353c48"}}>
							BASIC INFORMATION
						</CardHeader>	
						<CardBody>

							<CardText className={"px-auto"}>

								{errorAddStaff && 
									<Row><Col>
									<Alert color="success"> User added successfully... 
										<Button onClick={errorReset} > Closs</Button>
									</Alert>
									</Col>
									</Row>
								}

								<Row>
									
									<Col md={{size: 6, offset: 3}} >


										<Form onSubmit={formik.handleSubmit}>

											<FormGroup row>
										        <Label for="email" sm={5}> Email </Label>
										        <Col sm={7}>
										          
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


										        </Col>
										      </FormGroup>

										      
										      <FormGroup row>

										        <Label for="designation" sm={5}> Designation </Label>

										        <Col sm={7}>

										          <Input
                                                        type="select"
                                                        id="designation"
                                                        name="designation"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.designation}
                                                        invalid={formik.touched.designation && formik.errors.designation ? true : false}
                                                    >

										          	<option >Select Designation</option>
										            <option value="team lead">Team Lead</option>
										            <option value="staff">Staff</option>
										          </Input>

										          	{formik.touched.designation && formik.errors.designation ? (
                                                            <FormFeedback type="invalid">{formik.errors.designation}</FormFeedback>
                                                        ) : null
										          	} 

										        </Col>
										      </FormGroup>

										      
									      <FormGroup check row>
									        <Col md={{ size: 7, offset: 5 }}>
									          <Button color="primary" className=" waves-effect waves-light" type="submit"> Add User </Button>
									        </Col>
									      </FormGroup>
									    </Form>

									</Col>
								</Row>



							</CardText>
						</CardBody>
					</Card>
						
				</Row>
			
				

			</React.Fragment>

		</DashboardLayoutPractice>

	)
}