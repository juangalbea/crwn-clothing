import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <div className='title-row'>
      <div className='title-group'>
        <Link className='title' to={`/shop/${title.toLowerCase()}`}>
          {title}
        </Link>
        <span className='item-count'>{items.length} pieces</span>
      </div>
      <Link className='view-all-link' to={`/shop/${title.toLowerCase()}`}>
        View Collection
      </Link>
    </div>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
