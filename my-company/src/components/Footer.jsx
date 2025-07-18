function Footer() {
  return (
    <footer
      style={{backgroundColor: "#eee", padding: "10px", textAlign: "center"}}
    >
      <p>© {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
