import { Create, TextInput, SimpleForm, required, ReferenceInput, NumberInput } from "react-admin";

export const RecipeCreate = () => {
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
                <ReferenceInput 
                    source="unitId"
                    reference="units"
                />
                <TextInput 
                    source="imageSrc"
                    validate={[required()]}
                    label="URL de la Imagen"
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