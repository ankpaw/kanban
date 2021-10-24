import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Icon,
  Grid,
  Button,
} from "@mui/material";
import {
  BugReport,
  Task,
  Whatshot,
  Web,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
const KanbanCard = ({
  card,
  prevKey,
  nextKey,
  currentKey,
  moveNext,
  moveBack,
}) => {
  return (
    <Card>
      <CardHeader
        title={
          <Typography sx={{ fontWeight: "600" }}>
            {card.type === "BUG" ? (
              <Icon>
                <BugReport />
              </Icon>
            ) : null}
            {card.type === "TASK" ? (
              <Icon>
                <Task />
              </Icon>
            ) : null}
            {card.type === "EPIC" ? (
              <Icon>
                <Whatshot />
              </Icon>
            ) : null}
            {card.type === "STORY" ? (
              <Icon>
                <Web />
              </Icon>
            ) : null}
            {card.title}
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Typography>{card.description}</Typography>
        <Typography>
          <b>Assigned To:</b> {card.assignedTo}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          {true ? (
            <Button
              onClick={() => {
                moveBack(currentKey, prevKey, card);
              }}
              sx={{ width: "100%" }}
              size="small"
            >
              <ChevronLeft />
            </Button>
          ) : null}
          {true ? (
            <Button
              onClick={() => {
                moveNext(currentKey, nextKey, card);
              }}
              sx={{ width: "100%" }}
              size="small"
            >
              <ChevronRight />
            </Button>
          ) : null}
        </Grid>
      </CardActions>
    </Card>
  );
};
export default KanbanCard;
