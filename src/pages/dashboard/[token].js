import Head from 'next/head';
import {useEffect, useState} from 'react';
import useSWR from 'swr';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, CardHeader, CardTitle, CardText, CardFooter,
		Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './dashboard.module.scss';

import { Email, Assignment, Person, Group, Accessibility, Alarm,
    	Message, ArrowRight, ArrowDropDown, Home, Repeat, Close,
} from '@styled-icons/material';

import DashboardLayout from "../../layouts/DashboardLayout";
import Titlebar from "../../components/Titlebar";
import UsersList from "../../components/UsersList";
import BarChart from "../../components/BarChart";
import DoughnutChart from "../../components/DoughnutChart";
import MyCardContainer from "../../components/MyCardContainer";


function Dashboard() {
	return (


		<DashboardLayout>
			<React.Fragment>

				<Row >
					<Col>

						<Titlebar title="Dashboard" crumb={["Home", "Dashboard"]}/>

					</Col>
				</Row>

				<Row className={"mt-3"} >
					<Col sm="7">

						<MyCardContainer headingText="HOSPITAL SURVEY">

							<BarChart />

						</MyCardContainer>

					</Col>

					<Col sm="5">

						<MyCardContainer headingText="HOSPITAL SURVEY">

							<DoughnutChart />

						</MyCardContainer>

					</Col>
				</Row>

				<Row className={"mt-3"}>

					<Col >

						<MyCardContainer headingText="Patients List" buttonText="Add Patient">

							<UsersList />

						</MyCardContainer>

					</Col>
				</Row>






			</React.Fragment>

		</DashboardLayout>

	)
}

export async function getServerSideProps({params}) {

	const {token} = params;

  const { data, error } = useSWR('/api/user', fetch)

 if (error) return <div>failed to load</div>
 if (!data) return <div>loading...</div>
 return <div>hello {data.name}!</div>

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Dashboard;
