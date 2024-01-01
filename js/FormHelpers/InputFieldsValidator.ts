type IInputFieldsValidator = {
    fomrInputFields: any, gettingInputFields: any, currentData: any
}

export const InputFieldsValidator = ({ fomrInputFields, gettingInputFields, currentData }: IInputFieldsValidator) => {
    let data: { [key: string]: any } = {};
    for (const fomrInputField of fomrInputFields) {
        for (const gettingInputField of gettingInputFields) {
            if (fomrInputField === gettingInputField) {
                // console.log("allValidInputFilds", fomrInputField);
                if (!currentData[fomrInputField]) {
                   continue
                }
                data[fomrInputField] = currentData[fomrInputField];

            }
        }
    }
    
    return data;
}