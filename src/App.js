import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    const loadProvider = async () => {
      // with metamask we have an access to window.ethereum and to window.web3
      // metamask inject a global API into website
      // this API allows websites to request access to the user's accounts, read data to blockchain, etc.
    };
    loadProvider();
  }, []);

  return (
    <>
      <div className="faucet-wrapper">
        <div className="faucet">
          <div className="balance-view is-size-2">
            Current Balance: <strong>10</strong> ETH
          </div>
          <button
            onClick={async () => {
              const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
              });
              console.log(accounts);
            }}
            className="btn mr-2">
            Enable Etherum
          </button>
          <button className="btn mr-2">Donate</button>
          <button className="btn">Withdraw</button>
        </div>
      </div>
    </>
  );
}

export default App;
