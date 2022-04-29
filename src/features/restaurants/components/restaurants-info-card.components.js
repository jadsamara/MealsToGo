import { Image, View } from "react-native";
import styled from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.components";
import { Text } from "../../../components/typography/text.components";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

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
    isClosedTemp = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemp && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
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
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[1]};
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
