import React from "react";
import GithubCorner from "react-github-corner";
import { Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  logo: {
    textDecoration: "none",
    color: theme.palette.primary.main
  },
  toolbar: {
    backgroundColor: theme.palette.background.default
  }
});

export default withStyles(styles, { withTheme: true })(({ classes, theme }) => (
  <Toolbar classes={{ root: classes.toolbar }}>
    <GithubCorner
      href="https://www.github.com/noincomedev"
      bannerColor={theme.palette.custom.accent}
      octoColor={theme.palette.primary.main}
      size={100}
      direction="right"
    />
    <Typography className={classes.logo} component={Link} to="/" variant="h6">
      {Meteor.settings.public.appName}
    </Typography>
  </Toolbar>
));
