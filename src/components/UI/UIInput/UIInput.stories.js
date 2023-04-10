import { useState } from "react";
import UIInput from "./UIInput";

export default{
  title: 'UI-Kit/UIInput',
  component: UIInput
};

const Template = arg => {
  const [value, setValue] = useState('');

  const handleInputChange = value =>{
    setValue(value);
  }

  return (
    <UIInput 
      {...arg}
      value={value}
      handleInputChange={handleInputChange}
    />
  )
}

const props = {
  value: '',
  handleInputChange: ()=> console.log('Input Change'),
  placeholder: 'placeholder',
  classes: ''
}

export const Default = Template.bind({});

Default.args = {
  ...props
};