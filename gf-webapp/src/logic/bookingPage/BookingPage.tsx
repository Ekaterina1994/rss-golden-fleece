import React from "react";
import styles from "./BookingPage.module.scss";
import {PageBorder} from "../../component/pageBorder/PageBorder";
import {BookingPromo} from "./bookingPromo/BookingPromo";
import {HotelPlan} from "./hotelPlan/HotelPlan";
import {useTranslation} from "react-i18next";

export const BookingPage = () => {
  const {t} = useTranslation();
  return (
    <div>
      <PageBorder>
        <BookingPromo />
        <h2 className={styles.title}>
          {t("chooseRoom")}
        </h2>
        <HotelPlan />
      </PageBorder>
    </div>
  );
};