import { useEffect, useRef, useState } from "react";
import { UserContainer, Image, UserWrapper } from "./User.styled";

export function User() {
  const [name] = useState("");
  const [image, setImage] = useState(
    localStorage.getItem("userImage") ||
      `${import.meta.env.BASE_URL}no-profile-picture.png`,
  );
  const fileInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("userImage", image);
  }, [image]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <UserWrapper>
        <UserContainer>
          <Image
            src={image}
            onClick={handleImageClick}
            style={{ cursor: "pointer" }}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          {name}
        </UserContainer>
      </UserWrapper>
    </>
  );
}
