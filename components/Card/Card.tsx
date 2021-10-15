import Image from "next/image";
import Link from "next/link";
import React, { useState, FC, useEffect } from "react";
import Badge from "../Badge/Badge";
import EyeHeartGroup from "../EyeHeartGroup/EyeHeartGroup";
import styles from "./Card.module.scss";
import StarRating from "../StarRating/StarRating";
import { itemAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from "../../redux/reducers";
import IncreamentBtn from "../ButtonGroup/IncreamentBtn";
import DecreamentBtn from "../ButtonGroup/DecrementBtn";
import Modal from "../Modal/Modal";
import ProductDetailsPopup from "../ProductDetailsPopup/ProductDetailsPopup";
import { IncreamentFunc } from "../../hooks/IncreamentCartItem";
import { DecreamentFunc } from "../../hooks/DecreamentCartItem";

type Props = {
  badges?: boolean;
  image: any;
  paragraph: string;
  oldPrice?: string;
  newPrice?: string;
  itemRating: number;
  keyI?: any;
  itemRatingCount?: number;
  brand?: string;
  soldBy?: string;
  isStockAvailable?: boolean;
  itemImageArray?: string[];
  completeItem?: any;
};

const Card: FC<Props> = (props) => {
  const { badges, image, paragraph, oldPrice, newPrice, itemRating, keyI } =
    props;
  const [counter, setCounter] = useState(0);
  const state = useSelector<initialStateType, initialStateType>(
    (state) => state
  );
  const reduxItems = [...state?.item];

  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();

  // const IncreamentFunc = () => {
  //   const reduxItems = [...state?.item];
  //   const currentItemIndex = reduxItems?.findIndex(
  //     (item1) => item1?.keyI === props?.completeItem?.keyI
  //   );

  //   if (currentItemIndex !== -1) {
  //     reduxItems[currentItemIndex].quantity = ++reduxItems[currentItemIndex]
  //       .quantity;
  //   } else {
  //     reduxItems.push({ ...props.completeItem, quantity: 1 });
  //   }
  //   dispatch(itemAction(reduxItems));
  // };

  // const DecreamentFunc = () => {
  //   const reduxItems = [...state?.item];
  //   const currentItemIndex = reduxItems?.findIndex(
  //     (item1) => item1?.keyI === props?.completeItem?.keyI
  //   );
  //   if (currentItemIndex !== -1) {
  //     console.log("redux length", reduxItems[currentItemIndex].quantity);
  //     if (reduxItems[currentItemIndex].quantity === 1) {
  //       reduxItems.splice(currentItemIndex, 1);
  //     } else {
  //       reduxItems[currentItemIndex].quantity = --reduxItems[currentItemIndex]
  //         .quantity;
  //     }
  //   } else {
  //     reduxItems.splice(currentItemIndex, 1);
  //   }
  //   dispatch(itemAction(reduxItems));
  // };

  useEffect(() => {
    setCounter(
      state?.item?.reduce((prev, curr) => {
        if (curr?.keyI == props?.completeItem?.keyI) {
          return (prev += curr.quantity || 0);
        } else return prev;
      }, 0)
    );
  }, [state?.item]);
  return (
    <div className={styles.cardMain}>
      {badges && (
        <div className={styles.cardMainBadge}>
          <Badge content="25% off" />
          <span className={styles.cardMainBadgeSpan}>
            <EyeHeartGroup showModal={() => setShowDetails(true)} />
          </span>
        </div>
      )}
      {showDetails && (
        <Modal
          onClose={() => setShowDetails(false)}
          child={<ProductDetailsPopup data={props} />}
          showCloseBtn
          height="440px"
          width="650px"
        />
      )}
      <div className={styles.cardMainImage}>
        <Image
          src={image}
          className={styles.projectImage}
          height="200"
          width="200"
          alt="Cards"
        />
      </div>
      <div className={styles.cardFooter}>
        <Link
          href={{
            pathname: `/products/${keyI}`,
          }}
          passHref
        >
          <p>{paragraph}</p>
        </Link>
        <StarRating itemRating={itemRating} />
        <p className={styles.priceGroup}>
          <span>
            {oldPrice} <s>{newPrice}</s>
          </span>

          <span className={styles.AddSubButtonGroup}>
            {counter > 0 && (
              <span className={styles.decrementGroup}>
                <span
                  onClick={() =>
                    DecreamentFunc(reduxItems, props?.completeItem, dispatch)
                  }
                >
                  <DecreamentBtn />
                </span>
                {counter}
              </span>
            )}
            <span
              onClick={() =>
                IncreamentFunc(reduxItems, props?.completeItem, dispatch)
              }
            >
              <IncreamentBtn />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
