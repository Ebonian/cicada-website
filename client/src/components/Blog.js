export default function Blog({ contents }) {
  return (
    <div>
      {contents.map((content) => (
        <div>
          <p>{content.name}</p>
          <p>{content.content}</p>
        </div>
      ))}
    </div>
  );
}
