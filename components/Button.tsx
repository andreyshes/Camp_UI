"use client";
import Image from "next/image";
import React from "react";

type ButtonProps = {
	type: "button" | "submit";
	title: string;
	icon?: string;
	variant: string;
	full?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	to?: string;
};

const Button = ({
	type,
	title,
	icon,
	variant,
	full,
	onClick,
	to,
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={`flexCenter gap-3 rounded-full border ${variant} ${
				full && "w-full"
			}`}
			type={type}
		>
			{icon && <Image src={icon} alt={title} width={24} height={24} />}
			<label className="bold-16 whitespace-nowrap cursor-pointer">
				{title}
			</label>
		</button>
	);
};

export default Button;