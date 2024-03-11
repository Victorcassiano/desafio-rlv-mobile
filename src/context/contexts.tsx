import { createContext } from "react";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ModalProvider } from "./modalContexts";

const Contexts = createContext({});

export function ContextsProvider({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();

    return (
        <Contexts.Provider value={{}}>
            <QueryClientProvider client={queryClient}>
                <NativeBaseProvider>
                    <ModalProvider>
                        {children}
                    </ModalProvider>
                </NativeBaseProvider>
            </QueryClientProvider>
        </Contexts.Provider>
    );
}