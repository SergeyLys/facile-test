import Api from '../api';

describe('API client', () => {
  const mockItem = {"id":1,"name":"Casmerodius albus","author":"Obidiah Vass","isbn":"835575894-3","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","cover":"http://dummyimage.com/100x100.png/cc0000/ffffff","genre":"Comedy|Romance","price":60};
  test('should return all entities', () => {
    expect.assertions(1);
    return Api.getAll().then(data => {
      expect(data).toContainEqual(mockItem);
    });
  });
  test('should return entity by isbn', () => {
    expect.assertions(1);
    return Api.buyOne("835575894-3").then(data => {
      expect(data).toEqual(mockItem);
    });
  });
});
