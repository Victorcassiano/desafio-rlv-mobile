import { FormControl, Input as NativeInput, IInputProps } from 'native-base';

type InputProps = IInputProps & {
    errorMessage: string | null;
}
const Input: React.FC<InputProps> = ({ errorMessage = null, isInvalid, ...props }) => {
    const invalid = !!errorMessage || isInvalid;

    return (
        <FormControl isInvalid={invalid} mb={5}>
            <NativeInput
                fontSize='md'
                h={12}
                _focus={{
                    borderWidth: 1,
                    backgroundColor: 'white',
                    borderColor: '#3e63e7'
                }}
                cursorColor='#3e63e7'
                isInvalid={invalid}
                {...props}
            />
            <FormControl.ErrorMessage>
                {errorMessage}
            </FormControl.ErrorMessage>
        </FormControl>
    );
}

export default Input;