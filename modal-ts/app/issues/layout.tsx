import IssuesList from "./IssueList";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

async function getData() {
  // `force-cache` is the default and can be omitted.
  // Similar to `getServerSideProps`.
  // Similar to `getStaticProps` with the `revalidate` option.

  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

async function IssuesLayout({ children }: Props) {
  const data = await getData();

  return (
    <div className="layout">
      <aside className="sidebar">
        <IssuesList issues={data} />
      </aside>
      {children}
    </div>
  );
}

export default IssuesLayout;
