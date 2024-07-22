import { Edit, TextInput, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

export const LessonEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput 
                    source="titulo" 
                    validate={[required()]} 
                    label="Título" 
                />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <BooleanInput 
                    source="prueba"
                    label="Prueba"
                />
                <ReferenceInput 
                    source="unitId"
                    reference="units"
                />
                <NumberInput 
                    source="orden"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
            </SimpleForm>
        </Edit>
    );
};