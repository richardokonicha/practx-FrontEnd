import Head from 'next/head';
import Link from 'next/link';
import styles from './adduser.module.scss';

import {useEffect, useState} from 'react';

import { 	Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText,
			Card, CardHeader, CardFooter, CardBody, CardTitle, CardText, CustomInput
} from 'reactstrap';


import { Phone } from '@styled-icons/material';

import DashboardLayout from "../../../layouts/DashboardLayout";
import Titlebar from "../../../components/Titlebar";
import UserComponent from "../../../components/UserComponent";



export default function AddUser() {
	return (


		<DashboardLayout>
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

								<Row>
									
									<Col md={{size: 6, offset: 3}} >


										<Form >

											<FormGroup row>
										        <Label for="firstname" sm={5}>First Name</Label>
										        <Col sm={7}>
										          <Input type="text" name="firstname" id="firstname" placeholder="FirstName" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="lastname" sm={5}>Last Name</Label>
										        <Col sm={7}>
										          <Input type="text" name="lastname" id="lastname" placeholder="LastName" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="dateofbirth" sm={5}>Date of Birth</Label>
										        <Col sm={7}>
										          <Input type="date" name="dateofbirth" id="dateofbirth" placeholder="Date of Birth" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="gender" sm={5}>Gender</Label>
										        <Col sm={7}>
										          <Input type="select" name="gender" id="gender">
										          	<option >Select Gender</option>
										            <option>Male</option>
										            <option>Female</option>
										            <option>Dont want to say</option>
										          </Input>
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="number" sm={5}>Phone Number</Label>
										        <Col sm={7}>
										          <Input type="number" name="number" id="number" placeholder="Digits Only..." />
										        </Col>
										      </FormGroup>

									      <FormGroup row>
									        <Label for="exampleEmail" sm={5}>Email</Label>
									        <Col sm={7}>
									          <Input type="email" name="email" id="exampleEmail" placeholder="email@host.com" />
									        </Col>
									      </FormGroup>
									      <FormGroup row>
									        <Label for="examplePassword" sm={5}>Password</Label>
									        <Col sm={7}>
									          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
									        </Col>
									      </FormGroup>
									      
									      
									      <FormGroup row>
									        <Label for="exampleText" sm={5}>Address</Label>
									        <Col sm={7}>
									          <Input type="textarea" name="text" id="exampleText" />
									        </Col>
									      </FormGroup>

									      	<FormGroup row>
										        <Label for="maritalstatus" sm={5}>Marital Status</Label>
										        <Col sm={7}>
										          <Input type="select" name="maritalstatus" id="maritalstatus">
										          	<option >...</option>
										            <option>Married</option>
										            <option>Single</option>
										          </Input>
										        </Col>
										     </FormGroup>

									      <FormGroup row>
									      	<Label for="profilepic" sm={5}>Profile Pic</Label>
									        <Col sm={7}>
									        <CustomInput type="file" id="profilepic" name="profilepic" label="Select picture!" />
									      	<FormText color="muted">
									            This is some placeholder block-level help text for the above input.
									         </FormText>
									         </Col>
									      </FormGroup>

									      	<FormGroup row>
										        <Label for="location" sm={5}>Location</Label>
										        <Col sm={7}>
										          <Input type="text" name="location" id="location" placeholder="LastName" />
										        </Col>
										    </FormGroup>
									      
									    
									      <FormGroup check row>
									        <Col md={{ size: 7, offset: 5 }}>
									          <Button>Submit</Button>
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

		</DashboardLayout>

	)
}