import Head from 'next/head';
import Link from 'next/link';

import {useEffect, useState} from 'react';
import { Container, Row, Col, Button, Spinner} from 'reactstrap';
import useSWR from 'swr';
import * as Api from '../../../redux/Api.js';
import {useSelector, connect} from 'react-redux';


import { Phone } from '@styled-icons/material';

import DashboardLayout from "../../../layouts/DashboardLayout";
import Titlebar from "../../../components/Titlebar";
import UserComponent from "../../../components/UserComponent";



function GroupList(props) {

	const [loading, setLoading] = useState(false);

	const [practicesList, setPracticesList] = useState([]);



	const { data, error } = useSWR(['http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices', props.user.token ], Api.getPractice)
	
	if (error) return <div>failed to load</div>

	const approvePractice = async (id) =>{
		const url = "http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/" + id ;
		const approvedData = await Api.rejectPractice(url, props.user.token);
		console.log("Trying to approve practice", url, approvedData)
	}

	const rejectPractice = async (id) =>{
		const url = "http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/" + id ;
		const rejectData = await Api.rejectPractice(url, props.user.token);
		console.log("Rejected Practice ------------------", rejectData)
	}


	const approvedPractices = ()=>{
		const approved = practicesList.filter((practice) => practice.approvalStatus === "approved");
		setPracticesList(approved);
	}

	const unapprovedPractices = ()=>{
		setPracticesList(data.practices.rows);
	}

	useEffect(()=>{

		if(!data){

			console.log(data);

		}else{

			setPracticesList(data.practices.rows);
		}

	}, [data])

	return (


		<DashboardLayout>
		{
			!data ? (
				<Spinner color="light" 
					style={{
						width:"400px", 
						height:"400px", 
						position:"absolute", 
						zIndex:"1000",
					}} 
				/>
			)
			:(
				<React.Fragment>

					{loading && (
							<Spinner color="dark" 
								style={{
									width:"400px", 
									height:"400px", 
									position:"absolute", 
									zIndex:"1000",
								}} 
							/>
						)
					}


					<Row>
						<Col>

							<Titlebar title="Group List" crumb={["Home", "Group", "Group list"]}/>
							
						</Col>
					</Row>

					<Row>
						<Col>

							<Button onClick={approvedPractices} > Approved Practices </Button>
							
						</Col>
						<Col>

							<Button onClick={unapprovedPractices} > Not yet Approved Practices </Button>
							
						</Col>
					</Row>

					
					<Row className={"mt-3"} sm="4">

						{!error && practicesList.map((practice) => <UserComponent practice={practice} key={practice.id} approve={approvePractice} reject={rejectPractice} />)}

					</Row>
				
					

					
					

				</React.Fragment>
			)
		}
			

		</DashboardLayout>

	)
}



function mapStateToProps(state) {
  const { user } = state.auth
  return { user: user }
}



export default connect(mapStateToProps, null)(GroupList);