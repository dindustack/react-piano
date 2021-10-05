import "./style.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-body">
        <h2>© {currentYear} Dindustack. All rights reserved</h2>
      </div>
    </footer>
  );
};
