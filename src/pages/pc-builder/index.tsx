import RootLayout from "@/components/layout/RootLayout";
import {ReactElement} from "react";
import {NextPageWithLayout} from "../_app";

const PCBuilder: NextPageWithLayout = () => {
  return <div>This is pc builder page</div>;
};
PCBuilder.getLayout = function getLayout(PCBuilder: ReactElement) {
  return <RootLayout>{PCBuilder}</RootLayout>;
};
export default PCBuilder;
