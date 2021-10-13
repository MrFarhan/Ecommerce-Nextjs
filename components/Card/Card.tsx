import Image from "next/image";
import Link from "next/link";
import React, { useState, FC } from "react";
import Badge from "../Badge/Badge";
import EyeHeartGroup from "../EyeHeartGroup/EyeHeartGroup";
import styles from "./Card.module.scss";
import StarRating from "../StarRating/StarRating";
import { counterAction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { initialStateType } from "../../redux/reducers";
import IncreamentBtn from "../ButtonGroup/IncreamentBtn";
import DecreamentBtn from "../ButtonGroup/DecrementBtn";
import Modal from "../Modal/Modal";
import ProductDetailsPopup from "../ProductDetailsPopup/ProductDetailsPopup";

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
};

const Card: FC<Props> = (props) => {
  const { badges, image, paragraph, oldPrice, newPrice, itemRating, keyI } =
    props;
  const [counter, setCounter] = useState(0);
  const state = useSelector<initialStateType, initialStateType>(
    (state) => state
  );
  const [showDetails, setShowDetails] = useState(false);
  const reduxCounter = state?.counter;

  const dispatch = useDispatch();
  const IncreamentFunc = () => {
    setCounter(counter + 1);
    dispatch(counterAction(reduxCounter + 1));
  };
  const DecreamentFunc = () => {
    setCounter(counter - 1);
    dispatch(counterAction(reduxCounter - 1));
  };
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
                <span onClick={() => DecreamentFunc()}>
                  <DecreamentBtn />
                </span>
                {counter}
              </span>
            )}
            <span onClick={() => IncreamentFunc()}>
              <IncreamentBtn />
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
