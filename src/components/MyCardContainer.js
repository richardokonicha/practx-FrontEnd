
import { Card, CardBody, CardHeader, CardTitle, CardText, CardFooter, Button} from 'reactstrap';

import { ArrowDropDown, Repeat, Close} from '@styled-icons/material';




export default function MyCardContainer({children, headingText, buttonText}) {
	return (


		<Card style={{backgroundColor: "#353c48"}}>

			<CardHeader style={{fontSize: "1.3em", fontWeight: "bold", backgroundColor: "#353c48", borderBottomWidth: "1px", borderBottomColor: "#999999"}}> 
				
				{headingText} 

				<span style={{float: "right"}}>
					<Repeat size={12} />
					<ArrowDropDown size={24} />
					<Close size={12} />
				</span>

			</CardHeader>

			<CardBody  >

				{buttonText && <CardTitle className={"mb-4"}><Button>{buttonText}</Button></CardTitle>}

				<CardText>

					{children}


				</CardText>							

			</CardBody>

		</Card>

	)
}
