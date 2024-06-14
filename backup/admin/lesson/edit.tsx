import { Edit, TextInput, SimpleForm, required, ReferenceInput, NumberInput } from "react-admin";

export const LessonEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput 
                    source="title" 
                    validate={[required()]} 
                    label="Título" 
                />
                <ReferenceInput 
                    source="unitId"
                    reference="units"
                />
                <NumberInput 
                    source="order"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
            </SimpleForm>
        </Edit>
    );
};