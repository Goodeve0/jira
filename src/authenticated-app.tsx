import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { ProjectListScreen } from "screens/project-list";
import { ProjectScreen } from "screens/project";
import { Button, Menu, Row } from "antd";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";

export const AuthenticatedApp = () => {
  const [projectModalOpen, setprojectModalOpen] = useState(false);
  return (
    <Container>
      <PageHeader />
      <Main>
        <Router>
          <Routes>
            <Route path={"projects"} element={<ProjectListScreen />} />
            <Route path={"projects/:projectId/*"} element={<ProjectScreen />} />
            <Route index element={<ProjectListScreen />}></Route>
          </Routes>
        </Router>
      </Main>
    </Container>
  );
};

const PageHeader = () => {
  const { logout } = useAuth();
  return (
    <Header>
      <HeaderLeft>
        <h3>Logo</h3>
        <h3>项目</h3>
        <h3>用户</h3>
      </HeaderLeft>
      <HeaderRight onClick={logout}>登出</HeaderRight>
    </Header>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
`;
