import React, { useCallback, useState } from "react";
import "./Sidebar.scss";
import NavItem from "./_navItem";
import UsersIcon from "../../images/users-icon.png";
import { useNavigate } from "react-router-dom";

type Props = {};

const SideNavbar = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState("Users");
  const [closeSideNav, setCloseSideNav] = useState(false);
  const navigate = useNavigate();

  const handleSelectItem = useCallback((item: string, link: string) => {
    setSelectedItem(item);
    navigate(link);
  }, []);

  return (
    <div className={`sidenav-container ${closeSideNav && "close-side-nav"}`}>
      <div className="sidenav-child">
        <div
          className="toggle-sidenav"
          onClick={() => {
            //sample on how to hide the sidenav, you can run this function when on small screens
            setCloseSideNav(!closeSideNav);
          }}
        ></div>
        <div className="nav-switch-org">
          <NavItem icon={UsersIcon} title="Switch Organizations" />
        </div>
        <div className="nav-dashboard">
          <NavItem icon={UsersIcon} title="Dashboard" />
        </div>
        <section>
          <p className="nav-title">CUSTOMERS</p>

          {NAV_ITEM_CUSTOMERS.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>

        <section>
          <p className="nav-title">BUSINESSES</p>

          {NAV_ITEM_BUSINESSES.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>

        <section>
          <p className="nav-title">SETTINGS</p>

          {NAV_ITEM_SETTINGS.map((item) => (
            <NavItem
              icon={item.icon}
              title={item.title}
              link={item.link}
              selected={selectedItem === item.title}
              onSelect={handleSelectItem}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SideNavbar;

const NAV_ITEM_CUSTOMERS = [
  {
    icon: UsersIcon,
    title: "Users",
    link: "/dashboard/users",
  },
  {
    icon: UsersIcon,
    title: "Guarantors",
    link: "/dashboard/guarantors",
  },
  {
    icon: UsersIcon,
    title: "Loans",
    link: "/dashboard/loans",
  },
  {
    icon: UsersIcon,
    title: "Decision Models",
    link: "/dashboard/decisions",
  },
  {
    icon: UsersIcon,
    title: "Savings",
    link: "/dashboard/savings",
  },
  {
    icon: UsersIcon,
    title: "Loan Requests",
    link: "/dashboard/loan-request",
  },
  {
    icon: UsersIcon,
    title: "Whitelist",
    link: "/dashboard/whitelist",
  },
  {
    icon: UsersIcon,
    title: "Karma",
    link: "/dashboard/karma",
  },
];

const NAV_ITEM_BUSINESSES = [
  {
    icon: UsersIcon,
    title: "Organization",
    link: "/dashboard/organization",
  },
  {
    icon: UsersIcon,
    title: "Loan Products",
    link: "/dashboard/loan-products",
  },
  {
    icon: UsersIcon,
    title: "Savings Produts",
    link: "/dashboard/savings",
  },
  {
    icon: UsersIcon,
    title: "Fees and Charges",
    link: "/dashboard/fees",
  },
  {
    icon: UsersIcon,
    title: "Transactions",
    link: "/dashboard/transactions",
  },
  {
    icon: UsersIcon,
    title: "Services",
    link: "/dashboard/services",
  },
  {
    icon: UsersIcon,
    title: "Service Account",
    link: "/dashboard/service",
  },
  {
    icon: UsersIcon,
    title: "Settlements",
    link: "/dashboard/settlements",
  },
  {
    icon: UsersIcon,
    title: "Reports",
    link: "/dashboard/reports",
  },
];

const NAV_ITEM_SETTINGS = [
  {
    icon: UsersIcon,
    title: "Preferences",
    link: "/dashboard/preferences",
  },
  {
    icon: UsersIcon,
    title: "Fees and Pricing",
    link: "/dashboard/fees",
  },
  {
    icon: UsersIcon,
    title: "Audit Logs",
    link: "/dashboard/audit",
  },
  {
    icon: UsersIcon,
    title: "System Messages",
    link: "/dashboard/messages",
  },
];
