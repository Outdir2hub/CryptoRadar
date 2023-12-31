import React from 'react';
import '../../index.css'

const CoinsComponent = ({ data }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Logo</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price</th>
                    <th scope="col">24H %</th>
                    <th scope="col">Volume</th>
                    <th scope="col">Market Cap</th>
                </tr>
            </thead>
            <tbody>
                    {data.map((coin) => (
                        <tr key={coin.market_cap_rank}>
                            <th scope="row">{coin.market_cap_rank}</th>
                            <td><img src={coin.image} alt="coin-logo" className='coin-logo' /></td>
                            <td>{coin.symbol}</td>
                            <td>{coin.current_price.toLocaleString()} $</td>
                            <td>{coin.price_change_percentage_24h.toFixed(2)} %</td>
                            <td>{coin.total_volume.toLocaleString()}</td>
                            <td>{coin.market_cap.toLocaleString()} $</td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}

export default CoinsComponent;