import React from "react";
import {
  Title,
  Author,
  Content,
  Wrap,
  DatePublished,
} from "./articlesItem.style";

import { Card, Button } from "antd";
import Moment from "moment";

const ArticlesItem = ({ item }) => {
  return (
    <Card style={{ margin: "15px auto" }}>
      <Author>{item.source.name}</Author>
      <Title>{item.title}</Title>
      <Content>{item.description}</Content>
      <Wrap>
        <Button type="primary">Добавить в закладки</Button>
        <DatePublished>
          {Moment(item.publishedAt).format("DD-MM-YYYY, HH:mm")}
        </DatePublished>
      </Wrap>
    </Card>
  );
};

export default ArticlesItem;
