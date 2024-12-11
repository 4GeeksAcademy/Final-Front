import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { SparklineChart } from "../pages/sparklineChart";
import { TradeModal } from "./tradeModal";

export const Wallet = () => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(null);

  useEffect(() => {
    // Fetch wallet price and normal data for each coin
    store.walletIds.forEach((wallet) => {
      actions.getWalletPriceData(wallet.coin_id);
      actions.getWalletNormalData(wallet.coin_id);
    });
  }, [store.walletIds, actions]);

  const handleOpenModal = (coin) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };

  const handleTrade = (type, quantity) => {
    console.log(`${type.toUpperCase()} ${quantity} of ${selectedCoin.name}`);
    actions.tradeCoin(selectedCoin.id, type, quantity);
    setIsModalOpen(false);
  };

  if (!Array.isArray(store.walletNormalData) || store.walletNormalData.length === 0) {
    return <p>Loading wallet data...</p>;
  }

  return (
    <div className="wallet-page">
      <h2>Your Wallet</h2>
      <table className="wallet-table" style={{ width: "90vw" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Current Price</th>
            <th>Quantity Owned</th>
            <th>Total Spent</th>
            <th>Graph (7d)</th>
            <th>Quick Actions</th>
            <th>Market Details</th>
          </tr>
        </thead>
        <tbody>
          {store.walletNormalData.length === 0 ? (
            <tr>
              <td colSpan="7">No wallet data available</td>
            </tr>
          ) : (
            store.walletNormalData.map((walletArray, index) => {
              // Make sure walletArray is an array
              //if (!Array.isArray(walletArray)) return null;

              return (
                <tr key={walletArray.id}>
                  <td>
                    <div className="wallet-info">
                      <h5 className="wallet-name">{walletArray.name}</h5>
                      <div className="wallet-symbol">
                        {walletArray.symbol.toUpperCase()}
                      </div>
                      <img
                        src={walletArray.image}
                        alt={walletArray.name}
                        className="wallet-image"
                      />
                    </div>
                  </td>
                  <td>${walletArray.current_price?.toLocaleString() || "N/A"}</td>
                  <td>{walletArray.quantity_owned || 0}</td>
                  <td>
                    ${(
                      walletArray.quantity_owned * walletArray.purchase_price ||
                      0
                    ).toLocaleString()}
                  </td>
                  <td>
                    <SparklineChart
                      data={walletArray.sparkline_in_7d?.price || []}
                      width={150}
                      height={50}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleOpenModal(walletArray)}
                    >
                      Trade
                    </button>
                  </td>
                  <td>
                    <Link to={`/coin/${walletArray.id}`} className="btn btn-secondary">
                      More Information
                    </Link>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {isModalOpen && selectedCoin && (
        <TradeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onTrade={handleTrade}
          coinName={selectedCoin.name}
        />
      )}
    </div>
  );
};
