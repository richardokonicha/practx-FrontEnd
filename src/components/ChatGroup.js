import {  Media, Badge } from 'reactstrap';

import Link from 'next/link';
import styles from './chatgroup.module.scss';

import { Email} from '@styled-icons/material';


const ChatGroup = ({img}) => {

	return (
		<Media className={styles.mediabox}>

			<Media left href="#">

				<img src={img} alt="Group thumbnail" className={styles.mediaImage}/>

			</Media>

			<Media body>
				<div className={styles.mediaheading}>

					<h5>
					  Media heading
					</h5>

					<span> 1:00pm </span>

				</div>
				<div className={styles.mediaheading}>

					<div className={styles.text}>
						Donec lacinia congue felis in
					</div>

					<Badge color="danger" className={styles.badge}> 7 </Badge>
				</div>
			</Media>
		</Media>
	)
}

export default ChatGroup;
