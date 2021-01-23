import React, { useState } from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
  ItemDetail,
} from "../../components";

import { scrollContainer } from "./ReactCompo.module.css";

const itemList = [
  {
    id: 1,
    title: "Component 1 -->",
  },
  {
    id: 2,
    title: "Component 2 -->",
  },
  {
    id: 3,
    title: "Component 3 -->",
  },
  {
    id: 4,
    title: "Component 4 -->",
  },
  {
    id: 5,
    title: "Component 5 -->",
  },
];

function ReactCompo() {
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
      <DescContainer>
        {showItemDesc === 0 ? <p>No item selected</p> : <>{itemDetails}</>}
      </DescContainer>
    </MainContainer>
  );
}

export default ReactCompo;
