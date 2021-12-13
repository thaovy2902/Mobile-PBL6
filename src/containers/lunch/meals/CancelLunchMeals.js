import React, { useState } from "react";
import { DrawerBottom, DrawerItem, DrawerSection } from "material-bread";
import { Button, FormControl, Modal, Checkbox } from "native-base";
import DatePicker from "react-native-datepicker";
import axiosConfig from "../../../core/axiosConfig";
import { View } from "react-native";
import moment from "moment";

export const CancelLunchMeals = ({
  today,
  openCancelLunch,
  setOpenCancelLunch,
  handleIsRefresh,
}) => {
  const defaultRangeValue = {
    has_veggie: false,
  };
  const [newData, setNewData] = useState(defaultRangeValue);
  const [showModal, setShowModal] = useState(false);

  const deleteMonth = () => {
    (async () => {
      try {
        const data = {
          date: today,
        };
        const response = await axiosConfig.put("user-lunch/delete-many", data);
        if (response.data.hasOwnProperty("msg")) {
          alert(response.data.msg);          
        }
        setOpenCancelLunch(false);
        handleIsRefresh();
      } catch (error) {
        setOpenSetLunch(false);
      }
    })();
  };

  return (
    <>
      <DrawerBottom
        visible={openCancelLunch}
        onBackdropPress={() => setOpenCancelLunch(false)}
        onSwipeDown={() => setOpenCancelLunch(false)}
      >
        <View>
          <DrawerSection style={{ marginBottom: 50 }}>
            <DrawerItem
              text={"Month"}
              icon={"favorite"}
              onPress={deleteMonth}
              active
            />
          </DrawerSection>
        </View>
      </DrawerBottom>
    </>
  );
};
