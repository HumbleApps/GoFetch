import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import Text from "components/Text";
import styles from "./Tabs.styles";

type Props = {
  first?: string;
  second?: string;
  handleTabChange?: (tab) => void;
};

const Tabs: FC<Props> = ({ first = "", second = "", handleTabChange }) => {
  const [activeTab, setactiveTab] = useState(first);

  useEffect(() => {
    if (handleTabChange) {
      handleTabChange(activeTab);
    }
  }, [activeTab]);
  return (
    <View style={styles.tabContainer}>
      <View
        style={[
          styles.tab,
          styles.tabLeft,
          activeTab === first ? styles.tabActive : {},
        ]}
      >
        <Text onPress={() => setactiveTab(first)} style={styles.tabText}>
          {first}
        </Text>
      </View>
      <View
        style={[
          styles.tab,
          styles.tabRight,
          activeTab === second ? styles.tabActive : {},
        ]}
      >
        <Text onPress={() => setactiveTab(second)} style={styles.tabText}>
          {second}
        </Text>
      </View>
    </View>
  );
};

export default Tabs;
