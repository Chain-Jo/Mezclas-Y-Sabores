import { Create, TextInput, SimpleForm, required, BooleanInput } from "react-admin";

export const CourseCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="titulo" validate={[required()]} label="Título" />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <TextInput source="enlace_imagen" validate={[required()]} label="Imagen" />
            </SimpleForm>
        </Create>
    );
};