import React from "react";

function BackOffice() {
  return (
    <div className="container">
      <div className="admin__container">
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        Add Item Name:
        <input />
        Add Item description:
        <input />
        Add Item price:
        <input />
        Add Item quantity:
        <input />
        Add Item Image:
        <input />
        Add Item Category:
        <input />
        <div className="modify__btn">
          <button className="add__btn">Add!</button>
        </div>
      </div>

      <main className="item__table">
        <input className="item__search" placeholder="search" />
        <h2>Items</h2>
        <div className="item__details">
          <table>
            <thead>
              <tr className="items">
                <th>Ps5</th>
                <th>description</th>
                <th>price</th>
                <th>quantity</th>
                <img
                  className="item__img"
                  src="https://www.scoop.com.tn/44780-home_default/console-sony-ps5-digital-edition-ea-sports-fc-24.jpg"
                />
                <div className="delete__add__btn">
                  <button className="add__btn">Update!</button>
                  <button className="add__btn">Delete!</button>
                </div>
              </tr>
            </thead>
          </table>
          <table>
            <thead>
              <tr className="items">
                <th>Ps5</th>
                <th>description</th>
                <th>price</th>
                <th>quantity</th>
                <img
                  className="item__img"
                  src="https://www.scoop.com.tn/44780-home_default/console-sony-ps5-digital-edition-ea-sports-fc-24.jpg"
                />
                <div className="delete__add__btn">
                  <button className="add__btn">Update!</button>
                  <button className="add__btn">Delete!</button>
                </div>
              </tr>
            </thead>
          </table>
          <table>
            <thead>
              <tr className="items">
                <th>Ps5</th>
                <th>description</th>
                <th>price</th>
                <th>quantity</th>
                <img
                  className="item__img"
                  src="https://www.scoop.com.tn/44780-home_default/console-sony-ps5-digital-edition-ea-sports-fc-24.jpg"
                />
                <div className="delete__add__btn">
                  <button className="add__btn">Update!</button>
                  <button className="add__btn">Delete!</button>
                </div>
              </tr>
            </thead>
          </table>
        </div>
      </main>
    </div>
  );
}

export default BackOffice;
