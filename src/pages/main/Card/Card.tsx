/* eslint-disable react/jsx-key */
import * as React from 'react';

import { Button, Card, Skeleton } from 'antd';
import { PlusCircleOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from 'routes';

import './styles.css';
import { IBeer } from 'models/Beer';
import { CartStore } from 'store';

interface IBeerCardProps {
  data: IBeer;
}

const { Meta } = Card;

const BeerCard: React.FC<IBeerCardProps> = ({ data }) => {
  const addItemToCard = () => {
    CartStore.addProduct(data);
  };

  return (
    <Card
      title={data.name}
      actions={[
        <Button icon={<StarOutlined />} />,

        <Link to={routes.details(String(data.id))}>
          <Button>Details...</Button>
        </Link>,
        <Button
          className="beer_add-to-cart"
          onClick={addItemToCard}
          icon={
            <>
              <PlusCircleOutlined />
              <ShoppingCartOutlined />
            </>
          }
        />,
        <Link to={routes.cart() + CartStore.generateParamsToCart()}>
          <Button className="actions-container_item" icon={<ShoppingCartOutlined />} />
        </Link>,
      ]}
    >
      <Skeleton loading={!data} avatar active>
        <Meta
          avatar={<img className="beer-img" src={data.image_url} alt={data.name} />}
          title={data.name}
          description={data.description}
        />
      </Skeleton>
    </Card>
  );
};

export default React.memo(BeerCard);
