module.exports = function distributeLoad(nodes, requests) {
  const results = [];
  if (!nodes.length) return results;
  
  for (let i = 0; i < requests.length; i++) {
    results.push(nodes[i % nodes.length]);
  }

  return results;
};