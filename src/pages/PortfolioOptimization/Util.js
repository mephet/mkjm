export const constructBarDataFromMap = (aMap) => {
    let arr = [];
    aMap.forEach((v, k) => {
        arr.push({
            id: k,
            label: k,
            value: v
        })
    })
    return arr;
}


export const getL2Allocation = (l2List, clientHoldings, fundList) => {

    let fundMap = new Map();
    l2List.forEach(asset => {
        fundMap.set(asset, 0)
    });

    clientHoldings.forEach(h => {
        fundList.forEach(f => {
            if (h.fund_name === f.name) {
                f.allocation.forEach(a => {
                    let currVal = fundMap.get(a.asset_name);
                    fundMap.set(a.asset_name, currVal + a.percent * h.percent)
                })
            }
        })
    })

    return fundMap;
}

export class OptimizationFormatter {
    static toClientDfFormat(clientHoldings) {
        return clientHoldings.map(holding => {
            return {
                "Fund Code": holding.fund_name,
                "Fund Name": holding.fund_name,
                "Frozen Status": holding.is_frozen,
                "Fund Allocation": holding.percent
            }
        })
    }

    static toFundDfFormat(fundAllocation, l2AssetClassList) {
        let fundOutput = [];
        fundAllocation.forEach(fund => {
            let tmpObj = {};
            tmpObj["Fund Name"] = fund.name;
            l2AssetClassList.forEach(ac => {
                tmpObj[ac] = 0;
                fund.allocation.forEach(fac => {
                    if (ac === fac.asset_name) {
                        tmpObj[ac] = fac.percent;
                    }
                });
            });
            fundOutput.push(tmpObj);
        });
        return fundOutput;
    }

    static toModelDfFormat(modelAllocation, l2AssetClassList) {
        let modelOutput = {};
        l2AssetClassList.forEach(ac => {
            modelOutput[ac] = 0;
            modelAllocation.forEach(asset => {
                if (asset.name === ac) {
                    modelOutput[ac] = asset.percent;
                }
            });
        });
        console.log(modelOutput);
        return modelOutput;
    }
}