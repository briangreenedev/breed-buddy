
import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

const icons = {
	puppies: [
		'M612,206.64c.22-28.81-8.18-54.12-25-75.23-8.46-10.64-17.16-21.29-25.58-31.59l-6.63-8.13q-7-8.52-13.89-17.09c-12-14.85-24.5-30.21-37-45.06C488.17,10.83,468,.64,445.44.07q-1.08,0-2.16,0C415.14,0,391.82,13.71,374,40.68c-22.44-10.12-45.15-15.25-67.55-15.25-3.73,0-7.51.14-11.25.42-18.93,1.41-37.51,6.2-56.74,14.64C220.41,14,197.37.42,170,0h-1.21C145.18,0,124,10.58,107.33,30.6l-3.58,4.3C77.44,66.58,50.24,99.34,24.34,132.7c-19,24.51-27.51,57-23.27,89.16,4,30.35,18.91,57.22,40.88,73.7,6.65,5,13.86,8.31,20.83,11.52,1.19.55,2.4,1.1,3.61,1.67-3.3,26.36-3.54,50.48-.75,73.66,7.5,62.44,36.61,109.34,86.52,139.43,22.82,13.76,49,23.18,82.36,29.66l1.11.21.14,0c0,.22.06.41.1.64,8,49.11,64.26,75.46,99.79,50.78,16.52-11.48,36.66-28.6,40.83-51.54l.17,0h0c30.76-5.62,56.9-14.68,79.92-27.7,25.74-14.56,45.68-33.2,60.95-57,25-38.86,34.65-86.61,29.62-146-.36-4.21-.76-8.44-1.15-12.56C584.19,296.6,611.62,254.83,612,206.64ZM558.21,228c-5.62,14.18-16,23.9-28.43,26.65a18.93,18.93,0,0,1-3.41.26L525,255h-.28c-11.16,0-19.81-4.21-27.23-13.26l-.3-.37c-26.66-32.5-54.22-66.1-81-99.55-12.13-15.17-15.21-33-9.16-53.11,5.8-19.25,17.16-30,33.77-31.87a28.83,28.83,0,0,1,3.19-.18c10,0,19.42,5.67,28.84,17.35,11.71,14.51,23.67,29.19,35.24,43.38q13.33,16.36,26.64,32.75c1.49,1.84,3,3.66,4.51,5.49a208.77,208.77,0,0,1,13.85,18C563.38,189.2,565.34,210,558.21,228ZM330.82,457.36c-.23-7,.83-9,4.33-11.79a44.35,44.35,0,0,0,16.34-34.63,47.15,47.15,0,0,0-17-36.94,44.31,44.31,0,0,0-28.37-10.51,44.83,44.83,0,0,0-27.83,9.94c-11.09,8.7-17.57,22.82-17.32,37.76s6.88,28.11,18.19,36.37c2,1.45,2.65,1.94,2.53,5.95-.31,10.37-.25,20.85-.2,31q0,7.26,0,14.52c0,.24,0,.48,0,.73-46-2.28-80.19-11.82-110.3-30.65C148,454.56,132,434.55,122.4,407.92a156.22,156.22,0,0,1-8.82-53.3c0-14,.26-30.23,2.89-45.73a12.12,12.12,0,0,1,.78-3.07,3.87,3.87,0,0,1,.44-.19c11.91-4.43,22.63-12.41,31.87-23.73l16.68-20.43c21.74-26.62,44.22-54.14,66.2-81.41,19.2-23.83,27.3-52.95,24.06-86.57,16.62-7.54,32.87-11.21,49.62-11.21l1.63,0a115.24,115.24,0,0,1,47.66,11.12c0,.18-.1,1.45-.1,1.45-2.29,32.72,5.25,60.44,22.4,82.39C390.1,193.11,403,208.82,415.41,224q7.86,9.6,15.7,19.23,5.77,7.09,11.55,14.16c6,7.34,12.18,14.92,18.22,22.42C471,292.32,482.53,301.11,495.32,306c5.18,34.56,4.84,62.23-1.06,87.06-7,29.54-22.07,53.15-44.75,70.19-19.8,14.87-42.72,24.73-70.08,30.14-11.88,2.35-24.3,3.7-36.31,5-4,.43-8.09.88-12.17,1.36v-2.56c0-3.9,0-7.79.05-11.69C331.06,476.28,331.13,466.78,330.82,457.36ZM59.09,173.5a73.44,73.44,0,0,1,5.51-7.57Q79,148.23,93.38,130.56C108.45,112.06,124,92.92,139.32,74c9.41-11.64,18.77-17.29,28.62-17.29h.85c17.14.53,29.14,10.57,35.67,29.84,6.86,20.27,4.25,38.89-7.55,53.86-23.31,29.57-47.56,59.06-71,87.58L113.85,242.7c-6.13,7.47-13.49,12.09-31.2,12.09h-.72c-8.17-.55-20.28-7.93-27.86-27C46.64,209.09,48.33,190.83,59.09,173.5ZM308,577.51c-11.12.94-28.52-8.26-35.58-21.62a382.61,382.61,0,0,0,68.08,0C335.39,568.53,319.42,576.55,308,577.51Z',
		'M157.75,384.2a30.62,29.48 0 1,0 61.24,0a30.62,29.48 0 1,0 -61.24,0',
		'M398.99,384.49a30.62,29.48 0 1,0 61.24,0a30.62,29.48 0 1,0 -61.24,0']
};

const useStyles = makeStyles({
	svg: {
		fill: 'currentColor',
		height: '1em',
		width: '1em',
		display: 'inline-block',
		fontSize: '1.5rem',
		transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		flexShrink: '0',
		userSelect: 'none',
	}
})

const CustomIcon = props => {
	const classes = useStyles()
	return (
		<svg className={classes.svg} viewBox="-50 -50 700 700">
			{
				icons[props.icon].map(d =>
					(<path d={d}></path>))
			}
		</svg>
	)
};

export default CustomIcon;