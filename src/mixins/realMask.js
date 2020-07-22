export default {
  filters: {
    realMask(price) {
      return 'R$ ' + price.toFixed(2).toString().replace('.', ',')
    }
  }
}