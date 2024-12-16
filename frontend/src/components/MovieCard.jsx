import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../css/MovieCard.css";

function MovieCard(props) {
  const { id, title, genre, director, rating, image_url } = props.film;

  const [voteCount, setVotecount] = useState(rating);

  
  return (
    <Card
      className="movie-card"
      sx={{
        width: "220px", // Daha kompakt genişlik
        height: "310px", // Daha kompakt yükseklik
        margin: "15px",
        backgroundColor: "#1c4471", // Daha koyu arka plan
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Görsel */}
      <CardMedia
        component="img"
        alt={title || "Film Afişi"}
        image={image_url || "/path/to/default-image.jpg"}
        sx={{
          width: "100%",
          height: "100px", // Görsel yüksekliği küçüldü
          objectFit: "cover",
        }}
      />

      {/* Bilgi ve Oy */}
      <CardContent sx={{ textAlign: "center", padding: "10px", height:"140px" }}>
        <Typography variant="h6" sx={{ fontFamily: "monospace", fontSize: "16px" }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#b3b3b3" }}>
          {genre}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "12px", color: "#b3b3b3" }}>
          Yönetmen: {director}
        </Typography>
      </CardContent>

      {/* Oy ve Detay */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          marginBottom: "0px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiLike
            
            style={{
              fontSize: "20px",
              color: "#ff4081",
              cursor: "pointer",
              marginRight: "5px",
            }}
          />
          <span>{voteCount}</span>
        </div>
        <Link to={`details/${id}`} style={{ textDecoration: "none", color: "#00bcd4" }}>
          Detay
        </Link>
      </div>
    </Card>
  );
}

export default MovieCard;
