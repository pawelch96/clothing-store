import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
  CartItemName,
  CartItemPrice
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <CartItemName>{name}</CartItemName>
      <CartItemPrice>
        {quantity} x ${price}
      </CartItemPrice>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default React.memo(CartItem);
