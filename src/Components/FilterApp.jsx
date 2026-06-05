import {
  useState,
  useDeferredValue,
} from "react";

const users = Array.from(
  { length: 10000 },
  (_, i) => `User ${i + 1}`
);

function FilterApp() {
  const [search, setSearch] = useState("");

  const deferredSearch =
    useDeferredValue(search);

  const filteredUsers = users.filter((user) =>
    user
      .toLowerCase()
      .includes(deferredSearch.toLowerCase())
  );

  return (
    <div>
      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search..."
      />

      <h3>
        Search Value : {search}
      </h3>

      <h3>
        Deferred Value : {deferredSearch}
      </h3>

      {filteredUsers.slice(0, 20).map((user) => (
        <p key={user}>{user}</p>
      ))}
    </div>
  );
}

export default FilterApp;