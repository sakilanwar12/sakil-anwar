import Resume from "@/components/sections/Resume";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Resume | Sakil Anwar - Web Developer",
  description: "View and download Sakil Anwar's professional resume.",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Resume />
      </div>
      <Footer />
    </div>
  );
}
