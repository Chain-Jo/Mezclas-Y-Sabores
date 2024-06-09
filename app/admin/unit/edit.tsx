import { Edit, TextInput, SimpleForm, required, ReferenceInput, NumberInput } from "react-admin";

export const UnitEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <NumberInput 
                    source="id" 
                    validate={[required()]} 
                    label="Id" 
                />
                <TextInput 
                    source="title" 
                    validate={[required()]} 
                    label="Título" 
                />
                <TextInput 
                    source="description" 
                    validate={[required()]} 
                    label="Descripción" 
                />
                <ReferenceInput 
                    source="courseId"
                    reference="courses"
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