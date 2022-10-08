import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import {
  Description,
  Info,
  ItemList,
  ListNone,
  ListStyled,
  Name,
  Photo,
  Value,
} from "./List.stylr";

interface ListProps {
  teachers: Teacher[];
}

const List = (props: ListProps) => {
  return (
    <>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((e) => (
            <ItemList key={e.id}>
              <Photo src={e.photo}></Photo>
              <Info>
                <Name>{e.name}</Name>
                <Value>
                  {e.value.toLocaleString('pt-BR', 
                    {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por dia
                </Value>
                <Description>{e.description}</Description>
                <Button sx={{ width: "70%" }}>Marcar Aula com Carlos</Button>
              </Info>
            </ItemList>
          ))}
        </ListStyled>
      ) : (
        <ListNone>Nem um item encontrado</ListNone>
      )}
    </>
  );
};

export default List;
