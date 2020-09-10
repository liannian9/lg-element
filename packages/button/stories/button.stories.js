import LgButton from '../';

export default {
  title: 'Example/Button',
  component: LgButton,
};

export const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LgButton },
  template: '<lg-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
