import React, { useState,useRef  } from 'react';
import { View, Text, Button, ScrollView } from "react-native";

const DataDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState("category1");
  const scrollViewRef = useRef();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    scrollViewRef.current.scrollTo({ y: 0, animated: true });
  };

  const renderCategoryData = () => {
    if (selectedCategory === "category1") {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 200,
            width: "100%",
            backgroundColor: "#8E8FFA"
          }}
        >
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "skyblue",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "tomato",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 2
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "pink",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 1
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "gray",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "orange",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "green",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 31
          </Text>
          <Text
            style={{
              marginTop: 50,
              alignItems: "center",
              height: 150,
              backgroundColor: "yellow",
              textAlign: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 4
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "blue",
              textAlign: "center",
              height: 150,
              alignItems: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
        </View>
      );
    } else if (selectedCategory === "category2") {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 200,
            width: "100%",
            backgroundColor: "yellow"
          }}
        >
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "skyblue",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "tomato",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 2
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "pink",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 1
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "gray",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "orange",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "green",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 31
          </Text>
          <Text
            style={{
              marginTop: 50,
              alignItems: "center",
              height: 150,
              backgroundColor: "yellow",
              textAlign: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 4
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "blue",
              textAlign: "center",
              height: 150,
              alignItems: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
        </View>
      );
    } else if (selectedCategory === "category3") {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 200,
            width: "100%",
          }}
        >
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "skyblue",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "tomato",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 2
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "pink",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 1
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "white",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "gray",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "orange",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 3
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "green",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 31
          </Text>
          <Text
            style={{
              marginTop: 50,
              alignItems: "center",
              height: 150,
              backgroundColor: "yellow",
              textAlign: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 4
          </Text>
          <Text
            style={{
              marginTop: 50,
              backgroundColor: "blue",
              textAlign: "center",
              height: 150,
              alignItems: "center",
              width: "90%",
              padding: 20,
              borderRadius: 15,
            }}
          >
            Data for Category 5
          </Text>
        </View>
      );
    }
  };

  return (
   <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 50,
        }}
      >
        <Button
          title="Category 1"
          onPress={() => handleCategoryChange("category1")}
        />
        <Button
          title="Category 2"
          onPress={() => handleCategoryChange("category2")}
        />
        <Button
          title="Category 3"
          onPress={() => handleCategoryChange("category3")}
        />
      </View>
      <ScrollView ref={scrollViewRef}>
        <View style={{ backgroundColor: "red" }}>{renderCategoryData()}</View>
      </ScrollView>
    </View>
  );
};

export default DataDisplay;
