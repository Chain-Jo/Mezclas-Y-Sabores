import { 
    Edit, 
    TextInput, 
    SimpleForm, 
    required, 
    ReferenceInput, 
    NumberInput, 
    SelectInput, 
    BooleanInput
} from "react-admin";

export const ChallengeEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput 
                    source="question" 
                    validate={[required()]} 
                    label="Pregunta" 
                />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <SelectInput 
                    source="type"
                    choices={[
                        {
                            id: "SELECCION",
                            name: "SELECCION",
                        },
                        {
                            id: "COMPLETAR",
                            name: "COMPLETAR",
                        },
                    ]}
                    validate={[required()]} 

                />
                <ReferenceInput 
                    source="lessonId"
                    reference="lessons"
                />
                <NumberInput 
                    source="orden"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
            </SimpleForm>
        </Edit>
    );
};