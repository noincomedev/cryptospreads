import React from "react";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import MarketGrid from "../layouts/components/grids/MarketGridLayout";

const styles = theme => ({
  rootContainer: {
    background: theme.palette.background.default
  },
  contentContainer: {
    flex: 1,
    height: "100%",
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`
  },
  divider: {
    paddingBottom: theme.spacing.unit / 3,
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing.unit * 2
  },
  footerContainer: {
    borderTop: `4px solid ${theme.palette.primary.main}`,
    padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`
  },
  buda: {
    width: "100%"
  },
  developedBy: {
    color: theme.palette.primary.dark
  }
});

const buda_logo = `https://www.buda.com/assets/buda/logo-dark-a0a9f1677f96abe42a78f4040178dbd45c26206564773b29cf2e3054082eb867.png`;

export default withStyles(styles)(({ classes }) => (
  <Grid
    container
    style={{ flex: 1 }}
    classes={{ container: classes.rootContainer }}
    direction="column"
  >
    <Grid
      container
      classes={{ container: classes.contentContainer }}
      alignContent="flex-start"
      direction="column"
    >
      <Grid item xs={12}>
        <Typography variant="h4" color="secondary" align="left">
          Markets
        </Typography>
        <Divider classes={{ root: classes.divider }} />
      </Grid>
      <MarketGrid />
    </Grid>
    <Grid
      container
      justify="space-between"
      classes={{ container: classes.footerContainer }}
    >
      <Grid item xs={3}>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100%" }}
        >
          <Button
            variant="text"
            color="primary"
            align="center"
            href="https://www.twitter.com/droblesv"
          >
            Developed by NOINCOMEDEV
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="caption" color="secondary" align="center">
          Powered by
        </Typography>
        <img src={buda_logo} className={classes.buda} />
      </Grid>
    </Grid>
  </Grid>
));
