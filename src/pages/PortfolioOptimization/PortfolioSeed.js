
const ASSET_CLASS_IDENTIFIER = {
    FIXED_INCOME: {
        INC_ALTV: 'INC_ALTV',
        INC_GLOBAL_DIV: 'INC_GLOBAL_DIV'
    },
    COMMODITIES: {
        THEMATIC_COMM: 'THEMATIC_COMM'
    },
    EQUITIES: {
        NA_EQ: 'NA_EQ',
        JP_EQ: 'JP_EQ',
        AXJ_EQ: 'AXJ_EQ',
        EUXUK_EQ: 'EUXUK_EQ',
        CN_HK_EQ: 'CN_HK_EQ',
        GLB_EQ: 'GLB_EQ',
        OTHER_EM_EQ: 'OTHER_EM_EQ',
        THEMATIC_EQ: 'THEMATIC_EQ',
        UK_EQ: 'UK_EQ'
    },
    BONDS: {
        INC_DMHY_BOND: 'INC_DMHY_BOND',
        INC_DMIG_BOND: 'INC_DMIG_BOND',
        INC_EM_BOND: 'INC_EM_BOND'
    },
    OTHERS: {
        CASH: 'CASH',
        OTHERS: 'OTHERS',
        THEMATIC_OTHERS: 'THEMATIC_OTHERS'
    }
}



export const l2AssetClassList = [
    ...Object.values(ASSET_CLASS_IDENTIFIER.EQUITIES),
    ...Object.values(ASSET_CLASS_IDENTIFIER.FIXED_INCOME),
    ...Object.values(ASSET_CLASS_IDENTIFIER.BONDS),
    ...Object.values(ASSET_CLASS_IDENTIFIER.OTHERS),
    ...Object.values(ASSET_CLASS_IDENTIFIER.COMMODITIES)
]

// export const l2AssetClassList = ['AXJ_EQ', 'CASH', 'CN_HK_EQ', 'EUXUK_EQ', 'GLB_EQ', 'INC_ALTV',
//     'INC_DMHY_BOND', 'INC_DMIG_BOND', 'INC_EM_BOND', 'INC_GLOBAL_DIV', 'INC_MULTI_ASSET',
//     'JP_EQ', 'NA_EQ', 'OTHER_EM_EQ', 'OTHERS', 'THEMATIC_COMM', 'THEMATIC_EQ', 'THEMATIC_OTHERS', 'UK_EQ'];

export const initialSeedData = {
    "client_portfolio": {
        "holdings": [
            {
                "fund_name": "Fund A",
                "is_frozen": "N",
                "percent": 0.5
            },
            {
                "fund_name": "Fund C",
                "is_frozen": "N",
                "percent": 0.5
            }
        ]
    },
    "model_portfolio": {
        "model_allocation": [
            {
                "name": ASSET_CLASS_IDENTIFIER.EQUITIES.AXJ_EQ,
                "percent": 0.15
            },
            {
                "name": ASSET_CLASS_IDENTIFIER.OTHERS.CASH,
                "percent": 0.01
            },
            {
                "name": ASSET_CLASS_IDENTIFIER.BONDS.INC_EM_BOND,
                "percent": 0.19
            },
            {
                "name": ASSET_CLASS_IDENTIFIER.BONDS.INC_DMIG_BOND,
                "percent": 0.10
            },
            {
                "name": ASSET_CLASS_IDENTIFIER.EQUITIES.NA_EQ,
                "percent": 0.35
            },
            {
                "name": ASSET_CLASS_IDENTIFIER.EQUITIES.JP_EQ,
                "percent": 0.20
            }
        ]
    },
    "fund_list": [
        {
            "name": "Fund A",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.AXJ_EQ,
                    "percent": 0.3
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.CN_HK_EQ,
                    "percent": 0.7
                }
            ]
        },
        {
            "name": "Fund B",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.THEMATIC_EQ,
                    "percent": 1.0
                }
            ]
        },
        {
            "name": "Fund C",
            "allocation": [
                {
                    "asset_name":ASSET_CLASS_IDENTIFIER.EQUITIES.AXJ_EQ,
                    "percent": 0.22
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.GLB_EQ,
                    "percent": 0.78
                }
            ]
        },
        {
            "name": "Fund D",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.BONDS.INC_DMHY_BOND,
                    "percent": 0.4
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.BONDS.INC_DMIG_BOND,
                    "percent": 0.6
                }
            ]
        },
        {
            "name": "Fund E",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.COMMODITIES.THEMATIC_COMM,
                    "percent": 0.12
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.BONDS.INC_EM_BOND,
                    "percent": 0.48
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.FIXED_INCOME.INC_GLOBAL_DIV,
                    "percent": 0.4
                }
            ]
        },
        {
            "name": "Fund F",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.AXJ_EQ,
                    "percent": 0.30
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.GLB_EQ,
                    "percent": 0.7
                }
            ]
        },
        {
            "name": "Fund G",
            "allocation": [
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.JP_EQ,
                    "percent": 0.42
                },
                {
                    "asset_name": ASSET_CLASS_IDENTIFIER.EQUITIES.THEMATIC_EQ,
                    "percent": 0.58
                }
            ]
        }
    ]
}