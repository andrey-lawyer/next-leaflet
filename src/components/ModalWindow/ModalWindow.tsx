import { Portal } from "../Portal";

import { ModalWindowProps } from "@/types/typeProps";
import IconClose from "/public/icons/icon_close.svg";

export const ModalWindow: React.FC<ModalWindowProps> = ({
  onModalClose,
  showModal,
  children,
  className = "",
}) => {
  return (
    <Portal onModalClose={onModalClose} showModal={showModal}>
      <div
        className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40  bg-white   ${className}`}
      >
        <button
          type="button"
          aria-label="Кнопка закриття модального вікна"
          onClick={onModalClose}
          className="absolute  top-[20px] z-20 h-fit w-fit right-[20px]"
        >
          <IconClose width={28} height={28} />
        </button>
        <div className="max-h-[calc(100vh-80px-60px-32px)] overflow-auto p-[30px] pt-[70px]">
          {children}
        </div>
      </div>
    </Portal>
  );
};
