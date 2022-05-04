import { Image, View } from "react-native";
import styled from "styled-components";

import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Text } from "../../../components/theme/text.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiecrush.com/wp-content/uploads/2020/05/Penne-Marinara-Sauce-foodiecrush.com-004.jpg",
    ],
    address = "123 Sesame Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${i}`}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <OpenNowSign>
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </OpenNowSign>
            <TypeOfFoodIcon>
              <Icon source={{ uri: icon }} />
            </TypeOfFoodIcon>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </CardInfo>
    </RestaurantCard>
  );
};

const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CardInfo = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  flex: 1;
`;

const OpenNowSign = styled(View)`
  margin-left: ${(props) => props.theme.space[3]};
`;

const TypeOfFoodIcon = styled(View)`
  margin-left: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[1]};
`;
