import { useEffect, useState } from "react";
import { IAdverts } from "@/types/typesAdverts";
import { getAdverts } from "@/services/api";
import { toast } from "react-toastify";

export function useMapComponent(
  setAccommodationsFilter: Function,
  accommodationType: string,
  cost: string
) {
  const [showModal, setShowModal] = useState(false);
  const onModalClose = () => setShowModal(false);
  const handleModal = () => setShowModal(true);
  const [accommodations, setAccommodations] = useState<IAdverts[]>([]);
  const [loading, setLoading] = useState(false);
  const [repeat, setRepeat] = useState(false);

  useEffect(() => {
    const allAdverts = async (
      setAccommodationsFilter: Function,
      accommodationType: string,
      cost: string
    ) => {
      setLoading(true);
      try {
        const data: IAdverts[] = await getAdverts(accommodationType, cost);
        setAccommodations(data);
        setAccommodationsFilter(data);
      } catch (error) {
        if (error instanceof Error) toast(error.message);
      } finally {
        setLoading(false);
      }
    };
    allAdverts(setAccommodationsFilter, accommodationType, cost);
  }, [setAccommodationsFilter, repeat, accommodationType, cost]);

  return {
    showModal,
    onModalClose,
    handleModal,
    accommodations,
    loading,
    setRepeat,
  };
}
