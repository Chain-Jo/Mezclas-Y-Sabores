import { 
    Create, 
    TextInput, 
    SimpleForm, 
    required, 
    ReferenceInput, 
    NumberInput, 
    SelectInput, 
    BooleanInput
} from "react-admin";

export const ChallengeCreate = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput 
                    source="pregunta" 
                    validate={[required()]} 
                    label="Pregunta" 
                />
                <BooleanInput 
                    source="activo"
                    label="Activo"
                />
                <SelectInput 
                    source="tipo"
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
        </Create>
    );
};