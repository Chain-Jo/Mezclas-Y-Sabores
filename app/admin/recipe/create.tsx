import { Create, TextInput, SimpleForm, required, ReferenceInput, NumberInput, BooleanInput } from "react-admin";

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
                <NumberInput 
                    source="order"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
                <NumberInput 
                    source="unidad_referenciada"
                    validate={[required()]}
                    label="Ref. Unidad"
                    min='1'
                />
            </SimpleForm>
        </Create>
    );
};