export default function Singer({singerGot}) {
    console.log(singerGot);
    return (
      <div>
        <p>ID: {singerGot.id}</p>
        <h4>Singer: {singerGot.name}</h4>
        <p>Age: {singerGot.age}</p>
      </div>
    );
  }  