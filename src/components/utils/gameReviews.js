import React from "react";
import ReactDOM from "react-dom";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import { clientApi } from "../../api";
import StarsReview from "./starsReview";
import { COLOR_BDAZZLED_BLUE, COLOR_RICH_BLACK, COLOR_PLATINIUM } from "./color";

const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";


export default function GameReviews({ reviews, myReview = null }) {
    return (
        <div style={{ padding: 14 }}>
            {console.log("myreview: ", myReview)}
            {myReview !== null &&
                <Paper style={{ padding: "40px 20px", marginBottom: "20px", background: COLOR_PLATINIUM }}>
                    <form>

                    </form>
                </Paper>
            }
            {reviews.length !== 0 &&
                <div>
                    <Paper style={{ padding: "40px 20px", background: COLOR_PLATINIUM }}>

                        
                        {reviews.map((review, index) => {
                            return (
                                <div key={index}>


                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src={review.client.picture} />
                                        </Grid>
                                        <Grid justifyContent="left" item xs zeroMinWidth>
                                            <h4 style={{ margin: 0, textAlign: "left", color: COLOR_RICH_BLACK }}>{review.client.name}</h4>
                                            <p style={{ textAlign: "left" }}>

                                                <StarsReview gameId={review.idGame} />
                                            </p>
                                            <p style={{ textAlign: "left", wordWrap: "break-word", color: COLOR_BDAZZLED_BLUE }}>
                                                {review.review}
                                            </p>
                                        </Grid>
                                    </Grid>
                                    {index !== reviews.length - 1 &&
                                        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
                                    }
                                </div>
                            )
                        }
                        )}
                    </Paper>
                </div>
            }
        </div>
    );
}

