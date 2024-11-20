import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import React from "react";
import * as qs from "qs";
import { ButtonNoPadding, ScreenContainer } from "components/lib";
import { Row } from "components/lib";
import { useHttp } from "utils/http";
import { Typography } from "antd";
import { useAsync } from "utils/use-async";
import Project from "types/project";
import { useProjects } from "utils/project";
import { useUsers } from "utils/user";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 200);
  const { isLoading, error, data: list } = useProjects();
  const { data: users } = useUsers();

  return (
    <div>
      <ScreenContainer>
        <Row marginBottom={2} between={true}>
          <h1>项目列表</h1>
        </Row>
        <ButtonNoPadding type="link">创建项目</ButtonNoPadding>

        <SearchPanel users={users || []} param={param} setParam={setParam} />
        {error ? (
          <Typography.Text type={"danger"}>{error.message}</Typography.Text>
        ) : null}
        <List loading={isLoading} users={users || []} dataSource={list || []} />
      </ScreenContainer>
    </div>
  );
};
