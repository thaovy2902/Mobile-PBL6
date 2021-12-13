import React, { useState } from "react";
import { DrawerBottom, DrawerItem, DrawerSection } from "material-bread";
import { Button, FormControl, Modal, Checkbox } from "native-base";
import DatePicker from "react-native-datepicker";
import axiosConfig from "../../../core/axiosConfig";
import { View } from "react-native";
import moment from "moment";

export const SetLunchMeals = ({ today, openSetLunch, setOpenSetLunch, handleIsRefresh }) => {
  const defaultRangeValue = {
    has_veggie: false,
  };
  const [newData, setNewData] = useState(defaultRangeValue);
  const [showModal, setShowModal] = useState(false);

  const setToday = () => {
    (async () => {
      try {
        const date = new Date();
        const hours = date.getHours();
        if (hours >= 9) {
          alert("Out of time to set lunch");
          return;
        }
        const data = {
          has_veggie: false,
          date: today,
        };
        const response = await axiosConfig.post("user-lunch/create", data);
        if (response.data.hasOwnProperty("error_msg")) {
          alert(response.data.error_msg);
          return;
        } else {
          alert("Set lunch successfully");
          setOpenSetLunch(false);
          handleIsRefresh();
        }
      } catch (error) {
        setOpenSetLunch(false);
      }
    })();
  };

  const setVeggie = () => {
    (async () => {
      try {
        const date = new Date();
        const hours = date.getHours();
        if (hours >= 9) {
          alert("Out of time to set lunch");
          return;
        }
        const data = {
          date: today,
        };
        const response = await axiosConfig.put("user-lunch/set-veggie", data);
        if (response.data.hasOwnProperty("msg")) {
          alert(response.data.msg);
          return;
        } else {
          alert("Set veggie successfully");
          setOpenSetLunch(false);
          handleIsRefresh();
        }
      } catch (error) {
        setOpenSetLunch(false);
      }
    })();
  };

  const getDatesUnRange = (startDate, stopDate) => {
    const dateArray = [];
    let currentDate = moment(startDate);
    let endDate = moment(stopDate);
    while (currentDate <= endDate) {
      dateArray.push(moment(currentDate).format("YYYY-MM-DD"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  };

  const setRange = () => {
    (async () => {
      try {
        const date = new Date();
        const hours = date.getHours();
        if (newData.startDate > newData.endDate) {
          alert("End day must be greater than start day");
          return;
        }
        if (newData.startDate < today) {
          alert("Start day must be greater than today");
        }
        if (newData.startDate === today && hours >= 9) {
          newData.startDate = moment(today).add(1, "days");
        }
        const list_dates = getDatesUnRange(newData.startDate, newData.endDate);
        const data = {
          ...newData,
          list_dates,
        };
        const response = await axiosConfig.post("user-lunch/create-many", data);
        if (response.data.hasOwnProperty("error_msg")) {
          alert(response.data.error_msg);
          return;
        } else {
          alert(response.data.msg);
          setOpenSetLunch(false);
          handleIsRefresh();
          setShowModal(false);
          setNewData(defaultRangeValue);
        }
      } catch (error) {
        setOpenSetLunch(false);
      }
    })();
  };

  return (
    <>
      <DrawerBottom
        visible={openSetLunch}
        onBackdropPress={() => setOpenSetLunch(false)}
        onSwipeDown={() => setOpenSetLunch(false)}
      >
        <View>
          <DrawerSection style={{ marginBottom: 50 }}>
            <DrawerItem
              text={"Range"}
              icon={"favorite"}
              onPress={() => setShowModal(true)}
              active
            />
            <DrawerItem text={"Today"} icon={"favorite"} onPress={setToday} />
            <DrawerItem text={"Veggie"} icon={"favorite"} onPress={setVeggie} />
          </DrawerSection>
        </View>
      </DrawerBottom>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Set lunch Range</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>From</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: "transparent" }}
                mode="date"
                date={newData?.startDate}
                placeholder="Select date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                  },
                  dateInput: {
                    marginLeft: 50,
                  },
                }}
                onDateChange={(date) =>
                  setNewData({ ...newData, startDate: date })
                }
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>To</FormControl.Label>
              <DatePicker
                style={{ width: 200, backGroundColor: "transparent" }}
                mode="date"
                date={newData?.endDate}
                placeholder="Select date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                  },
                  dateInput: {
                    marginLeft: 50,
                  },
                }}
                onDateChange={(date) =>
                  setNewData({ ...newData, endDate: date })
                }
              />
            </FormControl>
            <FormControl mt="3" style={{ flexDirection: "row" }}>
              <FormControl.Label _text={{ bold: true }}>
                Veggie
              </FormControl.Label>
              <Checkbox
                accessibilityLabel="vegetarian"
                isChecked={newData?.has_veggie}
                onChange={(value) =>
                  setNewData({ ...newData, has_veggie: value })
                }
                defaultIsChecked
              />
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button onPress={setRange}>Create Lunch</Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};
