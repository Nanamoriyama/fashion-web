"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-white w-full py-4">
      <div className="flex flex-col md:flex-row justify-evenly md:space-x-4 m-4 mx-3 p-2">
        {[
          {
            title: "OUR BOUTIQUES",
            links: [
              { name: "Our company", url: "#our-company" },
              { name: "Sustainability", url: "#sustainability" },
              { name: "Visit showroom", url: "#visit-showroom" },
              { name: "Blog", url: "#blog" },
            ],
          },
          {
            title: "CUSTOMER CARE",
            links: [
              { name: "Return & refunds", url: "#return-refunds" },
              { name: "Track my order", url: "#track-order" },
              { name: "Help & FAQs", url: "#help-faqs" },
              { name: "Contact Us", url: "#contact-us" },
            ],
          },
          {
            title: "SHOPPING WITH US",
            links: [
              { name: "Delivery information", url: "#delivery-info" },
              { name: "Payment & Security", url: "#payment-security" },
            ],
          },
          {
            title: "THE HOUSE OF DIOR",
            links: [
              { name: "Maison", url: "maison" },
              { name: "Tables", url: "#tables" },
              { name: "Sofas", url: "#sofas" },
              { name: "Lighting", url: "#lighting" },
            ],
          },
        ].map((section, index) => (
          <div key={index} className="p-2 w-full md:w-auto md:flex-1">
            <div
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection(index)}
            >
              <span className="font-sm font-light">{section.title}</span>
              <span className="md:hidden">
                {openSection === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <hr className="block md:hidden my-2" />
            <div
              className={`${
                openSection === index ? "block" : "hidden"
              } md:block`}
            >
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-1">
                    <a
                      href={link.url}
                      className="font-extralight hover:underline cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
