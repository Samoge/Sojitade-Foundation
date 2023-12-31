import React from "react";
import { Link } from "react-router-dom";
import { svgSmallStyles, NewsLink } from "../assets/styles";
import { newsGridItem, newsGridContainer } from "../assets/styles";
import { news, actualContent } from "../assets/info";
import svg from "../images/soji-svg.png";
import { Typography, Grid, Box, Paper } from "@mui/material";

const NewsMini = () => {
  const newsToDisplay = actualContent.slice(0, 3).map((newsItem, i) => ({
    ...newsItem,
    id: i + 1,
  }));
  const newsBox = {
    bgcolor: "#c5c5c526",
    paddingBottom: 5,
    mb: 5,
  };
  return (
    <div>
      <Typography variant="h4" align="center" mt={5}>
        Latest News
      </Typography>
      <img src={svg} alt="" style={svgSmallStyles} />
      <Typography align="center" mb={5}>
        As a non-governmental firm, Sojitade has taken a few <br />
        steps in the following areas.
      </Typography>
      <Box sx={newsBox}>
        <Grid container sx={newsGridContainer}>
          {newsToDisplay.map((news) => (
            <Grid
              item
              key={news.id}
              sx={newsGridItem}
              component={Paper}
              elevation={10}
            >
              <Typography
                variant="h6"
                color="secondary"
                fontWeight={600}
                mb={4}
              >
                {news.title}
              </Typography>
              <Typography fontSize={12} mb={3}>
                {news.newsContent.slice(0, 400)} {' '} <NewsLink to="/news">Read more</NewsLink>
              </Typography>
              <Typography color="secondary">{news.date}</Typography>
            </Grid>
          ))}
        </Grid>
        <Link className="showLink" to="/news">
          Show All
        </Link>
      </Box>
    </div>
  );
};

export default NewsMini;
