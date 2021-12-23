const ProgressBar = ({ progress }) => {
	return (
		<div className="w-1/4">
			<div className="w-full bg-gray-600 rounded-full h-4 dark:bg-gray-500">
				<div
					className="bg-gray-200 h-4 rounded-full transition-all ease-in-out"
					style={{ width: `${progress}%`, maxWidth: "100%" }}
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
