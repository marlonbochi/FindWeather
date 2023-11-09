import React from "react";
import { Image } from "react-native";
import Text from "../../components/Text";
import theme from "../../theme";

const Home = (): JSX.Element => {
	return (
		<Text
		fontFamily={theme.fontFamily.OverpassSemiBold}
		fontSize={theme.fontSize.xxl33}
		color={theme.colors.white}
		textAlign="center"
		style={{ width: 300, alignSelf: "center" }}
		>
			TEST
		</Text>
	);
};

export default Home;