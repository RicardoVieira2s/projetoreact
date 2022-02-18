import React, { useState } from "react";
import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import StarsReview from "./starsReview";
import { COLOR_BDAZZLED_BLUE, COLOR_RICH_BLACK, COLOR_PLATINIUM } from "./color";
import { TextField } from "@mui/material";
import CustomButton from "./customButton";
import { reviewApi } from "../../api";
import { ReviewSchema } from "../../api/src";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Cookies from "universal-cookie";
import camelCaseKeysToUnderscore from "./api/camelCaseKeysToUnderscore";
import { useParams } from 'react-router-dom'


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function GameReviews({ reviews, myReview = null }) {
    const [stars, setStars] = useState("");
    const [review, setReview] = useState("")
    const [open, setOpen] = React.useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const { id } = useParams()

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const addReview = async e => {
        e.preventDefault();
        e.stopPropagation();

        let body = new ReviewSchema()
        body = camelCaseKeysToUnderscore(body)
        body.id_game = id
        body.id_client = new Cookies().get("clientID")
        body.stars = 3
        body.review = review


        if (myReview.idGame === undefined || myReview.idGame === null) {

            reviewApi.reviewPost(body, (error, data, response) => {
                console.log(body)
                alert(body)
                if (error) {
                    setAlertMessage(JSON.parse(response.text).error)
                    setOpen(true);
                } else {
                    window.location.reload(true)
                }
            })
        } else {
            reviewApi.reviewPut(body, myReview.id, (error, data, response) => {
                if (error) {
                    setAlertMessage(JSON.parse(response.text).error)
                    setOpen(true);
                } else {
                    window.location.reload(true)
                }
            })
        }

        return false
    }

    return (
        <div style={{ padding: 14 }}>
            {myReview !== null &&
                <Paper style={{ padding: "40px 20px", marginBottom: "20px", background: COLOR_PLATINIUM }}>
                    <form
                        method="POST"
                        onSubmit={addReview}
                    >
                        <TextField
                            fullWidth
                            label="Review"
                            multiline
                            rows={3}
                            defaultValue={myReview.review}
                            style={{
                                marginBottom: '5px'
                            }}
                            onChange={e => setReview(e.target.value)}
                        />
                        <CustomButton
                            name={"Adicionar Review"}
                        />
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
            <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {alertMessage}
                </Alert>
            </Snackbar>
        </div>
    );
}

