import React from "react";
import "./Lists.css";

const ListMaping = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        const { listItem } = item;
        return <>{listItem && <li>{listItem}</li>}</>;
      })}
    </>
  );
};

const Lists = ({ data, moreData }) => {
  return (
    <div className="listContent">
      <h2>OVERVIEW</h2>
      <hr />
      <p>
        {data[0].des}
      </p>

      <div className="listContainer">
        <ul>
          <ListMaping props={data} />
        </ul>
      </div>

      {moreData.map((ele) => (
        <React.Fragment>
          <h2>{ele.title}</h2>
          <hr />
          <div className="listContainer">
            <ul>
              <ListMaping props={ele.data} />
            </ul>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Lists;
