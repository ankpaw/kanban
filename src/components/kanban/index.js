import { Grid, Typography } from "@mui/material";
import "./styles.css";
import KanbanCard from "../kanbanCard";
const Kanban = ({ cards, setDisplayCards }) => {
  const moveNext = (currentKey, nextKey, item) => {
    let newCards = cards;
    newCards[currentKey].cards = newCards[currentKey].cards.filter(
      (card) => card.id !== item.id
    );
    newCards[nextKey].cards.push(item);
    localStorage.setItem("prevState", JSON.stringify(newCards));
    setDisplayCards({ ...cards, ...newCards });
  };
  const moveBack = (currentKey, prevKey, item) => {
    let newCards = cards;
    newCards[currentKey].cards = newCards[currentKey].cards.filter(
      (card) => card.id !== item.id
    );
    newCards[prevKey].cards.push(item);
    localStorage.setItem("prevState", JSON.stringify(newCards));
    setDisplayCards({ ...cards, ...newCards });
  };
  const keys = [...Object.keys(cards)];
  return (
    <div className="kanban">
      <Grid container spacing={3}>
        {keys.map((key, index) => {
          return (
            <Grid key={cards[key].id} item xs={12} sm={6} md={4} lg={2}>
              <Typography
                sx={{
                  color: cards[key].background,
                  fontWeight: 600,
                  textAlign: "center",
                }}
                component="h3"
                variant="h5"
              >
                {key}
              </Typography>
              {cards[key].cards.map((card) => {
                return (
                  <KanbanCard
                    key={card.id}
                    currentKey={key}
                    nextKey={index < keys.length ? keys[index + 1] : "DONE"}
                    prevKey={index > 0 ? keys[index - 1] : "TO DO"}
                    card={card}
                    moveNext={moveNext}
                    moveBack={moveBack}
                  />
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Kanban;
