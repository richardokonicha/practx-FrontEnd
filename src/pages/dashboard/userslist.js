import Head from 'next/head';
import Link from 'next/link';

import {useEffect, useState} from 'react';
import { Container, Row, Col} from 'reactstrap';


import { Phone } from '@styled-icons/material';

import DashboardLayout from "../../layouts/DashboardLayout";
import Titlebar from "../../components/Titlebar";
import UserComponent from "../../components/UserComponent";



export default function UsersList() {
	return (


		<DashboardLayout>
			<React.Fragment>

				<Row>
					<Col>

						<Titlebar title="Users List" crumb={["Home", "Users", "Users list"]}/>
						
					</Col>
				</Row>

				
				<Row className={"mt-3"} sm="4">


					<UserComponent />
					<UserComponent />
					<UserComponent />
					<UserComponent />
					<UserComponent />
					<UserComponent />
					<UserComponent />
					<UserComponent />

						
				</Row>
			
				

				
				

			</React.Fragment>

		</DashboardLayout>

	)
}