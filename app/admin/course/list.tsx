import { BooleanField, Datagrid, List, TextField } from "react-admin";

export const CourseList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="titulo"/>
                <BooleanField source="activo"/>
                <TextField source="enlace_imagen"/>
            </Datagrid>
        </List>
    );
};