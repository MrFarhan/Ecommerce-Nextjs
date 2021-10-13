import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { HomeCardData } from "../../components/Card/HomeCard.helper";
import dataMaping from "../../lib/dataMaping";
import ProductDetailsPopup from "../../components/ProductDetailsPopup/ProductDetailsPopup";

const ProductDetails = () => {
  const router = useRouter();
  const objName = router?.query?.id && String(router?.query?.id)?.split("-")[0];
  const index = router?.query?.id && String(router?.query?.id)?.split("-")[1];

  return (
    <Layout>
      <ProductDetailsPopup
        data={dataMaping[objName] && dataMaping[objName][Number(index)]}
      />
    </Layout>
  );
};

export default ProductDetails;
