import Head from 'next/head';
import {useEffect, useState} from 'react';
import { Container, Row, Col, Card, CardBody, FormGroup, Alert, Form, CardHeader,
    CardTitle, CardText, CardFooter,Input, Button, FormFeedback, Label, InputGroup,
    InputGroupAddon, Breadcrumb, BreadcrumbItem, ListGroup, ListGroupItem, Media
} from 'reactstrap';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import styles from './Chat.module.scss';

import { Email, Phone, Person, Group, Accessibility, Alarm, Search, MoreHoriz, MoreVert, EmojiEmotions, Image, Attachment,
        Message, ArrowRight, ArrowDropDown, Home, Repeat, Close, Send
} from '@styled-icons/material';

import DashboardLayoutUser from "../../../layouts/DashboardLayoutUser";
import ChatGroup from "../../../components/ChatGroup";
import Messageblob from "../../../components/Messageblob";
import RightSideProfile from "../../../components/RightSideProfile";



export default function Chat() {
    return (


        <DashboardLayoutUser>
            <React.Fragment>

                <Row noGutters sm="3" >

{/* ------------------------------ List of Groups AND members ----------------------------------- */}
                    <Col sm="3" className={styles.groupslist}>
						<h4 className={"text-light my-4"}>Groups</h4>

                    	<ChatGroup img="/images/users/avatar-5.jpg" />
						<ChatGroup img="/images/users/avatar-3.jpg" />
						<ChatGroup img="/images/users/avatar-7.jpg" />
						<ChatGroup img="/images/users/avatar-8.jpg" />
						<ChatGroup img="/images/users/avatar-5.jpg" />
						<ChatGroup img="/images/users/avatar-3.jpg" />
						<ChatGroup img="/images/users/avatar-7.jpg" />
						<ChatGroup img="/images/users/avatar-8.jpg" />
						<ChatGroup img="/images/users/avatar-5.jpg" />
						<ChatGroup img="/images/users/avatar-3.jpg" />
						<ChatGroup img="/images/users/avatar-7.jpg" />
						<ChatGroup img="/images/users/avatar-8.jpg" />
						<ChatGroup img="/images/users/avatar-5.jpg" />
						<ChatGroup img="/images/users/avatar-3.jpg" />
						<ChatGroup img="/images/users/avatar-7.jpg" />
						<ChatGroup img="/images/users/avatar-8.jpg" />

                    </Col>

{/* ------------------------------ Main Chat Box ----------------------------------- */}

                    <Col sm="6">
					<div >
						<div className={styles.chatboxtopbar}>
							<div>
								<img src="/images/users/avatar-4.jpg" />
								<span>Group name</span>
							</div>

							<div className={styles.icons}>
								<Search size={17} />
								<Person size={17}/>
								<MoreHoriz size={17}/>
							</div>
						</div>

						<div className={styles.chatbox}>

						<div style={{width:"100%"}}>


							<Messageblob
								text={"Are you getting your treatment \n in Nigeria"}
								image="/images/users/avatar-1.jpg"
								index={2} time="1min Ago"
							/>

							<Messageblob
								text={"No na... dont talk like that lol"}
								image="/images/users/avatar-2.jpg"
								index={1}  time="few Secs Ago"
							/>
							<Messageblob
								text={"I would advice against that"}
								image="/images/users/avatar-1.jpg"
								index={2}  time="1min Ago"
							/>
							<Messageblob
								text={"Even the president wont do that"}
								image="/images/users/avatar-1.jpg"
								index={2}  time="1min Ago"
							/>

							<Messageblob
								text={"LOL... stop it"}
								image="/images/users/avatar-2.jpg"
								index={1}  time="Small time Ago"
							/>


						</div>

						</div>
						<div className={styles.chatboxbottombar}>
							<Input style={{width: "70%", display:"inline"}}
								type="text"
								id="message"
								name="message"
								placeholder="Enter your message..."
							/>

							<div className={styles.icons}>
								<EmojiEmotions size={20} />
								<Attachment size={20} style={{transform:"rotate(-45deg)"}}/>
								<Image size={20}/>
								<Send size={20}/>
							</div>
						</div>


					</div>

                    </Col>

{/* ------------------------------Individual Profile right side pannel ----------------------------------- */}

                    <Col sm="3">

						<RightSideProfile />

                    </Col>


                </Row>




            </React.Fragment>

        </DashboardLayoutUser>

    )
}
