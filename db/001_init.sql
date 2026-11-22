CREATE TABLE IF NOT EXISTS subscriptions (
    id INTEGER PRIMARY KEY,
    subscription_name TEXT NOT NULL
        CHECK (length(subscription_name) BETWEEN 1 AND 200),
    billing_cycle TEXT NOT NULL DEFAULT 'monthly'
        CHECK (billing_cycle IN ('monthly', 'yearly')),
    next_billing_date TEXT NOT NULL,
    price REAL NOT NULL,
    subscription_status TEXT NOT NULL DEFAULT 'active'
        CHECK (subscription_status IN ('active', 'paused'))
) STRICT;