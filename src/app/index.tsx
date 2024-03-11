import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { INewsProps } from '../interfaces/INewsProps';
import api from '../services/api';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CardNews from '../components/CardNews';
import ContainerBadges from '../components/ContainerBadges';
import { editorialsMock } from '../mocks/editorials';
import { typesNewsMock } from '../mocks/typesNews';

import { useModal } from '../context/modalContexts';

export default function Page() {
    const { setOpen } = useModal()
    const [type, setType] = useState('noticias')
    const [editorials, setEditorials] = useState('todas')

    const { data: dataNews, isLoading, isFetching, refetch } = useQuery<INewsProps[]>({
        queryKey: ["stream-hydrate-users"],
        queryFn: () => getNews(),

    })

    const filterNews = (item: INewsProps) => {
        if (editorials === 'todas') return true;
        return editorials === item.editorias
    };


    const getNews = async () => {

        const { data, status } = await api.get(`?qtd=30&introsize=80&page=${1}&tipo=${type}`)

        if (status === 200) {
            let news: INewsProps[] = data.items

            news = news.map(item => {
                return {
                    ...item,
                    imagens: 'https://agenciadenoticias.ibge.gov.br/' + JSON.parse(item.imagens).image_intro
                }
            })

            return news
        } else {
            console.error("error fetching more posts")

            return []
        }

    }

    useEffect(() => {
        refetch()
    }, [type, editorials])

    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <View className='flex-1'>
            <View className='mt-3'>
                <ContainerBadges
                    array={typesNewsMock}
                    selected={type}
                    onPress={(text) => setType(text)}
                />
                <ContainerBadges
                    selected={editorials}
                    array={editorialsMock}
                    onPress={(text) => setEditorials(text)}
                />
            </View>
            {(isLoading || isFetching) ? (
                <View className='flex-1 justify-center items-center'>
                    <ActivityIndicator color='blue' size='large' />
                </View>
            ) : (
                <FlatList
                    data={dataNews.filter(filterNews)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardNews
                            key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            introducao={item.introducao}
                            data_publicacao={item.data_publicacao}
                            editorias={item.editorias}
                            imagens={item.imagens}
                            link={item.link}
                        />
                    )}
                    ListFooterComponent={() => (
                        <Text className='text-center text-gray-600 font-bold py-3'>
                            Noticias do Dia © 2024
                        </Text>
                    )}
                    ListEmptyComponent={() => (
                        <View>
                            <Text>Não há notícias</Text>
                        </View>
                    )}
                />
            )}

        </View>
    );
}