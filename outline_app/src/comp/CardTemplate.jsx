import React, { useState } from 'react';

function CardTemplate() {
  const [cardData, setCardData] = useState({
    title: "",
    info: "",
    chara: ""
  });

  const [cardDraw, setCardDraw] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the current cardData to the cardDraw array
    setCardDraw((prevCards) => [...prevCards, cardData]);

    // Clear the input fields after submitting
    setCardData({
      title: "",
      info: "",
      chara: ""
    });
  }

  function deleteCard(index) {
    // You can use setCardDraw to remove the card at the specified index
    setCardDraw((prevCards) => prevCards.filter((_, i) => i !== index));
    alert("You deleted a card");
  }

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Scene Title:</label>
          <input
            className="add-scene-input"
            type="text"
            value={cardData.title}
            onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
          />
          <label>Scene Info:</label>
          <input
            className="add-scene-input"
            type="text"
            value={cardData.info}
            onChange={(e) => setCardData({ ...cardData, info: e.target.value })}
          />
          <label>Characters:</label>
          <input
            className="add-scene-input"
            type="text"
            value={cardData.chara}
            onChange={(e) => setCardData({ ...cardData, chara: e.target.value })}
          />
          <button className="add-scene-button" type='submit'>✔️</button>
        </form>
      </div>

      {cardDraw.map((card, index) => (
        <div className="card" key={index}>
          <h1 className="card-title">{card.title}</h1>
          <p className="card-text">{card.info}</p>
          <p className="card-characters">{card.chara}</p>
          <button className="delete-scene-button" onClick={() => deleteCard(index)}>🗑️</button>
        </div>
      ))}
    </>
  );
}

export default CardTemplate;
