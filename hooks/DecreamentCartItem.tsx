import { itemAction } from "../redux/actions";

export const DecreamentFunc = (reduxItems,currentItem,dispatch) => {
    const currentItemIndex = reduxItems?.findIndex(
      (item1) => item1?.keyI === currentItem?.keyI
    );
    if (currentItemIndex !== -1) {
      if (reduxItems[currentItemIndex].quantity === 1) {
        reduxItems.splice(currentItemIndex, 1);
      } else {
        reduxItems[currentItemIndex].quantity = --reduxItems[currentItemIndex]
          .quantity;
      }
    } else {
      reduxItems.splice(currentItemIndex, 1);
    }
    dispatch(itemAction(reduxItems));
  };