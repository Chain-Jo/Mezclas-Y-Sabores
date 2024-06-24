import { Datagrid, List, ReferenceField, TextField, BooleanField } from "react-admin";

export const UnitList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="description"/>
                <BooleanField source="activo"/>
                <ReferenceField source="courseId" reference="courses"/>
                <TextField source="order"/>
            </Datagrid>
        </List>
    );
};