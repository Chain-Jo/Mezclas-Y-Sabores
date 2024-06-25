import { 
    Create, 
    TextInput, 
    SimpleForm, 
    required, 
    ReferenceInput, 
    BooleanInput
} from "react-admin";

export const ChallengeOptionCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput 
                    source="text" 
                    validate={[required()]} 
                    label="Texto" 
                />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <BooleanInput 
                    source="correct"
                    label="Opción correcta"
                />
                <ReferenceInput 
                    source="challengeId"
                    reference="challenges"
                />
                <TextInput 
                    source="imageSrc"
                    // validate={[required()]}
                    label="URL de la Imagen"
                />
            </SimpleForm>
        </Create>
    );
};