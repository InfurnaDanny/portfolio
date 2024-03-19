import { useRef } from 'react';
import Image from 'next/image';
import Skills from './(Skills)';

import LeftDoor from './../assets/left-door.jpg';
import RightDoor from './../assets/right-door.jpg';
import DoorStyle from './../styles/components-style/skills.module.css';

function Doors() {
	const doorsContainer = useRef<HTMLDivElement>(null); // container delle porte

	let multiplyerDoorLeft: number = 0; // moltiplicatore per il ritardo dell'apertura/chiusura
	let multiplyerDoorRight: number = 0; // moltiplicatore per il ritardo dell'apertura/chiusura

	// controllo se le porte sono da aprire o chiudere
	function openDoor() {
		const doors: HTMLCollection = doorsContainer.current?.children!;
		const doorsArray: Element[] = Array.from(doors);

		let left_door: Element[] = [];
		let right_door: Element[] = [];

		for (const door of doorsArray) {
			if (door.getAttribute('alt') === 'left-door') {
				left_door.push(door);
			} else right_door.push(door);
		}

		if ((multiplyerDoorLeft || multiplyerDoorRight) !== 0) {
			closeDoors(left_door, right_door);
		} else openDoors(left_door, right_door);
	}

	// apro le porte con un ritardo per ogni porta
	function openDoors(left_door: Element[], right_door: Element[]) {
		right_door.reverse();
		for (let i = left_door?.length - 1; i >= 0; i--) {
			setTimeout(() => {
				(left_door[i] as HTMLElement).style.transform = 'translate(-550px)';
			}, multiplyerDoorLeft * 200);
			setTimeout(() => {
				(right_door[i] as HTMLElement).style.transform = 'translate(550px)';
			}, multiplyerDoorRight * 200);

			multiplyerDoorLeft++;
			multiplyerDoorRight++;
		}
	}
	// chiudo le porte con un ritardo per ogni porta
	function closeDoors(left_door: Element[], right_door: Element[]) {
		multiplyerDoorLeft = 0;
		multiplyerDoorRight = 0;

		left_door.reverse();

		for (let i = left_door?.length - 1; i >= 0; i--) {
			setTimeout(() => {
				(left_door[i] as HTMLElement).style.transform = 'translate(0px)';
			}, multiplyerDoorLeft * 200);
			setTimeout(() => {
				(right_door[i] as HTMLElement).style.transform = 'translate(0px)';
			}, multiplyerDoorRight * 200);

			multiplyerDoorLeft++;
			multiplyerDoorRight++;
			console.log(multiplyerDoorLeft, multiplyerDoorRight);
		}

		multiplyerDoorLeft = 0;
		multiplyerDoorRight = 0;
	}

	return (
		<section className={DoorStyle.door_section} onClick={openDoor}>
			<div className={DoorStyle.doors} ref={doorsContainer}>
				<Image
					src={LeftDoor}
					className={DoorStyle.door_left}
					style={{ zIndex: '1' }}
					alt="left-door"
				/>
				<Image
					src={LeftDoor}
					className={DoorStyle.door_left}
					style={{ zIndex: '2' }}
					alt="left-door"
				/>
				<Image
					src={LeftDoor}
					className={DoorStyle.door_left}
					style={{ zIndex: '3' }}
					alt="left-door"
				/>
				<Image
					src={RightDoor}
					className={DoorStyle.door_right}
					style={{ zIndex: '3' }}
					alt="right-door"
				/>
				<Image
					src={RightDoor}
					className={DoorStyle.door_right}
					style={{ zIndex: '2' }}
					alt="right-door"
				/>
				<Image
					src={RightDoor}
					className={DoorStyle.door_right}
					style={{ zIndex: '1' }}
					alt="right-door"
				/>
			</div>
			<Skills />
		</section>
	);
}

export default Doors;
