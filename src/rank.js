function estimateVoyageRisk(voyage) {
  let result = 1;
  result += voyage.length > 4 ? 2 : 0;
  result += voyage.length > 8 ? voyage.length - 8 : 0;
  result += ['china', 'east-indies'].includes(voyage.zone) ? 4 : 0;
  return Math.max(result, 0);
}

function hasChina(history) {
  return history.some(v => 'china' === v.zone);
}

function estimateCaptainHistoryRisk(voyage, history) {
  let result = 1;
  if (history.length < 5) {
    result += 4;
  }
  result += history.filter(v => v.profit < 0).length;
  if (voyage.zone === 'china' && hasChina(history)) {
    result -= 2;
  }
  return Math.max(result, 0);
}

function estimateVoyageProfitFactor(voyage, history) {
  let result = 2;
  result += voyage.zone === 'china' ? 1 : 0;
  result += voyage.zone === 'east-indies' ? 1 : 0;
  if (voyage.zone === 'china' && hasChina(history)) {
    result += 3;
    result += history.length > 10 ? 1 : 0;
    result += voyage.length > 12 ? 1 : 0;
    result -= voyage.length > 18 ? 1 : 0;
  } else {
    result += history.length > 8 ? 1 : 0;
    result -= voyage.length > 14 ? 1 : 0;
  }
  return result;
}

function rating(voyage, history) {
  const voyageProfitScore = estimateVoyageProfitFactor(voyage, history);
  const voyageRiskScore = estimateVoyageRisk(voyage);
  const captainHistoryRiskScore = estimateCaptainHistoryRisk(voyage, history);
  return voyageProfitScore * 3 > (voyageRiskScore + captainHistoryRiskScore * 2) ? 'A' : 'B';
}

module.exports = {
  rating
};
