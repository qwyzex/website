export interface LoadingTextProps {
	text?: string;
	light?: boolean;
}

const LoadingText = (props: LoadingTextProps) => {
	return (
		<h2
			style={{
				color: props.light ? '#f5f5f5' : '#202020',
			}}
		>
			{props.text ? props.text : 'Loading...'}
		</h2>
	);
};

export default LoadingText;
