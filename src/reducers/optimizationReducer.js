import { l2AssetClassList, initialSeedData } from "../pages/PortfolioOptimization/PortfolioSeed";
import { OptimizationFormatter } from "../pages/PortfolioOptimization/Util";

const { client_portfolio: clientPortfolio, fund_list: fundList, model_portfolio: modelPortfolio } = initialSeedData;

const initialState = {
    l2AssetClassList,
    clientPortfolio: OptimizationFormatter.toClientDfFormat(clientPortfolio.holdings),
    fundList: OptimizationFormatter.toFundDfFormat(fundList, l2AssetClassList),
    modelPortfolio: OptimizationFormatter.toModelDfFormat(modelPortfolio.model_allocation, l2AssetClassList)
}

const optimizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FUND_LIST':
            return {
                ...state,
                fundList: [...action.payload]
            }
        case 'UPDATE_MODEL_PORTFOLIO':
            return {
                ...state,
                modelPortfolio: [...action.payload]
            }
        case 'UPDATE_CLIENT_PORTFOLIO':
            return {
                ...state,
                clientPortfolio: [...action.payload]
            }
        default:
            return state;
    }
}

export default optimizationReducer;