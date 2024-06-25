import { 
    Edit, 
    TextInput, 
    SimpleForm, 
    required, 
    ReferenceInput, 
    BooleanInput
} from "react-admin";

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
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
                    label="Opción Correcta"
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
        </Edit>
    );
};