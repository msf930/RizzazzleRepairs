import React from "react";

function Footer() {
  return (
    <div className="footer">
      <footer class="py-2 bg-light fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-black">
            Rizzazzle Repairs {(new Date().getFullYear())}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;