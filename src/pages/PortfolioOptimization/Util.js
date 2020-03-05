import { l2AssetClassList } from './PortfolioSeed.js';


export function getL2Gaps(clientJson, modelJson, fundJson, allocIndex) {

    let modelAlloc = [];
    l2AssetClassList.forEach(asset => {
        modelAlloc[asset] = modelJson[0][asset];
    })

    let clientAlloc = [];
    l2AssetClassList.forEach(asset => {
        clientAlloc[asset] = 0;
    })

    clientJson.forEach(c => {
        fundJson.forEach(f => {
            if (c["Fund Name"] === f["Fund Name"]) {
                l2AssetClassList.forEach(a => {
                    let currVal = clientAlloc[a];
                    clientAlloc[a] = currVal + c[allocIndex] * f[a];
                })
            }
        })
    })
    const gap = calculateGapDiff(clientAlloc, modelAlloc, l2AssetClassList);
    return gap;
}

function calculateGapDiff(clientAlloc, modelAlloc, l2AssetClassList) {
    let outputAlloc = [];
    l2AssetClassList.forEach(asset => {
        outputAlloc[asset] = Math.abs(clientAlloc[asset] - modelAlloc[asset]);
    })
    const reducer = (acc, curr) => acc + curr;
    let gap = Object.values(outputAlloc).reduce(reducer);
    return gap;
}

export function getAllocationStatistics(allocationOutput) {
    if (allocationOutput) {
        const txns = allocationOutput.filter(o => o["Txn Count"] > 0).length;
        const optimizedList = allocationOutput.filter(o => o["Optimized Allocation"] > 0)
        const aumTurnover = allocationOutput.filter(o => o["Allocation delta"] !== 0)
            .map(f => f["Allocation delta"])
            .reduce((acc, curr) => Math.abs(acc) + Math.abs(curr))
        return {
            txns,
            optimizedList,
            aumTurnover
        }
    }
    return null;
}

export class OptimizationFormatter {
    static toPieDataFormat(outputAllocation) {
        return outputAllocation.map((o, idx) => {
            return {
                "id": o["Fund Name"],
                "label": o["Fund Name"],
                "value": Number((o["Optimized Allocation"] * 100).toFixed(2))
            }
        })
    }

    static toClientDfFormat(clientHoldings) {
        return clientHoldings.map((holding, idx) => {
            return {
                "key": idx,
                "Fund Code": holding.fund_name,
                "Fund Name": holding.fund_name,
                "Frozen Status": holding.is_frozen,
                "Fund Allocation": holding.percent
            }
        })
    }

    static toFundDfFormat(fundAllocation, l2AssetClassList) {
        let fundOutput = [];
        fundAllocation.forEach((fund, idx) => {
            let tmpObj = {};
            tmpObj['key'] = idx;
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
        let modelOutput = { key: 0 };
        l2AssetClassList.forEach(ac => {
            modelOutput[ac] = 0;
            modelAllocation.forEach(asset => {
                if (asset.name === ac) {
                    modelOutput[ac] = asset.percent;
                }
            });
        });
        return [modelOutput];
    }
}