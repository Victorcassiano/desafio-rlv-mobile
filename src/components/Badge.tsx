import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface BadgeProps extends TouchableOpacityProps {
    text: string;
    selected: boolean;
}

const Badge: React.FC<BadgeProps> = ({ text, selected, ...props }) => {
    return (
        <TouchableOpacity className={` ${selected ? 'bg-blue-600' : 'bg-gray-500'} rounded-3xl p-2`}
            activeOpacity={0.8}
            {...props}
        >
            <Text className='text-white font-bold'>{text}</Text>
        </TouchableOpacity>
    );
}

export default Badge;