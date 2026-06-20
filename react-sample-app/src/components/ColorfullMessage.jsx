export const ColorfullMessage = ( props) => {
  return(
    <p style={{ color: props.color }}>{props.children}</p>
  );
};

export default ColorfullMessage;