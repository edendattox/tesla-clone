import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import HeaderBlock from "../../components/HeaderBlock/HeaderBlock";
import Header from "../../components/Header/Header";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && <Menu />}
      <HeaderBlock />
    </div>
  );
};

export default Home;
