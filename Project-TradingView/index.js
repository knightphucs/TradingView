new TradingView.widget(
    {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "240",
        "timezone": "Etc/Utc",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "withdateranges": true,
        "range": "ALL",
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "watchlist": [
            "BINANCE:BTCUSDT",
            "BINANCE:ETHUSDT",
            "BINANCE:BNBUSDT",
            "BINANCE:SUIUSDT",
            "BINANCE:STXUSDT",
            "BINANCE:XRPUSDT"
        ],
        "details": true,
        "hotlist": true,
        "calendar": true,
        "studies": [
            "STD;SMA"
        ],
        "container_id": "chart",
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650"
    }
);