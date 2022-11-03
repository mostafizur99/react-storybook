import ButtonDefault from "../../ui/Atoms/Buttons/ButtonDefault";


export default {
    title: 'Atoms/Buttons',
    component: ButtonDefault,
};

const Template = (args) => <ButtonDefault {...args} />;

export const ButtonsDefaullt = Template.bind({});
ButtonsDefaullt.args = {
    variant: 'primary',
};