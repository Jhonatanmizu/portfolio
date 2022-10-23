import { Headline, Title } from "../layout/Typography/styles";
import { Card } from "./styles";

function BannerCard({ name, title }) {
  return (
    <Card>
      <Headline>{name}</Headline>
      <Title>{title}</Title>
    </Card>
  );
}

export default BannerCard;
