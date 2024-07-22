import { BooleanField, Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

export const LessonList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="titulo"/>
                <BooleanField source="activo"/>
                <BooleanField source="prueba"/>
                {/* <TextField source="descripcion"/> */}
                <ReferenceField source="unitId" reference="units"/>
                <NumberField source="orden"/>
            </Datagrid>
        </List>
    );
};