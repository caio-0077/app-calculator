import React from 'react'
import Button from '../../../components/Button';

export type Props = {
  item: {
    icon: boolean;
    content: string;
    colorText: string;
    color: string;
  };
};

const RenderItem: React.FC<Props> = ({ item, handleChange }) => {
  return (
    <Button
      onPress={() => handleChange(item.value)}
      icon={item.icon}
      content={item.content}
      colorText={item.colorText}
      color={item.color}
    />
  )
}
export default RenderItem