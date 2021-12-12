import React, { useEffect, useState } from "react";
import axiosConfig from "../../../core/axiosConfig";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { Agenda } from "react-native-calendars";
import styles from "../../../styles/CompanyCalendar";
import detailStyles from "../../../styles/CalenderDetail";
import moment from "moment";
import { SetLunchMeals } from "./SetLunchMeals";
import { CancelLunchMeals } from "./CancelLunchMeals";

export const LunchCalendar = ({ navigation }) => {
  const today = moment(new Date()).format("YYYY-MM-DD");
  const [openSetLunch, setOpenSetLunch] = useState(false);
  const [openCancelLunch, setOpenCancelLunch] = useState(false);
  const [data, setData] = useState([]);
  const [items, setItems] = useState({});
  const [isRefresh, setIsRefresh] = useState(false);

  const handleIsRefresh = () => {
    setIsRefresh(!isRefresh);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosConfig.get(`user-lunch/`);
        setData(response.data);
        setItems(getItems(response.data));
      } catch (error) { }
    })();
  }, [isRefresh]);

  const getItems = (data) => {
    let items = {};
    data.forEach((element) => {
      items[`${element.date}`] = [
        {
          name: element.has_veggie ? "Veggie Lunch" : "Lunch",
          color: element.has_veggie ? "#C8E2B1" : "#F9CC76",
          id: element.id
        },
      ];
    });
    return items;
  };

  const handleDelete = (id) => {
    (async () => {
      try {
        const response = await axiosConfig.delete(
          `user-lunch/action/${id}`
        );
        if (response.data.hasOwnProperty("msg")) {
          alert(response.data.msg);
        }
        handleIsRefresh();
      } catch (error) {
      }
    })();
  };

  const handlePressDelete = (id) => {
    Alert.alert('Delete', 'Are you sure to delete this?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => handleDelete(id) },
    ]);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={[styles.item, {backgroundColor: item.color}]} onPress={() => handlePressDelete(item.id)}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const renderEmptyDate = () => {
    return <View style={styles.item}></View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <TouchableOpacity style={styles.detailBtn}>
          <Text
            style={styles.detailText}
            onPress={() => navigation.navigate("LunchCalendarOptions")}
          >
            Options
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameCalendar}>
        <View style={{ height: 350 }}>
          <Agenda
            items={items}
            renderItem={renderItem}
            renderEmptyDate={renderEmptyDate}
          />
        </View>
      </View>
      <View style={detailStyles.calendarType}>
        <View style={{ bottom: 15 }}>
          <TouchableOpacity>
            <Text
              onPress={() => setOpenSetLunch(true)}
              style={[
                detailStyles.calendarTitle,
                detailStyles.calendarRedTitle,
              ]}
            >
              Set Lunch
            </Text>
          </TouchableOpacity>
          <SetLunchMeals
            today={today}
            openSetLunch={openSetLunch}
            setOpenSetLunch={setOpenSetLunch}
            handleIsRefresh={handleIsRefresh}
          />
        </View>
        <View style={{ bottom: 25 }}>
          <TouchableOpacity>
            <Text
              onPress={() => setOpenCancelLunch(true)}
              style={[
                detailStyles.calendarTitle,
                detailStyles.calendarOrangeTitle,
              ]}
            >
              Cancel Lunch
            </Text>
          </TouchableOpacity>
          <CancelLunchMeals
            today={today}
            openCancelLunch={openCancelLunch}
            setOpenCancelLunch={setOpenCancelLunch}
            handleIsRefresh={handleIsRefresh}
          />
        </View>
      </View>
    </View>
  );
};
