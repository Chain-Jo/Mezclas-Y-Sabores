import { Create, TextInput, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

export const UnitCreate = () => {
    return (
        <Create>
            <SimpleForm>
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
                <BooleanInput 
                    source="activo"
                    label="Activo"
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
        </Create>
    );
};