import React from "react";
import { navigationArrayFooter } from "@/app/Store/localStore";
import Link from "next/link";
const NavigationFooter = () => {
  const renderNavigationItems = () => {
    return navigationArrayFooter.map((item) => {
      return (
        <Link key={item.id} href={item.href}>
          {item.title}
        </Link>
      );
    });
  };

  return <nav>{renderNavigationItems()}</nav>;
};

export default NavigationFooter;
