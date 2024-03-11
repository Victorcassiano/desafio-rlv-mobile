import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { INewsProps } from '../interfaces/INewsProps';
import * as Linking from 'expo-linking';
import moment from "moment";

const CardNews: React.FC<INewsProps> = ({ titulo, introducao, editorias, data_publicacao, imagens, link }) => {

    return (
        <View className="border border-gray-400 rounded-md relative h-auto flex flex-col my-2 mx-3">
            <View className="grid gap-4 grid-cols-1 flex-grow p-5">
                <View className="flex items-center justify-start">
                    <Image
                        className="w-full h-32 rounded-lg"
                        source={{ uri: imagens }}
                    />
                </View>
                <View className="space-y-2">
                    <Text className="text-base font-bold tracking-tighter">
                        {titulo}
                    </Text>
                    <Text>
                        {introducao}
                    </Text>
                    <View className="flex items-start gap-2">
                        <Text className="text-xs text-gray-500 dark:text-gray-400">
                            Editorias: {editorias.toLocaleUpperCase()}
                        </Text>
                        <Text className="text-xs text-gray-500 dark:text-gray-400">
                            Publicação: {moment(data_publicacao, 'DD/MM/YYYY HH:mm:ss').format('DD [de] MMMM, YYYY')}
                        </Text>
                    </View>
                </View>
            </View>
            <View className="p-5">
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="inline-flex items-center underline-offset-2 underline-thickness-2 text-sm font-medium underline bg-blue-600 p-2 rounded-md"
                    onPress={() => Linking.openURL(link)}
                >
                    <Text className='text-white' >
                        Leia mais
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CardNews;