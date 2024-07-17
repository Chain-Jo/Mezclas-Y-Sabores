import { BooleanField, Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

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
               {/**
                
                <NumberField source="unidad_referenciada"/>
                */} 
            </Datagrid>
        </List>
    );
};