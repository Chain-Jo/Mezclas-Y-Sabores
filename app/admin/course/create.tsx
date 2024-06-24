import { Create, TextInput, SimpleForm, required, BooleanInput } from "react-admin";

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Título" />
                <TextInput source="imageSrc" validate={[required()]} label="Imagen" />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
            </SimpleForm>
        </Create>
    );
};