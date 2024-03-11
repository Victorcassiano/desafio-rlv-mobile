import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { View } from "react-native";
import { formSchema, FormData } from "./scheme";
import Input from "../Input";
import { Button } from "native-base";
import { useModal } from "../../context/modalContexts";
import { useToast } from 'native-base';


const Form = () => {
    const { setOpen } = useModal()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const toast = useToast();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),

    });



    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true)
        console.log(data)

        setTimeout(() => {
            setOpen(false)
            toast.show({
                description: "Agora você receberá via e-mail as notícias mais recentes!",
            })
            setIsSubmitting(false)
        }, 2500)
    };


    return (
        <View>
            <Controller
                control={control}
                name="email"
                rules={{ required: 'E-email obrigatório!' }}
                render={({ field: { onChange } }) => (
                    <Input
                        errorMessage={errors.email?.message}
                        placeholder="E-mail"
                        onChangeText={onChange}
                    />
                )}
            />
            <Button
                isLoading={isSubmitting}
                isLoadingText="Enviando"
                bgColor="#3e63e7"
                mb={4}
                onPress={handleSubmit(onSubmit)}
            >
                Inscrever-se
            </Button>
            <Button
                colorScheme="red"
                onPress={() => setOpen(false)}
                variant='outline'
            >
                Cancelar
            </Button>
        </View>

    );
};

export default Form;


