import { useRef } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { ButtonIcon } from "@ui/custom/ButtonIcon/ButtonIcon";
import { Title } from "@ui/custom/Title/Title";
import { Input } from "@ui/custom/Input/Input";
import { Modal } from "@ui/custom/Modal/Modal";
import { InputMinimum } from "@ui/custom/InputMinimum/InputMinimum";

import { RiCloseLine } from "react-icons/ri";
// import { FiPlus } from "react-icons/fi";

export function App() {
	const [isModalOpen, setIsModalOpen] = useState(true);
	const inputRef = useRef<HTMLInputElement>(null);
	const minimumRef = useRef<HTMLInputElement>(null);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<Outlet />
			<Input ref={inputRef} name="amount" placeholder="Amount" type="number" />
			<Title>Add Transaction</Title>
			<ButtonIcon Icon={RiCloseLine} form="pill" variant="red" />
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				Lorem ipsum dolor sit amet,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias animi corporis at quia quis dicta qui vitae
				nobis provident porro?
			</Modal>
			<InputMinimum ref={minimumRef} name="description" type="text" placeholder="description" />
			<InputMinimum ref={minimumRef} name="minimum" type="number" placeholder="0.00 грн" />
		</div>
	);
}
