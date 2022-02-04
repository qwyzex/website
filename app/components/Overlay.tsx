const Overlay = (props: any) => {
	return (
		<div
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#000000e4',
                zIndex: 1
			}}
		></div>
	);
};

export default Overlay;
