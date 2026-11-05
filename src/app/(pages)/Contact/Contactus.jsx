"use client";
import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import { InputField } from "@/app/components/InputField";

export default function Contactus() {
  return (
    // <div className="relative min-h-screen bg-white px-4 pt-32 sm:px-6 text-gray-900">
    <div className="container mx-auto bg-white sm:px-4 max-w-full">
      <Container className="md:w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-20">
            <div></div>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full m-3 p-2 border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full m-3 p-2 border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="Number"
                placeholder="Mobile"
                className="w-full m-3 p-2 border border-gray-400 rounded-md bg-gray-100 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex justify-end">
                <Button variant="primary" size="lg" type="button">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
