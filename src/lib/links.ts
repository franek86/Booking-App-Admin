import { Earth, LandPlot, MapPinHouse, Sailboat } from "lucide-react";

type linksProps = {
  href: string;
  label: string;
  icon?: any;
};

export const mainNavLinks: linksProps[] = [
  { href: "/destinations ", label: "Destinations" },
  { href: "/yachts ", label: "Yachts" },
  { href: "/blog ", label: "Blog" },
  { href: "/about ", label: "About us" },
  { href: "/contact ", label: "Contact" },
];

export const footerLinks: linksProps[] = [
  { href: "/support", label: "Support" },
  { href: "/help-center ", label: "Help center" },
  { href: "/customer ", label: "Customer" },
  { href: "/reach-us ", label: "Reach out to us" },
];

export const admminLinks: linksProps[] = [
  { href: "/countries", label: "Countries", icon: Earth },
  { href: "/saling-area ", label: "Salings area", icon: LandPlot },
  { href: "/bases ", label: "Bases", icon: MapPinHouse },
  { href: "/yachts ", label: "Yachts", icon: Sailboat },
];
