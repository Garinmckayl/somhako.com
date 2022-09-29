import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-br from-black to-purple-900">
      <Navbar />
      <main>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
