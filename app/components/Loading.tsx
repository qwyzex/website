import { SpinnerDotted } from 'spinners-react';
import Overlay from './Overlay';

const Loading = (props: any) => {
	return (
		<>
			{props.page && <Overlay />}
			<div
				style={{
					position: props.fixed
						? 'absolute'
						: props.page
						? 'fixed'
						: 'static',
					top: props.fixed && '50%',
					left: props.fixed && '50%',
					transform: props.fixed && 'translate(-50%, -50%)',
					zIndex: '9',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '0.5rem',
				}}
			>
				<SpinnerDotted
					size={60}
					speed={160}
					color={props.diff ? 'var(--pending)' : '#ffffff'}
				/>
				{props.text && (
					<h3
						style={{
							color: props.diff ? 'var(--pending)' : '#ffffff',
						}}
					>
						{props.message ? props.message : 'Loading...'}
					</h3>
				)}
			</div>
		</>
	);
};

export default Loading;
