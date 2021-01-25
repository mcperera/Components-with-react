import React, { useState } from "react";

import {
  MainContainer,
  CompContainer,
  DescContainer,
  Item,
  ItemDetail,
} from "../";

function PageLayout({ itemList }) {
  const [showItemDesc, setShowItemDesc] = useState(1);

  const handleItemDesc = (itemId) => {
    setShowItemDesc(itemId);
  };

  const items = itemList.map((item) => {
    const { id, title, shortDesc, gitUrl, link, img } = item;

    return (
      <Item
        key={id}
        id={id}
        title={title}
        shortDesc={shortDesc}
        gitUrl={gitUrl}
        link={link}
        img={img}
        handleItemDesc={() => handleItemDesc(id)}
      />
    );
  });

  const itemDetails = itemList.map((item) => {
    const { id, title, description, img } = item;
    let element = null;

    if (item.id === showItemDesc) {
      element = (
        <ItemDetail
          key={item.id}
          id={id}
          title={title}
          img={img}
          description={description}
        />
      );
    }
    return element;
  });

  return (
    <MainContainer>
      <CompContainer items={items} />
      <DescContainer isSelected={showItemDesc}>
        {showItemDesc === 0 ? <p>No item selected</p> : <>{itemDetails}</>}
      </DescContainer>
    </MainContainer>
  );
}

export default PageLayout;
