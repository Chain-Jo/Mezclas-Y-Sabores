import { Edit, TextInput, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

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
                    source="titulo" 
                    validate={[required()]} 
                    label="Título" 
                />
                <TextInput 
                    source="descripcion" 
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
                    source="orden"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
            </SimpleForm>
        </Edit>
    );
};