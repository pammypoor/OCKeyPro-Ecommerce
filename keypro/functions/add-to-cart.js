const { createCartWithItem } = require('./utils/createCartWithItem')
const { addItemToCart } = require('./utils/addItemToCart')

exports.handler = async (event) => {
  const { cartId, itemId, quantity } = JSON.parse(event.body)

  if (cartId) {
    console.log('--------------------------------')
    console.log('Adding item to existing cart...')
    console.log('--------------------------------')

    const shopifyResponse = await addItemToCart({
      cartId,
      itemId,
      quantity,
    })

    return {
      statusCode: 200,
      body: JSON.stringify(shopifyResponse.cartLinesAdd.cart),
    }
  } else {
    console.log('--------------------------------')
    console.log('Creating new cart with item...')
    console.log('--------------------------------')
    const createCartResponse = await createCartWithItem({
      itemId,
      quantity,
    })

    return {
      statusCode: 200,
      body: JSON.stringify(createCartResponse.cartCreate.cart),
    }
  }
}