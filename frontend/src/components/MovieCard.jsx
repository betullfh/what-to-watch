import React, { useState } from "react";
import { Card, CardContent, CardActions, CardMedia, Typography, Button } from "@mui/material";
import { BiLike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "../css/MovieCard.css";

function MovieCard(props) {
  const { id, title, genre, director, rating, image_url, release_year } = props.film;
  const [voteCount, setVotecount] = useState(rating);
  const navigate = useNavigate(); // navigate tanımlandı

  return (
    <Card
      className="movie-card"
      sx={{
        width: "220px",
        height: "350px",
        margin: "15px",
        backgroundColor: "#1c4471",
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Butonu alta sabitler
        overflow: "hidden",
      }}
    >
      {/* Film Görseli */}
      <CardMedia
        component="img"
        alt={title || "Film Afişi"}
        image={image_url || "/path/to/default-image.jpg"}
        sx={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
        }}
      />

      {/* Film Bilgileri */}
      <CardContent sx={{ textAlign: "center", padding: "10px" }}>
        <Typography variant="h6" sx={{ fontSize: "16px", fontFamily: "monospace" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#b3b3b3" }}>
          Tür: {genre}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#b3b3b3" }}>
          Yönetmen: {director}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#b3b3b3" }}>
          Yıl: {release_year}
        </Typography>
      </CardContent>

      {/* Beğeni ve Güncelle Butonu */}
      <CardActions sx={{ justifyContent: "space-between", padding: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiLike
            onClick={() => setVotecount(voteCount + 1)} // Beğeni sayısını artırır
            style={{
              fontSize: "20px",
              color: "#ff4081",
              cursor: "pointer",
              marginRight: "10px",
            }}
          />
          <span>{voteCount}</span>
        </div>
        <Button
          variant="text"
          color="warning"
          onClick={() => navigate("/updateMovie", { state: { id } })}
          size="small"
          sx={{marginRight:"75px"}}
        >
          Güncelle
        </Button>
        
      </CardActions>
    </Card>
  );
}

export default MovieCard;
