import React, { useEffect, useState } from "react";

export const Header = () => {
  const [header, setheader] = useState("");
  useEffect(() => {
    if (/decks/.test(window.location.href)) {
      setheader("Cards");
    } else {
      setheader("Decks");
    }
  }, [window.location.href]);
  return (
    <div>
      <h1>{header}</h1>
    </div>
  );
};
