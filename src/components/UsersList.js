import React, {useState} from 'react';
import styled from 'styled-components';
import { Home, Email, Assignment, Person, Group, Accessibility, Alarm, 
    Message, ArrowRight, ArrowDropDown,
} from '@styled-icons/material';


import { Table, Row, Col, Label, Input, InputGroup, Button } from 'reactstrap';

import Link from 'next/link';
import styles from "./UsersList.module.scss";

const UsersList = ({title, crumb}) => {
  
    return (
        
        <div class={styles.tableresponsive}>
			<Table striped hover responsive dark bordered>
				<thead>
					<tr>
						<th>
							Select
						</th>
						<th>Patient Name</th>
						<th>Assigned Doctor</th>
						<th>Date</th>
						<th>Time</th>
						<th>Actions </th>
					</tr>
				</thead>
				<tbody>
					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>

					<tr >
						<td >
							hello
						</td>
						<td> Jayesh Patel </td>
						<td>
							<a href="mailto:shuxer@gmail.com"> Dr.Rajesh </a>
						</td>
						<td > 12/05/2016 </td>
						<td > 10:45 </td>
						<td >
							<div >
								<Button
									className="btn btn-xs btn-warning dropdown-toggle center no-margin"
									type="button" data-toggle="dropdown"
									aria-expanded="false"> Actions
									<i className="fa fa-angle-down"></i>
								</Button>
								<ul className="dropdown-menu pull-left" role="menu">
									<li>
										<a href="javascript:;"><i className="fa fa-trash-o"></i>
											Delete </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-ban"></i>
											Cancel </a>
									</li>
									<li>
										<a href="javascript:;"><i className="fa fa-clock-o"></i>
											Postpone </a>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					
					
				</tbody>
			</Table>
		</div>

    );
  
}

export default UsersList;



				




