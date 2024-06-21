import React from "react";
import { navigationArray } from "@/app/Store/localStore";
import Link from "next/link";
const Navigation = () => {
  const renderNavigationItems = () => {
    return navigationArray.map((item) => {
      return (
        <Link key={item.id} href={item.href}>
          {item.title}
        </Link>
      );
    });
  };

  return <nav>{renderNavigationItems()}</nav>;
};

export default Navigation;
