import { useState } from "react";

export function useForm() {
  const [nameImage, setNameImage] = useState("");
  const [position, setPosition] = useState<string[]>([]);
  const [text, setText] = useState<string>("");

  let inputBase = "paragraph field-user";
  let nameFile = "label-file_clue";
  return {
    setNameImage,
    inputBase,
    nameFile,
    nameImage,
    position,
    setPosition,
    text,
    setText,
  };
}
