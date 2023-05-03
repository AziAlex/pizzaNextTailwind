import { NextPage } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Laout";
import Sort from "@/components/sort/Sort";
import Items from "@/components/Items/Items";
import { useAppDispatch } from "@/hook";
import { useEffect } from "react";
import { fetchPizza } from "@/redux/sortPizza/sortSlice";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPizza());
  }, [dispatch]);

  return (
    <Layout title="Home" description="Заказывай замую вкусную пиццу в мире">
      <Sort />
      <Items />
    </Layout>
  );
};

export default Home;
