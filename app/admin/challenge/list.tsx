import { BooleanField, Datagrid, List, NumberField, ReferenceField, SelectField, TextField } from "react-admin";

export const ChallengeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="pregunta"/>
                <BooleanField source="activo"/>
                <SelectField 
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
                />
                <ReferenceField source="lessonId" reference="lessons"/>
                <NumberField source="orden"/>
            </Datagrid>
        </List>
    );
};