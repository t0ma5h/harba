import styled from "styled-components/native";
import { Text } from "../../ui";

type HarborsLoaderProps = {
  isLoading: boolean;
};

const HarborsLoader = ({
  isLoading,
}: HarborsLoaderProps): JSX.Element | null => {
  if (isLoading) {
    return (
      <>
        <Loader />
        <Text bold>Loading harbors...</Text>
      </>
    );
  }
  return null;
};

const Loader = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.palette.primary,
  size: "large",
}))`
  position: absolute;
`;

export default HarborsLoader;
