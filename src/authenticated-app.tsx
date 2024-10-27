import { useAuth } from "context/auth-context";
import styled from "@emotion/styled";
import React from "react";
import { ProjectListScreen } from "screens/project-list";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <PageHeader>
        <button onClick={logout}>登出</button>
      </PageHeader>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
`;

const PageHeader = styled.header`
  height: 6em;
`;
const Main = styled.main`
  height: calc(100vh-6rem);
`;
