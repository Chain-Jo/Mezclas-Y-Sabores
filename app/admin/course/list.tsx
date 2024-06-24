import { Datagrid, List, TextField, BooleanField } from "react-admin";

export const CourseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="imageSrc"/>
                <BooleanField source="activo"/>
            </Datagrid>
        </List>
    );
};