import React from 'react';
import { FlatList, View } from 'react-native';
import Badge from './Badge';

interface ContainerBadgesProps {
    onPress: (text: string) => void;
    array: any[];
    selected: string;
}

const ContainerBadges: React.FC<ContainerBadgesProps> = ({ array, selected, onPress }) => {

    return (

        <FlatList
            data={array}
            horizontal
            className='my-2 px-3'
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <Badge key={index}
                    selected={selected === item.filter}
                    text={item.title} onPress={() => onPress(item.filter)}
                />
            )}
            ItemSeparatorComponent={() => (<View className='w-2' />)}
            ListFooterComponent={() => <View className='w-6' />}
        />


    );
}

export default ContainerBadges;