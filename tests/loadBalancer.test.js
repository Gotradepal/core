const distributeLoad = require('../loadBalancer');

describe('Load Balancer - distributeLoad Function', () => {
  test('distributes requests evenly across nodes', () => {
    const nodes = ['Node1', 'Node2', 'Node3'];
    const requests = [1, 2, 3, 4, 5];
    const result = distributeLoad(nodes, requests);

    expect(result).toEqual(['Node1', 'Node2', 'Node3', 'Node1', 'Node2']);
  });

  test('handles no nodes scenario', () => {
    const nodes = [];
    const requests = [1, 2, 3];
    const result = distributeLoad(nodes, requests);

    expect(result).toEqual([]);
  });

  test('handles no requests scenario', () => {
    const nodes = ['Node1', 'Node2'];
    const requests = [];
    const result = distributeLoad(nodes, requests);

    expect(result).toEqual([]);
  });
});