export const CardsSum = (cards) => {
  let cardsCost = 0;
  cards.map((card) => {
    cardsCost = cardsCost + card.cost;
  });

  return cardsCost;
};
