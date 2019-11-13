import React from 'react';

import CollectionItem from '../collection-item/collection-item.component.jsx';

import {
  CollectionPreviewContainer,
  PreviewContainer,
  CollectionPreviewTitleLink
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitleLink to={`/shop/${title.toLowerCase()}`}>
      {title}
    </CollectionPreviewTitleLink>
    <PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default CollectionPreview;
