import { wait } from "../../../util/delay";
import IssueDetails from "./IssueDetails";

async function getData(issueId) {
  console.log("sss");
  // `force-cache` is the default and can be omitted.
  // Similar to `getServerSideProps`.
  // Similar to `getStaticProps` with the `revalidate` option.

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${issueId}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

async function IssueDetailsPage({ params }) {
  const issue = await getData(params.issueId);
  await wait(1);
  if (!issue) {
    throw new Error("Issue not found!");
  }

  return <IssueDetails issue={issue} />;
}

export default IssueDetailsPage;
