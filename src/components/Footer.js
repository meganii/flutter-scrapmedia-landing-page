import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; meganii.com 2020. All Rights Reserved.</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="/privacy">Privacy</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">Terms</a>
          </li>
          <li className="list-inline-item">
            <a href="/#">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
