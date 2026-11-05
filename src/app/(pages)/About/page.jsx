import About from "./About";
import AboutSlides from "./AboutUs";
import OurMission from "./OurMission";
import OurVision from "./OurVision";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-white text-gray-900">
      <AboutSlides />
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <About />
        </div>
        <div>
          <OurMission />
        </div>
        <div>
          <OurVision />
        </div>
      </div> */}
    </div>
  );
}
