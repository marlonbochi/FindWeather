import React from "react";
import { Image, SafeAreaView } from "react-native";
import Text from "../../components/Text";
import Divider from "../../components/Divider";
import theme from "../../theme";

import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import Styled from "./styles";

const Welcome = (): JSX.Element => {
	return (
		<Styled.Container>
			<SafeAreaView>
       			<Divider top={60} />

				<Styled.ContainerImage>
					<Image source={CloudAndThunderPNG} />
				</Styled.ContainerImage>

				<Divider top={34} />

				<Text
				fontFamily={theme.fontFamily.OverpassSemiBold}
				fontSize={theme.fontSize.xxl33}
				color={theme.colors.white}
				textAlign="center"
				style={{ width: 300, alignSelf: "center" }}
				>
					Descubra o Clima na sua Cidade
				</Text>
			</SafeAreaView>
		</Styled.Container>
	  
	);
};

export default Welcome;