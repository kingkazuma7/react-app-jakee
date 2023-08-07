import classes from "./CssModules.module.scss";

export const CssModules = () => {
  console.log(classes);
  return (
    <div className={classes.container}>
      <p className={classes.title}>CssModules</p>
    </div>
  )
}