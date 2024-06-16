import { IoIosArrowDown } from "react-icons/io"
import { twMerge } from "tailwind-merge"

interface SelectProps {
	value: number | null
	onChange?: (value: number) => void
	title: string
	options: number[]
	className?: string
}

const Select = ({
	title,
	options,
	className,
	value,
	onChange = () => null,
}: SelectProps) => {
	return (
		<div className="relative dark:text-black">
			<select
				onChange={(e) => onChange(+e.target.value)}
				value={value || ""}
				className={twMerge(
					`w-24 appearance-none border border-gray-300 p-4 bg-white ${className}`
				)}
			>
				<option value="" disabled hidden>
					{title}
				</option>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>

			<div className="pointer-events-none absolute inset-y-0 right-0 flex-center pr-3">
				<IoIosArrowDown />
			</div>
		</div>
	)
}

export default Select
