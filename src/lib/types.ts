import { Control, UseFormRegister, UseFormSetValue } from "react-hook-form";

export type ToastMessageType = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose?: () => void;
};

export type RegisterUserType = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export interface userState {
  firstname: string;
  accessToken: string;
  isLoggedIn: boolean;
}

export type HeroProps = {
  title: string;
  subtitle?: string;
  cta?: string;
  link?: string;
  bgImage?: string;
};

export type SmallSearchFormData = {
  destination: { label: string; value: string } | null;
  cabins: { label: string; value: string } | null;
  departureDate: Date;
  returnDate: Date;
};

export type InputProps = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  className?: string;
  register: UseFormRegister<any>;
};

export type SelectProps = {
  label: string;
  options: Array<any>;
  value?: string;
  name: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  setValue?: UseFormSetValue<any>;
  control: Control<any>;
  placeholder?: string;
  className?: string;
};

export type AccessTokenType = {
  accessToken: string | null;
};

export type SelectInputType = {
  label: string;
  value: string;
};

export type CountiresType = {
  _id: string;
  name: string;
  shortCountryCode: string;
  longCountryCode: string;
  iconFlag?: string;
};

export type CountriesResponseType = {
  countries: CountiresType[];
  page: number;
  total: number;
  totalPages: number;
  perPage: number;
};

export type DestinationProps = {
  title: string;
  subTitle?: string;
  bgImage?: string;
  mainImage?: string;
  popular?: boolean;
  description?: string;
  shortDescription?: string;
  yachtsCount?: number;
  slug?: string;
};

export type YachtType = {
  _id: string;
  name: string;
  location: string;
  minPrice: number;
  mainImage: string;
  rating: number;
};
