import { User } from "types/user";
import React from "react";
import { Table, TableProps } from "antd";
import { Link } from "react-router-dom";
import { Project } from "types/project";

interface ListProps extends TableProps<Project> {
  users: User[];
}
export const List = ({ users, ...props }: ListProps) => {
  return (
    <Table
      rowKey={"id"}
      pagination={false}
      columns={[
        {
          title: "名称",
          sorter: (a, b) => a.name.localeCompare(b.name),
          render(value, project) {
            return (
              <Link to={`projects/${String(project.id)}`}>{project.name}</Link>
            );
          },
        },
        {
          title: "负责人",
          render(value, proj) {
            return (
              <span>
                {users.find((user) => user.id === proj.personId)?.name ||
                  "未知"}
              </span>
            );
          },
        },
      ]}
      {...props}
    />
  );
};
