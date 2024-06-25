import { Edit, TextInput, SimpleForm, required, BooleanInput } from "react-admin";

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" validate={[required()]} label="Id" />
                <TextInput source="title" validate={[required()]} label="Título" />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <TextInput source="imageSrc" validate={[required()]} label="Imagen" />
            </SimpleForm>
        </Edit>
    );
};