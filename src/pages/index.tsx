import { Inter } from "next/font/google";
import Layout from "@/componets/layout/Laout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layout></Layout>;
}
