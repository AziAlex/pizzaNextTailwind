import { Inter } from "next/font/google";
import Layout from "@/components/layout/Laout";
import SortForTypes from "@/components/sort/SortForTypes";
import Sort from "@/components/sort/Sort";
import Items from "@/components/Items/Items";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home" description="Заказывай замую вкусную пиццу в мире">
      <Sort />
      <Items />
    </Layout>
  );
}
