import styled from "styled-components";
import { Text } from "../theme/text.component";

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;
