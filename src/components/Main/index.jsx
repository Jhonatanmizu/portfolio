import { Container, Divisor } from "../../styles/global";
import BannerCard from "../BannerCard";
import { Content, HomeContainer } from "./styles";
function Main() {
  return (
    <Container>
      <HomeContainer id="home">
        <Content>
          <BannerCard name={"Jhonatan Jesus"} title={"Frontend Developer"} />
        </Content>
      </HomeContainer>
    </Container>
  );
}

export default Main;
