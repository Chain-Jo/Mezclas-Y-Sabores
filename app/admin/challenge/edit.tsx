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
                            id: "SELECT",
                            name: "SELECT",
                        },
                        {
                            id: "ASSIST",
                            name: "ASSIST",
                        },
                    ]}
                    validate={[required()]} 

                />
                <ReferenceInput 
                    source="lessonId"
                    reference="lessons"
                />
                <NumberInput 
                    source="order"
                    validate={[required()]}
                    label="Orden"
                    min='1'
                />
            </SimpleForm>
        </Edit>
    );
};