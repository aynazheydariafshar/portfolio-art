const { default: Footer } = require("./footer");
const { default: Navbar } = require("./navbar");

const withLayout = (WrappedComponent) => {
    const Layout = () => {
      return (
        <>
          {/* Render your layout components */}
          <header>
            <Navbar />
          </header>
          <main>
            <WrappedComponent />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      );
    };
  
    return Layout;
  };

export default withLayout