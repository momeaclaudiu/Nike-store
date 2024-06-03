interface SidebarProps {
	children: JSX.Element
	isOpen: boolean
	onClickClose: () => void
}

const Sidebar = ({ children, isOpen, onClickClose }: SidebarProps) => {
	return (
		<div>
			<div
				className={`dark:bg-night overflow-y-auto z-50 fixed top-0 right-0 p-5 h-full w-full md:w-[55%] lg:w-[45%] xl:w-[35%] bg-white shadow-lg transition transform duration-300 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					onClick={onClickClose}
					className="absolute right-4 top-4 p-2 text-black font-bold dark:text-white"
				>
					X
				</button>
				{children}
			</div>
			{isOpen && (
				<div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50" />
			)}
		</div>
	)
}

export default Sidebar
