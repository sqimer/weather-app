import React, { useEffect, useState } from "react";
import { Wrap, Articles } from "./news.style";

import axios from "axios";
import Navbar from "../Navbar/Navbar";
import ArticleList from "../../components/Articles/Articles";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const res = await axios(
        "http://newsapi.org/v2/top-headlines?country=us&apiKey=1779fe95e9d94bc883adb6f2719dc022"
      );
      console.log(res.data.articles);
      setArticles(res.data.articles);
    };

    getNews();
  }, []);

  return (
    <Wrap>
      <Navbar />
      <Articles>
        {articles.length > 0 && <ArticleList articles={articles} />}
      </Articles>
    </Wrap>
  );
};

export default News;
