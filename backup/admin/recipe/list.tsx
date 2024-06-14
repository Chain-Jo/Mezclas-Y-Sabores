import { Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

export const RecipeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="title"/>
                <TextField source="description"/>
                <ReferenceField source="unitId" reference="units"/>
                <TextField source="imageSrc" />
                <NumberField source="order"/>
            </Datagrid>
        </List>
    );
};