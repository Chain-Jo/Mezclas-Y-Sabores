import { Edit, TextInput, SimpleForm, required, BooleanInput } from "react-admin";

export const CourseEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="id" validate={[required()]} label="Id" />
                <TextInput source="title" validate={[required()]} label="Título" />
                <TextInput source="imageSrc" validate={[required()]} label="Imagen" />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
            </SimpleForm>
        </Edit>
    );
};