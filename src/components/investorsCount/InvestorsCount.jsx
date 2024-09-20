import "./investorsCount.css";

const InvestorsCount = () => {
    return (
        <section className="investorsCount">
            <div className="container counter">
                <div>
                    <h2>21</h2>
                    <span>Business Investors</span>
                </div>
                <div>
                    <h2>119,698,52</h2>
                    <span>Available Shares</span>
                </div>
                <div>
                    <h2>2026</h2>
                    <span>Total Shares</span>
                </div>
            </div>
        </section>
    )
}

export default InvestorsCount;