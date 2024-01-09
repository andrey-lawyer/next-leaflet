import { Dispatch, SetStateAction } from "react";
import { IAdverts } from "./typesAdverts";

export interface ISearchPopsType {
  setPosition: Dispatch<SetStateAction<string[]>>;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export interface IMAPProps {
  setAccommodationsFilter: Dispatch<IAdverts[]>;
  accommodationType: string;
  cost: string;
}

export interface IFilterProps {
  setAccommodationType: Dispatch<string>;
  setCost: Dispatch<string>;
}

export interface ICardsProps {
  accommodationsFilter: IAdverts[];
}

export interface ModalWindowProps {
  onModalClose: () => void;
  showModal: boolean;
  children: React.ReactNode;
  className?: string;
}

export type IStatus = "entering" | "entered" | "exiting" | "exited" | string;

export interface PortalProps {
  children: React.ReactNode;
  onModalClose: () => void;
  showModal: boolean;
  className?: string;
}

export interface IFormProps {
  setRepeat: Dispatch<SetStateAction<boolean>>;
}
