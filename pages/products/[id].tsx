import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import dataMaping from "../../lib/dataMaping";
import ProductDetailsPopup from "../../components/ProductDetailsPopup/ProductDetailsPopup";
import DescriptionReviewSection from "../../components/DescriptionReviewSection/DescriptionReviewSection";

const ProductDetails = () => {
  const router = useRouter();
  const objName = router?.query?.id && String(router?.query?.id)?.split("-")[0];
  const index = router?.query?.id && String(router?.query?.id)?.split("-")[1];
  let productData = [];

  dataMaping?.[objName]?.map((item1, index1) => {
    if (item1?.keyI === Number(index)) {
      return productData.push(item1);
    }
  });
  return (
    <Layout>
      <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center',width: '100%',flexDirection:"column"}}>
      <ProductDetailsPopup data={productData[0]?.value} />
      <DescriptionReviewSection/>
      </div>
    </Layout>
  );
};

export default ProductDetails;
