// components/Footer.tsx

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        fontSize: "0.8rem",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} D.Node Website. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
