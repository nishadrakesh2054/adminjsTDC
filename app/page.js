import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Benefit1 from "@/components/sections/Benefit1";
import Form1 from "@/components/sections/Form1";
import Partner from "@/components/sections/Partner";
import Slider1 from "@/components/sections/Slider1";
// import Team1 from "@/components/sections/Team1";
// import Testimonial1 from "@/components/sections/Testimonial1";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
        <Slider1 />

        <About1 />

        <Benefit1 />
        <div className="graphic" />
        {/* <Testimonial1 /> */}
        {/* <Team1 /> */}
   
        <Partner />

        <Form1 />
        <div className="graphic" />
      </Layout>
    </>
  );
}
