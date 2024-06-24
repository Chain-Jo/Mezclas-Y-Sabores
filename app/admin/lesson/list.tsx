import { Datagrid, List, NumberField, ReferenceField, TextField, BooleanField } from "react-admin";

export const LessonList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <BooleanField source="activo"/>
                <BooleanField source="prueba"/>
                {/* <TextField source="description"/> */}
                <ReferenceField source="unitId" reference="units"/>
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};