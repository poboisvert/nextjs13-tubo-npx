import classes from './IssueDetails.module.css';

function IssueDetails({ issue }) {
  return (
    <article className={classes.details}>
      <header>
        <h1>{issue.title}</h1>sss
        <p>{issue.completed}</p>
      </header>
      <p>{issue.title}</p>
    </article>
  );
}

export default IssueDetails;
