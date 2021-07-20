/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React from "react";
import { useTranslation } from "react-i18next";
import { MText, MView, MBackgroundImage } from "@customs/index";

const Book = () => {
  const { t } = useTranslation();
  return <MView style={{ flex: 1, backgroundColor: "blue" }} />;
};

export default Book;
