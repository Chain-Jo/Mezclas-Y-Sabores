import { BooleanField, Datagrid, List, NumberField, ReferenceField, TextField } from "react-admin";

export const RecipeList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <TextField source="id"/>
                <TextField source="titulo"/>
                <TextField source="link"/>
                <BooleanField source="activo"/>
                <ReferenceField source="unitId" reference="units"/>
                <NumberField source="orden"/>
               {/**
                
                <NumberField source="unidad_referenciada"/>
                */} 
            </Datagrid>
        </List>
    );
};