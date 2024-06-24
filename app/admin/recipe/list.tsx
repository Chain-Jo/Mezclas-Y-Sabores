import { Datagrid, List, NumberField, ReferenceField, TextField, BooleanField } from "react-admin";

export const RecipeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="link"/>
                <BooleanField source="activo"/>
                <ReferenceField source="unitId" reference="units"/>
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};