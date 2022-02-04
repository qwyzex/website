export interface LoadingTextProps {
	text?: string;
	dark?: boolean;
}

const LoadingText = (props: LoadingTextProps) => {
	return (
		<h2
			style={{
				color: props.dark ? '#202020' : '#f5f5f5',
			}}
		>
			{props.text ? props.text : 'Loading...'}
		</h2>
	);
};

export default LoadingText;
