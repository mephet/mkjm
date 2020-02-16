import { l2AssetClassList, initialSeedData } from "../pages/PortfolioOptimization/PortfolioSeed";
import { OptimizationFormatter } from "../pages/PortfolioOptimization/Util";

const { client_portfolio: clientPortfolio, fund_list: fundList, model_portfolio: modelPortfolio } = initialSeedData;

const initialState = {
    l2AssetClassList,
    clientPortfolio,
    fundList : OptimizationFormatter.toFundDfFormat(fundList, l2AssetClassList),
    modelPortfolio
}

const optimizationReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_FUND_LIST':
            return {
                ...state,
                fundList: [...action.payload]
            }
        default:
            return state;
    }
}

export default optimizationReducer;