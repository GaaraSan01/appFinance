import React from "react";
import * as C from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

export default function GridItem  ({ item, onDelete }) {
  return (
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{Number(item.amount).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</C.Td>
            <C.Td alignCenter>
                {item.options ? (
                <FaRegArrowAltCircleUp color="blue" />
                ) : (
                <FaRegArrowAltCircleDown color="brown" />
                )}
            </C.Td>
            <C.Td alignCenter>
                <FaTrash onClick={() => onDelete(item.id)} />
            </C.Td>
        </C.Tr>
  );
};

