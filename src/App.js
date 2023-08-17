import {Container} from "react-bootstrap";
import NavBar from "./components/NavBar";
import TractorCarousel from "./components/TractorCarousel";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import Contacts from "./components/Contacts";
import CreateRequest from "./components/CreateRequest";

function App() {
    return (
        <Container>
            <Contacts/>
            <NavBar/>
            <TractorCarousel/>
            <Catalog/>
            <CreateRequest/>
            {/*<FAQ/>*/}
            <Footer/>
        </Container>
    );
}

export default App;
