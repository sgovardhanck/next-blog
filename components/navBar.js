import React from "react";
import Link from "next/link";
import Mode from "./mode";
export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About-us">About Us</Link>
        </li>
      </ul>
      <Mode />
      <style jsx>
        {`
          nav {
            justify-content: space-between;
          }
          li {
            display: inline;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li:not(:first-child) {
            margin-left: 0.75rem;
          }
        `}
      </style>
    </nav>
  );
}
