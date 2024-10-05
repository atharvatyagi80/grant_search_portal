import React from 'react';

function GrantList({ grants, onGrantSelect }) {
  return (
    <div className="grant-list">
      <h2>Grant Suggestions</h2>
      <ul>
        {grants.map((grant) => (
          <li key={grant.id}>
            <a
              href="#"
              onClick={() => onGrantSelect(grant)}
            >
              {grant.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GrantList;
