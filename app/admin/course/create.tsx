import { Create, TextInput, SimpleForm, required, BooleanInput } from "react-admin";

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title" validate={[required()]} label="Título" />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <TextInput source="imageSrc" validate={[required()]} label="Imagen" />
            </SimpleForm>
        </Create>
    );
};