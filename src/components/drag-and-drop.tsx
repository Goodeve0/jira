import React, { Children, ReactNode } from "react";
import { Droppable, DroppableProps } from "react-beautiful-dnd";

type DropProps = Omit<DroppableProps, "children"> & { children: ReactNode };

export const Drop = ({ children, ...props }: DropProps) => {};
