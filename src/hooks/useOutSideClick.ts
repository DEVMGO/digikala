import { useEffect, useRef, useState } from "react";

const useOutSideClick = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [openCombo, setOpenCombo] = useState<boolean>(false);

  const handleOutsideClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpenCombo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { ref, openCombo, setOpenCombo };
};

export default useOutSideClick;
