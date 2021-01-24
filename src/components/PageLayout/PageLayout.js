import React, { useState } from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
  ItemDetail,
} from "../";

import { scrollContainer } from "./PageLayout.mdoule.css";

function PageLayout({ itemList }) {
  const [showItemDesc, setShowItemDesc] = useState(0);

  const handleItemDesc = (itemId) => {
    setShowItemDesc(itemId);
  };

  const items = itemList.map((item) => {
    const { id, title } = item;

    return (
      <Item
        key={id}
        id={id}
        title={title}
        handleItemDesc={() => handleItemDesc(id)}
      />
    );
  });

  const itemDetails = itemList.map((item) => {
    let element = null;

    if (item.id === showItemDesc) {
      element = <ItemDetail key={item.id} id={item.id} title={item.title} />;
    }
    return element;
  });

  return (
    <MainContainer>
      <CompContainer>
        <div className={scrollContainer}>{items}</div>
      </CompContainer>
      <DescContainer isSelected={showItemDesc}>
        {showItemDesc === 0 ? <p>No item selected</p> : <>{itemDetails}</>}
      </DescContainer>
    </MainContainer>
  );
}

export default PageLayout;
