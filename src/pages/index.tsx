import { Inter } from "next/font/google";
import Layout from "@/components/layout/Laout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Layout></Layout>;
}
