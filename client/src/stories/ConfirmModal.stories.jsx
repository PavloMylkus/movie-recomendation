import React from 'react';
import { ConfirmModal } from '../components'



export default {
	title: 'Modal/ConfirmModal',
	component: ConfirmModal
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	open: false,
	title: 'My favorite movies',
	url: 'http://http://localhost:3000/recommend?title="my movvies"&ids=254,5558',
	onClose: () => { }
};