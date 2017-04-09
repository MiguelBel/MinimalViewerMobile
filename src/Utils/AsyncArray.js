class AsyncArray {
  constructor(arr) {
    this.data = arr
  }

  filterAsync(predicate) {
    const data = Array.from(this.data)

    return Promise.all(data.map((element, index) => predicate(element, index, data)))
      .then(result => {
        return data.filter((element, index) => {
          return result[index]
        })
      })
  }
}

export default AsyncArray;
