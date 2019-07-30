class ItemApi {

  static fetchItems() {
    return fetch('items.json').then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }

}

export default ItemApi
