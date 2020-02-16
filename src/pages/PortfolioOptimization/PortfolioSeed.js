export const l2AssetClassList = ['AXJ_EQ', 'CASH', 'CN_HK_EQ', 'EUXUK_EQ', 'GLB_EQ', 'INC_ALTV',
    'INC_DMHY_BOND', 'INC_DMIG_BOND', 'INC_EM_BOND', 'INC_GLOBAL_DIV', 'INC_MULTI_ASSET',
    'JP_EQ', 'NA_EQ', 'OTHER_EM_EQ', 'OTHERS', 'THEMATIC_COMM', 'THEMATIC_EQ', 'THEMATIC_OTHERS', 'UK_EQ'];

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
                "name": "AXJ_EQ",
                "percent": 0.15
            },
            {
                "name": "CASH",
                "percent": 0.01
            },
            {
                "name": "INC_EM_BOND",
                "percent": 0.19
            },
            {
                "name": "INC_DMIG_BOND",
                "percent": 0.10
            },
            {
                "name": "NA_EQ",
                "percent": 0.35
            },
            {
                "name": "JP_EQ",
                "percent": 0.20
            }
        ]
    },
    "fund_list": [
        {
            "name": "Fund A",
            "allocation": [
                {
                    "asset_name": "AXJ_EQ",
                    "percent": 0.3
                },
                {
                    "asset_name": "CN_HK_EQ",
                    "percent": 0.7
                }
            ]
        },
        {
            "name": "Fund B",
            "allocation": [
                {
                    "asset_name": "THEMATIC_EQ",
                    "percent": 1.0
                }
            ]
        },
        {
            "name": "Fund C",
            "allocation": [
                {
                    "asset_name": "EUXUK_EQ",
                    "percent": 0.22
                },
                {
                    "asset_name": "NA_EQ",
                    "percent": 0.78
                }
            ]
        },
        {
            "name": "Fund D",
            "allocation": [
                {
                    "asset_name": "INC_DMHY_BOND",
                    "percent": 0.4
                },
                {
                    "asset_name": "INC_DMIG_BOND",
                    "percent": 0.6
                }
            ]
        }
    ]
}