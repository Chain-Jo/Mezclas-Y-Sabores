import { BooleanField, Datagrid, List, ReferenceField, TextField } from "react-admin";

export const UnitList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="titulo"/>
                <TextField source="descripcion"/>
                <BooleanField source="activo"/>
                <ReferenceField source="courseId" reference="courses"/>
                <TextField source="orden"/>
            </Datagrid>
        </List>
    );
};