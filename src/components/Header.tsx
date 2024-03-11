import { View, Text, StatusBar } from 'react-native';

const Header = () => {
    const marginTop = StatusBar.currentHeight

    return (
        <View
            style={{ marginTop: marginTop - 8 }}
            className={`h-12 bg-gray-200 justify-center items-start px-3`}
        >
            <Text className='text-black font-bold text-lg'>Noticias do dia</Text>
        </View>
    );
}

export default Header;