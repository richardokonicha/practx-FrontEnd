import {useEffect, useState} from 'react';
import {Media} from 'reactstrap';

import styles from './Messageblob.module.scss';

import { Email, Phone } from '@styled-icons/material';


export default function Messageblob({ image, text, index, time}) {

    return index == 2 ?
	(
		<Media className={styles.chatmessage2}>

			<Media left href="#" className={styles.profilepic}>

				<img src={image} alt="Group thumbnail"/>

			</Media>

			<Media body>

				<div className={styles.message}>

						<span>
							{text}
						</span>

				</div>

				<span className={styles.messagetime}>
					{time}
				</span>
			</Media>


		</Media>

    )

	:(
		<Media className={styles.chatmessage1}>

			<div className={styles.floatMessageRight}>

				<div className={styles.message}>

						<span>
							{text}
						</span>

				</div>

				<span className={styles.messagetime}>
					{time}
				</span>
			</div>

			<Media left href="#" className={styles.profilepic}>

				<img src={image} alt="Group thumbnail"/>

			</Media>
		</Media>

    )
}
