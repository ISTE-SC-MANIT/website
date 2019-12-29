import React from "react";
import { WithStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core/styles";
import { Link, Typography } from "@material-ui/core";

interface Props {
  src: string;
}
const styles = (theme: Theme) =>
  createStyles({
    container: {
      height: "60vh",
      margin: 0,
      marginTop: "1rem",
      padding: 0,
      background: (props: Props) => `url("${props.src}")`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      backgroundAttachment: "fixed !important"
    },
  });

const Component: React.FunctionComponent<Props & WithStyles<typeof styles>> = ({
  classes,
  ...props
}) => {
  return (
    <>
      <div className={classes.container} />
      <Typography variant="subtitle1" align="center">
        Photo by{" "}
        <strong>
          <Link href="https://www.pexels.com/@markusspiske?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
            Markus Spiske temporausch.com
          </Link>
        </strong>{" "}
        from{" "}
        <strong>
          <Link href="https://www.pexels.com/photo/photo-of-green-data-matrix-1089438/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
            Pexels
          </Link>
        </strong>
      </Typography>
    </>
  );
};

export default withStyles(styles)(Component);
