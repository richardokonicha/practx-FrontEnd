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



export default function AddGroup() {

	const handleSubmit = (e) => {
		const data = e.target;
		const fd = new FormData(data);

		conslole.log(data);
	}


	return (


		<DashboardLayout>
			<React.Fragment>

				<Row>
					<Col>

						<Titlebar title="Add Group" crumb={["Home", "Group", "Add Group"]}/>
						
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

										<iframe name="dummyframe" id="dummyframe" style={{display: "none"}}></iframe>


										<Form name="addpractice" method="POST" 
											action="http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/practices/signup"
											target="dummyframe">

											<FormGroup row>
										        <Label for="practiceName" sm={5}>Practice Name</Label>
										        <Col sm={7}>
										          <Input type="text" name="practiceName" id="practiceName" placeholder="Practice Name" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="contactName" sm={5}>Contact Name</Label>
										        <Col sm={7}>
										          <Input type="text" name="contactName" id="contactName" placeholder="Contact Name" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="specialty" sm={5}>Specialty</Label>
										        <Col sm={7}>
										          <Input type="text" name="specialty" id="specialty" placeholder="Specialty" />
										        </Col>
										      </FormGroup>

										      <FormGroup row>
										        <Label for="website" sm={5}>Website</Label>
										        <Col sm={7}>
										          <Input type="text" name="website" id="website" placeholder="Website" />
										        </Col>
										      </FormGroup>


										      <FormGroup row>
										        <Label for="mobileNo" sm={5}>Phone Number</Label>
										        <Col sm={7}>
										          <Input type="number" name="mobileNo" id="mobileNo" placeholder="Phone Number..." />
										        </Col>
										      </FormGroup>

									      <FormGroup row>
									        <Label for="email" sm={5}>Email</Label>
									        <Col sm={7}>
									          <Input type="email" name="email" id="email" placeholder="email@host.com" />
									        </Col>
									      </FormGroup>
									      <FormGroup row>
									        <Label for="password" sm={5}>Password</Label>
									        <Col sm={7}>
									          <Input type="password" name="password" id="password" placeholder="Enter password" />
									        </Col>
									      </FormGroup>
									      
									      
									      <FormGroup row>
									        <Label for="address" sm={5}>Address</Label>
									        <Col sm={7}>
									          <Input type="textarea" name="address" id="address" />
									        </Col>
									      </FormGroup>

									      <FormGroup row>
									        <Label for="description" sm={5}>Description</Label>
									        <Col sm={7}>
									          <Input type="textarea" name="description" id="description" />
									        </Col>
									      </FormGroup>

									      	

									      <FormGroup row>
									      	<Label for="logo" sm={5}>Practice Logo</Label>
									        <Col sm={7}>
									        <CustomInput type="file" id="logo" name="logo" label="Select image!" />
									      	<FormText color="muted">
									            Jpeg or png only. Size limit of 200kb.
									         </FormText>
									         </Col>
									      </FormGroup>

									      	<FormGroup row>
										        <Label for="location" sm={5}>Location</Label>
										        <Col sm={7}>
										          <Input type="text" name="location" id="location" placeholder="Location" />
										        </Col>
										    </FormGroup>
									      
									    
									      <FormGroup check row>
									        <Col md={{ size: 7, offset: 5 }}>
									          <Button > Submit </Button>
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