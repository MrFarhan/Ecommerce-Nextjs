import { itemAction } from "../redux/actions";

export const IncreamentFunc = (reduxItems,currentItem,dispatch) => {


  const currentItemIndex = reduxItems?.findIndex(
    (item1) => item1?.keyI === currentItem?.keyI
  );

  if (currentItemIndex !== -1) {
    reduxItems[currentItemIndex].quantity = ++reduxItems[currentItemIndex]
      .quantity;
  } else {
    reduxItems.push({ ...currentItem, quantity: 1 });
  }
  return dispatch(itemAction(reduxItems));
};

// export default IncreamentFunc;
