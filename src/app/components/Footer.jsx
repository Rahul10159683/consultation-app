import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-300 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 sm:grid-cols-6 gap-4 text-xs text-gray-700 items-start">
        {/* Phone */}
        <div className="flex sm:justify-end items-center gap-2 font-semibold text-white uppercase">
          <FaPhoneAlt className="text-white" />
          Phone:
        </div>
        <div className="flex sm:justify-start items-center font-medium text-white">
          +91 9704440138
        </div>

        {/* Email */}
        <div className="flex sm:justify-end items-center gap-2 font-semibold text-white uppercase">
          <FaEnvelope className="text-white" />
          Email:
        </div>
        <div className="flex sm:justify-start items-center font-medium text-white hover:underline">
          <a href="mailto:info@cloudmerge.in">info@cloudmerge.in</a>
        </div>

        {/* Address */}
        <div className="flex sm:justify-end items-start gap-2 font-semibold text-white uppercase">
          <FaMapMarkerAlt className="text-white mt-1" />
          Address:
        </div>
        <div className="flex sm:justify-start font-medium text-white leading-snug">
          Plot no 6b/16, Saket Colony,
          <br />
          Kapra, Hyderabad - 500062
        </div>
      </div>
    </footer>
  );
}
