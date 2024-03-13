import { CardContainer } from "./components/CardContainer";
import { Header } from "./components/Header";
// import  Modal  from "./components/Modal";
import { ShoeContextProvider } from "./store/ShoeContext";

function App() {
  return (
    <div className=" bg-back">
      <ShoeContextProvider>
        <Header />
        <CardContainer />
        {/* <Modal /> */}
      </ShoeContextProvider>
    </div>
  );
}

export default App;
