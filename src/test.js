export function Title(props) {
    return (
      <div>
        <button onClick={props.handleClick}>Welcome {props.title}</button>
      </div>
    );
  }