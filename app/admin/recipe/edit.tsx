import { Edit, TextInput, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

export const RecipeEdit = () => {
    return (
        <Edit>
            <SimpleForm>
            <TextInput 
                    source="title" 
                    validate={[required()]} 
                    label="Título" 
                />
                <TextInput 
                    source="link" 
                    validate={[required()]} 
                    label="Link" 
                />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <ReferenceInput 
                    source="unitId"
                    reference="units"
                />
            </SimpleForm>
        </Edit>
    );
};