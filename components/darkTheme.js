import React from "react";

export default function DarkTheme() {
  return (
    <div>
      <style jsx global>
        {`
          :root {
            --background-color: black;
            --color: white;
            --text-color: rgb(197, 197, 33);
          }
        `}
      </style>
    </div>
  );
}
