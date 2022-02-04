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
    children: any
}

const FillText = (props: FillTextColors, { children }: any) => {
	return <span className={`filltext ${props.color}`}>{children}</span>;
};

export default FillText;
