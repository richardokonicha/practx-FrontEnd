
import { Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Button} from 'reactstrap';

import { Phone} from '@styled-icons/material';




export default function UserComponent({practice, approve, reject}) {


	return (


		<Card style={{backgroundColor: "#353c48", justifyContent:"center", margin: "10px"}}>

			<CardBody>

				<CardTitle className={"mb-4", "text-center"}>

					<img src="/images/users/avatar-1.jpg" style={{width: "100px", borderRadius:"50%", }}/>

				</CardTitle>

				<CardText className={"text-center"}>

					<h4 className={"text-primary"}>{ practice.practiceName}</h4>
					<p> { practice.specialty }</p>
					<address> {practice.address} </address>

					<Phone size={16} color="white"/> <span> {practice.mobileNo} </span> <br/>
					<p className={"mt-2"}> 

						{
							practice.approvalStatus === "approved" ? (<Button color="success" danger rounded> Approved </Button>)
							: (<Button color="danger" danger rounded onClick={()=>approve(practice.id)} > Click to Approve Practice </Button>)

						}
						<Button color="danger" danger rounded onClick={()=>reject(practice.id)} > Reject </Button>
					</p>


				</CardText>							

			</CardBody>

		</Card>

	)
}
