import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useState, useEffect } from "react";
import { cleanObject, useMount, useDebounce } from "utils";
import React from "react";
import * as qs from "qs";
import { ScreenContainer } from "components/lib";
import { Row } from "antd";
import { useHttp } from "utils/http";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 2000);
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <ScreenContainer>
        <Row>
          <h1>项目列表</h1>
        </Row>

        <SearchPanel users={users || []} param={param} setParam={setParam} />
        <List users={users || []} dataSource={list || []} />
      </ScreenContainer>
    </div>
  );
};
