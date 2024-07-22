import { 
    BooleanField,
    Datagrid, 
    List, 
    NumberField, 
    ReferenceField, 
    TextField 
} from "react-admin";

export const ChallengeOptionList = () => {
    return (
        <List>
            <Datagrid rowClick="edit">
                <NumberField source="id"/>
                <TextField source="text"/>
                <BooleanField source="activo"/>
                <BooleanField source="correcto"/>
                <ReferenceField source="challengeId" reference="challenges"/>
                <TextField source="enlace_imagen" />
            </Datagrid>
        </List>
    );
};