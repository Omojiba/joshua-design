import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Header from "./components/layout/Header";
import Home from "./components/pages/home-page/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Works from "./components/pages/my-works/Works";
import Resume from "./components/pages/my-resume/Resume";
import Footer from "./components/layout/Footer";
import B54 from "./components/pages/my-works/b54/B54";
import Cryptopower from "./components/pages/my-works/cryptopower/Cryptopower";
import Fixus from "./components/pages/my-works/fixus/Fixus";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Space Grotesk", "sans-serif"].join(","),
      textBody: {
        fontFamily: ["Axiforma", "sans-serif"].join(","),
        color: "#BCBCBC",
      },
      customLink: {
        fontFamily: ["Axiforma", "sans-serif"].join(","),
        color: "#FFFFFF",
        fontSize: "14px",
      },
      navLink: {
        color: "#9A9999",
        fontFamily: ["Space Grotesk", "sans-serif"].join(","),
        fontWeight: "500",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <ToastContainer />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about-me" element={<About />} />
            <Route path="contact-me" element={<Contact />} />
            <Route path="my-work" element={<Works />} />
            <Route path="my-work/b54" element={<B54 />} />
            <Route path="my-work/cryptopower" element={<Cryptopower />} />
            <Route path="my-work/fixus" element={<Fixus />} />
            <Route path="resume" element={<Resume />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
