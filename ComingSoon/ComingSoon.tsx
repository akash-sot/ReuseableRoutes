import styled from "styled-components";
import { Header, SideMenu } from "../../../Components";
import { Empty } from "antd";

function CroDashboard() {
  return (
    <Container>
      <Header user="cro" />
      <div className="page-wrapper">
        <SideMenu />
        <SubContainer className="page-content">
          <br />
          <br />
          <Empty description="Coming soon." />
        </SubContainer>
      </div>
    </Container>
  );
}
export default CroDashboard;

// Styles
const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
  position: fixed;
  width: 100%;
`;
const SubContainer = styled.div`
  padding: 1rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 95vh;
  overflow-y: scroll;
`;
