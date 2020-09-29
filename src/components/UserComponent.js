
import { Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Button} from 'reactstrap';

import { Phone} from '@styled-icons/material';




export default function UserComponent() {
	return (


		<Card style={{backgroundColor: "#353c48", justifyContent:"center", margin: "10px"}}>

			<CardBody>

				<CardTitle className={"mb-4", "text-center"}>

					<img src="/images/users/avatar-1.jpg" style={{width: "100px", borderRadius:"50%", }}/>

				</CardTitle>

				<CardText className={"text-center"}>

					<h4 className={"text-primary"}>Dr Karen Patel</h4>
					<p> Cardiology</p>
					<address> A-103, Shyam gokul, Mahatma Road <br/>
					Mumbai </address>

					<Phone size={16} color="white"/> <span>(123)456-7890</span> <br/>
					<p className={"mt-2"}> <Button color="danger" danger rounded> Read More </Button></p>


				</CardText>							

			</CardBody>

		</Card>

	)
}
