export interface FillTextColors {
	color:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'accent'
		| 'orange'
		| 'purple'
		| 'pink';
	children?: any
}

const FillText = (props: FillTextColors) => {
	return <span className={`filltext ${props.color}`}>{props.children}</span>;
};

export default FillText;
