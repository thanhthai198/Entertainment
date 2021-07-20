/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React from "react";
import { useTranslation } from "react-i18next";
import { MText, MView, MBackgroundImage } from "@customs/index";

const Group = () => {
  const { t } = useTranslation();
  return <MView style={{ flex: 1, backgroundColor: "gray" }} />;
};

export default Group;
