// Markets Page - TradingView Charts
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Initialize TradingView widgets
    function createTradingViewWidget(containerId, symbol) {
        if (typeof TradingView !== 'undefined') {
            new TradingView.widget({
                "width": "100%",
                "height": 500,
                "symbol": symbol,
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": document.body.classList.contains('dark-mode') ? "dark" : "light",
                "style": "1",
                "locale": "en",
                "toolbar_bg": "#f1f3f6",
                "enable_publishing": false,
                "allow_symbol_change": true,
                "container_id": containerId
            });
        }
    }

    // Load charts
    setTimeout(() => {
        createTradingViewWidget('tradingview_eurusd', 'FX:EURUSD');
        createTradingViewWidget('tradingview_gbpusd', 'FX:GBPUSD');
        createTradingViewWidget('tradingview_usdjpy', 'FX:USDJPY');
        createTradingViewWidget('tradingview_nasdaq', 'NASDAQ:IXIC');
        createTradingViewWidget('tradingview_aapl', 'NASDAQ:AAPL');
        createTradingViewWidget('tradingview_tsla', 'NASDAQ:TSLA');
        createTradingViewWidget('tradingview_gold', 'TVC:GOLD');
        createTradingViewWidget('tradingview_oil', 'TVC:USOIL');
        createTradingViewWidget('tradingview_btc', 'BITSTAMP:BTCUSD');
        createTradingViewWidget('tradingview_eth', 'BITSTAMP:ETHUSD');
    }, 100);
});
