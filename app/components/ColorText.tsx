export interface ColorTextProps {
    children?: any,
	ex?: 'react' | 'nodejs' | 'remix' | 'babel' | 'javascript' | 'fireship' | 'accent';
	bold?: boolean;
}

const ColorText = (props: ColorTextProps, {children}: any) => {
	return (
		<span
			style={{
				color:
					props.ex === 'react'
						? '#238fd6'
						: props.ex === 'remix'
						? '#ff2970'
						: props.ex === 'nodejs'
						? 'yellowgreen'
						: props.ex === 'babel'
						? '#f3f644'
						: props.ex === 'fireship'
						? '#e23232'
						: props.ex === 'accent'
						? '#ff003c'
						: '#ffffff',
				fontWeight: props.bold ? 'bold' : 'normal',
			}}
		>
			{children}
		</span>
	);
};

export default ColorText;
