// Import components
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";

// Import the styles
import "../styles/pages/Style-HomePage.scss";

import {useCurrentAccount} from "@mysten/dapp-kit";
import {Link} from "react-router-dom";

function Home() {

    const account = useCurrentAccount();

    return (
        <>
            <NavBar/>

            {
                account ? (
                    <div className="container">
                        <Link to={"/test"}>
                            Try transaction
                        </Link>
                    </div>
                ) : (
                    <div className="container">
                        <div className="content">
                            <div>
                                <div>
                                    <h2>Connect Wallet</h2>
                                    <p>Connect your wallet to see your account details.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            <Footer/>
        </>
    );
}

export default Home;