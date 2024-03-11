import { createContext, useContext, useState } from "react";
import { Modal, StyleSheet, Text, View } from 'react-native';
import Form from "../components/Form";
import { Image } from "native-base";
import IconNews from '../assets/icon-news.png'

interface ModalProps {
    setOpen: (value: boolean) => void;
}

const ModalContexts = createContext({} as ModalProps);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false)

    return (
        <ModalContexts.Provider value={{ setOpen }}>
            {children}

            <Modal
                animationType="slide"
                transparent={false}
                visible={open}
            >
                <View
                    className="flex-1 w-full bg-white px-3 pt-16"
                >
                    <Text
                        className="text-lg font-bold self-center"
                    >
                        Receba as últimas notícias por e-mail
                    </Text>
                    <Image
                        alt="icon-news"
                        source={IconNews}
                        className="w-64 h-64 self-center"
                    />
                    <Form />


                </View>
            </Modal>
        </ModalContexts.Provider>
    );
}

export function useModal(): ModalProps {
    return useContext(ModalContexts);
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'red'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',

        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});