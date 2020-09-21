import Head from 'next/head';
import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, 
	Input, Button, FormFeedback, Label, InputGroup, InputGroupAddon, Breadcrumb, BreadcrumbItem 
} from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './dashboard.module.scss';

import { Email, Assignment, Person, Group, Accessibility, Alarm, 
    Message, ArrowRight, ArrowDropDown, Home
} from '@styled-icons/material';

import DashboardLayout from "../../layouts/DashboardLayout";
import Titlebar from "../../components/Titlebar";
import UsersList from "../../components/UsersList";
import MyResponsiveBar from "../../components/MyChart";
import MyResponsivePie from "../../components/MyPieChart";



export default function Dashboard() {
	return (


		<DashboardLayout>
			<React.Fragment>
			
				<Titlebar title="Dashboard" crumb={["Home", "Dashboard"]}/>

			

				<UsersList />

			</React.Fragment>

		</DashboardLayout>

	)
}