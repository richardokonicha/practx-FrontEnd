import React, {useState} from 'react';
import styled from 'styled-components';
import { Dashboard, Email, Assignment, Person, Group, Accessibility, Alarm,
    Message, ArrowRight, ArrowDropDown,
} from '@styled-icons/material';


import {Nav, Navbar, NavItem, Button,Card, CardBody, CardHeader, CardTitle,
		CardText, CardFooter, Badge,Collapse, ListGroup, ListGroupItem,
} from 'reactstrap';

import Link from 'next/link';
import styles from "./RightSideProfile.module.scss";

const RightSideProfile = () => {
    return (
		<div className={styles.container}>
			<div className={styles.profilepic}>

				<img src="/images/users/avatar-5.jpg" />

				<h3>Dr Lina Oak</h3>

				<div className={styles.status}>
					<div className={styles.active}></div>
					<span>Active</span>
				</div>

			</div>

			<p>This is some text and text should be aligned properly to the left not centered or rightered lol</p>

			<Card className={styles.card}>

				<CardHeader className={styles.cardhead}>

						ABOUT ME

				</CardHeader>

				<CardBody className={styles.cardbody}>
					<CardText className={styles.cardtext}>

					<ListGroup className={styles.cardlist}>
						<ListGroupItem className={styles.liststyle}>
							<span>Email</span> <span>lina@practx.com</span>
						</ListGroupItem>

						<ListGroupItem className={styles.liststyle}>
							<span>Phone</span> <span>08064655310</span>
						</ListGroupItem>

						<ListGroupItem className={styles.liststyle}>
							<span>Member Since</span> <span>12 feb, 1856</span>
						</ListGroupItem>

					</ListGroup>

					</CardText>

				</CardBody>

			</Card>
		</div>

    )

}

export default RightSideProfile;
